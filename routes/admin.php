<?php

use App\Http\Controllers\Admin\MansionRegistrationController;
use App\Http\Controllers\Admin\TenantController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::get('/admin/mansion-registrations', [MansionRegistrationController::class, 'index'])->name('admin.mansion-registrations.index');
    Route::post('/admin/mansion-registrations/{mansionRegistration}/approve', [MansionRegistrationController::class, 'approve'])->name('admin.mansion-registrations.approve');
    Route::delete('/admin/mansion-registrations/{mansionRegistration}', [MansionRegistrationController::class, 'destroy'])->name('admin.mansion-registrations.destroy');

    Route::get('/admin/tenants', [TenantController::class, 'index'])->name('admin.tenants.index');
    Route::delete('/admin/tenants/{tenant}', [TenantController::class, 'destroy'])->name('admin.tenants.destroy');
});
