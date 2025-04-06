<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MansionRegistrationController;

Route::get('/', function () {
    return Inertia::render('home/index');
})->name('home');

Route::get('/pricing', function () {
    return Inertia::render('pricing/index');
})->name('pricing');

Route::get('/mansion-register', [MansionRegistrationController::class, 'registerForm'])->name('mansion-register');
Route::post('/mansion-register', [MansionRegistrationController::class, 'store'])->name('mansion-register.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
