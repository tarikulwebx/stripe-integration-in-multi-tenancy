<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Cashier\Subscription;

class AccountController extends Controller
{
    public function index()
    {
        $tenant = tenant();

        $subscription = $tenant->subscription('default'); // get tenant's subscription
        $balance = $tenant->balance(); // get tenant's balance

        $planName = Plan::where('stripe_price_id', $subscription->stripe_price)->first()->name ?? '';

        return Inertia::render('tenant/account/index', [
            'planName' => $planName,
        ]);
    }

    public function billingPortal()
    {
        $tenant = tenant();
        return $tenant->redirectToBillingPortal(route('app.account', $tenant->id));
    }
}
