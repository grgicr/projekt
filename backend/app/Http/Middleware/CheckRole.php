<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckRole
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next, $role)
    {
        if (!Auth::check()) {
            return redirect('/login'); // Ako korisnik nije prijavljen, preusmjeri ga na login
        }

        if (Auth::user()->role->slug !== $role) {
            abort(403, 'Nemate dozvolu za pristup ovoj stranici.'); // Forbidden
        }

        return $next($request);
    }
}
