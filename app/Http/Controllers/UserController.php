<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Role;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * List all users profile here
     */
    public function list(Request $request): Response
    {
        $all_users_count = User::all()->count();
        $users = User::when($request->search_key, function ($query, $searchKey) {
            return $query->where('first_name', 'like', '%' . $searchKey . '%')->orWhere('last_name', 'like', '%' . $searchKey . '%');
        })
        ->when($request->page, function ($query, $page) {
            // Get the first 10 times the number of the current page
            $skip = 10 * max(0, $page - 1);
            return $query->skip($skip)->take(10);
        })->take(10)->get();

        return Inertia::render('DataPengguna', [
            'users' => $users,
            'all_users_count' => $all_users_count,
            'search_key' => $request->search_key,
            'page'=> $request->page,
        ]);
    }

    /**
     * Display the user's profile form.
     */
    public function add(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'register_date' => 'required',
            'password' => 'required',
            'role' => 'required',
            'job_title' => 'required',
            'division' => 'required',
            'password' => 'required|confirmed|min:6',
            'password_confirmation' => 'required|min:6',
        ]);

        if ($request->id) {
            $user = User::find($request->id);
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->email = $request->email;
            $user->register_date = $request->register_date;
            $user->division = $request->division;
            $user->job_title = $request->job_title;
            $user->role = $request->role;
            $user->description = $request->description;
            $user->password = Hash::make($request->password);
            $user->save();

            $role = Role::findOrFail($request->role);

            $user->roles()->detach();
            $user->roles()->save($role);

            return Redirect::route('dashboard.data-pengguna');
        }

        $validated = $request->validate([
            'email' => 'required|unique:users,email',
        ]);

        $created_user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'register_date' => $request->register_date,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'job_title' => $request->job_title,
            'division' => $request->division,
            'description' => $request->description,
        ]);

        $role = Role::findOrFail($request->role);

        $created_user->roles()->detach();
        $created_user->roles()->save($role);

        return Redirect::route('dashboard.data-pengguna');
    }

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('TambahPengguna', [
            'user' => User::find($request->id),
            'roles' => Role::all(),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function delete(Request $request): RedirectResponse
    {
        $user = User::find($request->route('id'));
        $user->delete();

        return Redirect::route('dashboard.data-pengguna');
    }
}
