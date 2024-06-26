<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminRoleAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = Role::create([
            'role' => 'Admin'
        ]);

        $user_admin = User::where('email', 'admin@admin.com')->get()->first();

        $user_admin->roles()->save($admin);

        $admin->permissions()->createMany([
            ['name' => 'data-pengguna'],
            ['name' => 'tambah-pengguna'],
            ['name' => 'tambah-pengguna/{id}'],
            ['name' => 'data-surat-masuk'],
            ['name' => 'upload-surat-masuk'],
            ['name' => 'tindak-lanjuti-surat-masuk'],
            ['name' => 'upload-surat-masuk/{id}'],
            ['name' => 'laporan-surat-masuk'],
            ['name' => 'laporan-surat-masuk/export'],
            ['name' => 'data-surat-keluar'],
            ['name' => 'upload-surat-keluar'],
            ['name' => 'tindak-lanjuti-surat-keluar'],
            ['name' => 'upload-surat-keluar/{id}'],
            ['name' => 'laporan-surat-keluar'],
            ['name' => 'laporan-surat-keluar/export'],
            ['name' => 'template-surat'],
            ['name' => 'profile'],
        ]);

        $sekretaris = Role::create([
            'role' => 'Sekretaris'
        ]);

        $sekretaris->permissions()->createMany([
            // ['name' => 'data-pengguna'],
            // ['name' => 'tambah-pengguna'],
            // ['name' => 'tambah-pengguna/{id}'],
            ['name' => 'data-surat-masuk'],
            ['name' => 'upload-surat-masuk'],
            ['name' => 'tindak-lanjuti-surat-masuk'],
            ['name' => 'upload-surat-masuk/{id}'],
            ['name' => 'laporan-surat-masuk'],
            ['name' => 'laporan-surat-masuk/export'],
            ['name' => 'data-surat-keluar'],
            ['name' => 'upload-surat-keluar'],
            ['name' => 'tindak-lanjuti-surat-keluar'],
            ['name' => 'upload-surat-keluar/{id}'],
            ['name' => 'laporan-surat-keluar'],
            ['name' => 'laporan-surat-keluar/export'],
            ['name' => 'template-surat'],
            ['name' => 'profile'],
        ]);

        $ketua = Role::create([
            'role' => 'Ketua'
        ]);

        $ketua->permissions()->createMany([
            // ['name' => 'data-pengguna'],
            // ['name' => 'tambah-pengguna'],
            // ['name' => 'tambah-pengguna/{id}'],
            // ['name' => 'data-surat-masuk'],
            // ['name' => 'upload-surat-masuk'],
            // ['name' => 'tindak-lanjuti-surat-masuk'],
            // ['name' => 'upload-surat-masuk/{id}'],
            ['name' => 'laporan-surat-masuk'],
            ['name' => 'laporan-surat-masuk/export'],
            // ['name' => 'data-surat-keluar'],
            // ['name' => 'upload-surat-keluar'],
            // ['name' => 'tindak-lanjuti-surat-keluar'],
            // ['name' => 'upload-surat-keluar/{id}'],
            ['name' => 'laporan-surat-keluar'],
            ['name' => 'laporan-surat-keluar/export'],
            // ['name' => 'template-surat'],
            ['name' => 'profile'],
        ]);

        $user = Role::create([
            'role' => 'User'
        ]);

        $user->permissions()->createMany([
            // ['name' => 'data-pengguna'],
            // ['name' => 'tambah-pengguna'],
            // ['name' => 'tambah-pengguna/{id}'],
            // ['name' => 'data-surat-masuk'],
            // ['name' => 'upload-surat-masuk'],
            // ['name' => 'tindak-lanjuti-surat-masuk'],
            // ['name' => 'upload-surat-masuk/{id}'],
            ['name' => 'laporan-surat-masuk'],
            ['name' => 'laporan-surat-masuk/export'],
            // ['name' => 'data-surat-keluar'],
            // ['name' => 'upload-surat-keluar'],
            // ['name' => 'tindak-lanjuti-surat-keluar'],
            // ['name' => 'upload-surat-keluar/{id}'],
            ['name' => 'laporan-surat-keluar'],
            ['name' => 'laporan-surat-keluar/export'],
            // ['name' => 'template-surat'],
            ['name' => 'profile'],
        ]);
    }
}
