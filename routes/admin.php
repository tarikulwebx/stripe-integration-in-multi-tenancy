<?php

use App\Http\Controllers\Admin\MansionRegistrationController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/mansion-registrations', [MansionRegistrationController::class, 'index'])->name('admin.mansion-registrations.index');
});
