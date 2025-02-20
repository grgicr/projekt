<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class RegisteredUserController extends Controller
{
    /**
     * Obrada registracije korisnika.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): JsonResponse|RedirectResponse
    {
        // ✅ Validacija podataka
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:users,email',
            'password' => ['required', 'confirmed', Password::defaults()],
            'role_id' => 'nullable|integer|exists:roles,id', // Mora postojati u tabeli "roles"
        ]);

        // ✅ Kreiranje korisnika (default role_id = 2 ako nije poslan)
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role_id' => $validated['role_id'] ?? 2, // Ako role_id nije poslan, postavi na 2
        ]);

        // ✅ Laravel event (ako se koristi)
        event(new Registered($user));

        // ✅ Automatska prijava korisnika
        Auth::login($user);

        // ✅ Ako je API zahtjev, vraćamo JSON response
        if ($request->wantsJson()) {
            return response()->json([
                'message' => 'Registracija uspješna!',
                'user' => $user
            ], 201);
        }

        // ✅ Ako nije API, redirektujemo na dashboard
        return redirect()->route('dashboard');
    }
}
