<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'first_name' => 'Super',
            'last_name' => 'Admin',
            'role' => '1',
            'email' => 'admin@admin.com',
            'password' => Hash::make('password'),
            'register_date' => Carbon::now(),
            'job_title' => 'Anggota',
        ]);
    }
}
