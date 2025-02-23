<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisteredUserController extends Controller
{
    /**
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    {
            'name' => 'required|string|max:255',
        ]);

        $user = User::create([
        ]);

        event(new Registered($user));

        Auth::login($user);

    }
}
