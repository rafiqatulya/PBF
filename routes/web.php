<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SuratKeluarController;
use App\Http\Controllers\SuratMasukController;
use App\Http\Controllers\TemplateSurat;
use App\Http\Controllers\UserController;
use App\Http\Middleware\CheckRole;
use App\Models\Mail;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect("/login");
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
});

Route::get('/beranda', function () {
    return Inertia::render('Dashboard', [
        'all_surat_masuk_count' => Mail::where('type', 'in')->count(),
        'all_surat_keluar_count' => Mail::where('type', 'out')->count(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified', CheckRole::class])->group(function () {
    // User
    Route::get('/data-pengguna', [UserController::class, 'list'])->middleware(['auth', 'verified'])->name('dashboard.data-pengguna');
    Route::get('/tambah-pengguna', function () {
            return Inertia::render('TambahPengguna', [
                'user' => new User,
                'roles' => Role::all(),
            ]);
        })->middleware(['auth', 'verified'])->name('dashboard.tambah-pengguna');
    Route::post('/tambah-pengguna', [UserController::class, 'add'])->name('user.add');
    Route::put('/tambah-pengguna', [UserController::class, 'edit'])->name('user.edit');
    Route::delete('/tambah-pengguna/{id}', [UserController::class, 'delete'])->name('user.delete');

    // Surat Masuk
    Route::get('/data-surat-masuk', [SuratMasukController::class, 'list'])->middleware(['auth', 'verified'])->name('dashboard.data-surat-masuk');
    Route::get('/upload-surat-masuk', function () {
        return Inertia::render('UploadSuratMasuk', [
            'surat_masuk' => new Mail
        ]);
    })->middleware(['auth', 'verified'])->name('dashboard.upload-surat-masuk');
    Route::post('/upload-surat-masuk', [SuratMasukController::class, 'add'])->name('surat-masuk.add');
    Route::post('/tindak-lanjuti-surat-masuk', [SuratMasukController::class, 'updateStatus'])->name('surat-masuk.update-status');
    Route::put('/upload-surat-masuk', [SuratMasukController::class, 'edit'])->name('surat-masuk.edit');
    Route::delete('/upload-surat-masuk/{id}', [SuratMasukController::class, 'delete'])->name('surat-masuk.delete');


    Route::get('/laporan-surat-masuk', [SuratMasukController::class, 'laporan'])->middleware(['auth', 'verified'])->name('dashboard.laporan-surat-masuk');
    Route::get('/laporan-surat-masuk/export', [SuratMasukController::class, 'export'])->middleware(['auth', 'verified'])->name('dashboard.export-laporan-surat-masuk');

    // Surat Keluar
    Route::get('/data-surat-keluar', [SuratKeluarController::class, 'list'])->middleware(['auth', 'verified'])->name('dashboard.data-surat-keluar');
    Route::get('/upload-surat-keluar', function () {
        return Inertia::render('UploadSuratKeluar', [
            'surat_keluar' => new Mail
        ]);
    })->middleware(['auth', 'verified'])->name('dashboard.upload-surat-keluar');
    Route::post('/upload-surat-keluar', [SuratKeluarController::class, 'add'])->name('surat-keluar.add');
    Route::post('/tindak-lanjuti-surat-keluar', [SuratKeluarController::class, 'updateStatus'])->name('surat-keluar.update-status');
    Route::put('/upload-surat-keluar', [SuratKeluarController::class, 'edit'])->name('surat-keluar.edit');
    Route::delete('/upload-surat-keluar/{id}', [SuratKeluarController::class, 'delete'])->name('surat-keluar.delete');


    Route::get('/laporan-surat-keluar', [SuratKeluarController::class, 'laporan'])->middleware(['auth', 'verified'])->name('dashboard.laporan-surat-keluar');
    Route::get('/laporan-surat-keluar/export', [SuratKeluarController::class, 'export'])->middleware(['auth', 'verified'])->name('dashboard.export-laporan-surat-keluar');

    //Template Surat
    Route::get('/template-surat', [TemplateSurat::class, 'view'])->middleware(['auth', 'verified'])->name('dashboard.template-surat');
    Route::post('/template-surat', [TemplateSurat::class, 'create'])->middleware(['auth', 'verified'])->name('dashboard.create-template-surat');
    Route::delete('/template-surat', [TemplateSurat::class, 'delete'])->middleware(['auth', 'verified'])->name('dashboard.delete-template-surat');

    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
});



require __DIR__.'/auth.php';
