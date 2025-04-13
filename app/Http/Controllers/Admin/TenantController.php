<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tenant;
use App\Http\Requests\StoreTenantRequest;
use App\Http\Requests\UpdateTenantRequest;
use App\Http\Resources\TenantResource;
use App\Http\Resources\FeatureResource;
use App\Models\Feature;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TenantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tenants = Tenant::all();
        return Inertia::render('admin/tenants/index', [
            'tenants' => TenantResource::collection($tenants),
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
    public function store(StoreTenantRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Tenant $tenant)
    {
        return Inertia::render('admin/tenants/show', [
            'tenant' => new TenantResource($tenant),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tenant $tenant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTenantRequest $request, Tenant $tenant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tenant $tenant)
    {
        $tenant->delete();
        return redirect()->back()->with('success', 'Tenant deleted successfully');
    }

    public function features(Tenant $tenant)
    {
        return Inertia::render('admin/tenants/features', [
            'tenant' => new TenantResource($tenant),
            'all_features' => FeatureResource::collection(Feature::all()),
            'features' => FeatureResource::collection($tenant->planFeatures()),
            'direct_features' => FeatureResource::collection($tenant->features),
        ]);
    }

    public function updateFeatures(Tenant $tenant, Request $request)
    {
        $request->validate([
            'features' => 'nullable|array',
            'features.*' => 'nullable|exists:features,id',
        ]);

        $tenant->features()->sync($request->features);
        return redirect()->back()->with('success', 'Features updated successfully');
    }

    public function removeDirectFeature(Tenant $tenant, Feature $feature)
    {
        $tenant->features()->detach($feature);
        return redirect()->back()->with('success', 'Feature removed successfully');
    }
}
