<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use App\Models\Feature;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeatureController extends Controller
{
    public function index()
    {
        $planFeatures = tenant()->planFeatures();
        $directFeatures = tenant()->directFeatures();
        $allFeatures = tenant()->allFeatures();

        return Inertia::render('tenant/features/index', [
            'features' => $allFeatures,
            'planFeatures' => $planFeatures,
            'directFeatures' => $directFeatures,
        ]);
    }
}
