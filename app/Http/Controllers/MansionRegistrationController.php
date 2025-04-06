<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMansionRegistrationRequest;
use App\Models\MansionRegistration;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MansionRegistrationController extends Controller
{

    public function registerForm()
    {
        return Inertia::render('register/index', [
            'success' => session('success'),
        ]);
    }

    public function store(StoreMansionRegistrationRequest $request)
    {
        MansionRegistration::create($request->validated());

        return redirect()->route('mansion-register')->with('success', 'Mansion registration submitted successfully');
    }
}
