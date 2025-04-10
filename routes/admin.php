<?php

use App\Http\Controllers\Admin\FeatureController;
use App\Http\Controllers\Admin\MansionRegistrationController;
use App\Http\Controllers\Admin\TenantController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/mansion-registrations', [MansionRegistrationController::class, 'index'])->name('mansion-registrations.index');
    Route::post('/mansion-registrations/{mansionRegistration}/approve', [MansionRegistrationController::class, 'approve'])->name('mansion-registrations.approve');
    Route::delete('/mansion-registrations/{mansionRegistration}', [MansionRegistrationController::class, 'destroy'])->name('mansion-registrations.destroy');

    Route::get('/tenants', [TenantController::class, 'index'])->name('tenants.index');
    Route::delete('/tenants/{tenant}', [TenantController::class, 'destroy'])->name('tenants.destroy');

    Route::get('/features', [FeatureController::class, 'index'])->name('features.index');
});
