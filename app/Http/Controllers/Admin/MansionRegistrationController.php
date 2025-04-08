<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MansionRegistration;
use App\Http\Requests\StoreMansionRegistrationRequest;
use App\Http\Requests\UpdateMansionRegistrationRequest;
use App\Http\Resources\MansionRegistrationResource;
use App\Models\Plan;
use App\Models\Tenant;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
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
            'mansionRegistrations' => MansionRegistrationResource::collection($mansionRegistrations),
            'success' => session('success'),
            'error' => session('error'),
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
        $mansionRegistration->delete();
        return redirect()->back()->with('success', 'Mansion registration deleted successfully');
    }

    public function approve(MansionRegistration $mansionRegistration)
    {
        if (($mansionRegistration->status === 'approved' && $mansionRegistration->tenant) || $mansionRegistration->status === 'rejected') {
            return redirect()->back()->with('error', 'Mansion registration already ' . $mansionRegistration->status);
        }

        DB::beginTransaction();
        $mansionRegistration->status = 'approved';
        $mansionRegistration->save();

        $tenant = Tenant::create([
            'name'                    => $mansionRegistration->name,
            'email'                   => $mansionRegistration->email,
            'password'                => $mansionRegistration->password,
            'mansion_name'            => $mansionRegistration->mansion_name,
            'mansion_registration_id' => $mansionRegistration->id,
            'password'                => Str::upper(Str::random(6)),
        ]);

        $tenant->createAsStripeCustomer();

        $freePlan = Plan::where('name', 'Free')->first();

        $tenant->newSubscription('default', $freePlan->stripe_price_id)
            ->skipTrial()
            ->allowPromotionCodes()
            ->create();

        DB::commit();

        // tenancy()->initialize($tenant);

        return redirect()->back()->with('success', 'Mansion registration approved successfully');
    }
}
