<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home/index');
})->name('home');

Route::get('/pricing', function () {
    return Inertia::render('pricing/index');
})->name('pricing');

Route::get('/mansion-register', function () {
    return Inertia::render('register/index');
})->name('mansion-register');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
