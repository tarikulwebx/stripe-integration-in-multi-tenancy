<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MansionRegistration;
use App\Http\Requests\StoreMansionRegistrationRequest;
use App\Http\Requests\UpdateMansionRegistrationRequest;
use Inertia\Inertia;

class MansionRegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $mansionRegistrations = MansionRegistration::all();
        return Inertia::render('admin/mansion-registrations/index', [
            'mansionRegistrations' => $mansionRegistrations,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMansionRegistrationRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(MansionRegistration $mansionRegistration)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MansionRegistration $mansionRegistration)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMansionRegistrationRequest $request, MansionRegistration $mansionRegistration)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MansionRegistration $mansionRegistration)
    {
        //
    }
}
