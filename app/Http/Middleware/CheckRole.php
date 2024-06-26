<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();
        $routeUri = $request->route()->uri;

        // Assuming you have a 'permissions' relationship in your Role model
        $userPermissions = $user->roles->pluck('permissions')->flatten()->pluck('name');

        if ($userPermissions->contains($routeUri)) {
            return $next($request);
        } else {
            // User doesn't have permission
            // abort(403, 'Unauthorized');
            toastr()->warning('You are not authorized. Redirecting to Beranda.');

            return redirect('beranda');
        }
    }
}
