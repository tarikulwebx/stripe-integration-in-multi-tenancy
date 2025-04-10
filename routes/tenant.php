<?php

declare(strict_types=1);

use App\Http\Controllers\Tenant\AccountController;
use App\Http\Controllers\Tenant\FeatureController;
use App\Http\Controllers\Tenant\HomeController;
use App\Http\Controllers\Tenant\LoginController;
use App\Http\Controllers\Tenant\UserController;
use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Middleware\InitializeTenancyByDomain;
use Stancl\Tenancy\Middleware\InitializeTenancyByPath;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;

/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here you can register the tenant routes for your application.
| These routes are loaded by the TenantRouteServiceProvider.
|
| Feel free to customize them however you want. Good luck!
|
*/

Route::group([
    'prefix' => 'app/{tenant}',
    'as' => 'app.',
    'middleware' => [
        InitializeTenancyByPath::class,
        'web',
    ]
], function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('/account', [AccountController::class, 'index'])->name('account');
    Route::get('/billing-portal', [AccountController::class, 'billingPortal'])->name('billing-portal');
    Route::get('/users', [UserController::class, 'index'])->name('users.index');

    Route::middleware('guest')->group(function () {
        Route::get('/login', [LoginController::class, 'form'])->name('login.form');
        Route::post('/login', [LoginController::class, 'login'])->name('login');
    });

    Route::get('/features', [FeatureController::class, 'index'])->name('features.index');
});
