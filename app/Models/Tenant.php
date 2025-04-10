<?php

namespace App\Models;

use Laravel\Cashier\Billable;
use Stancl\Tenancy\Database\Models\Tenant as BaseTenant;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Database\Concerns\HasDatabase;
use Stancl\Tenancy\Database\Concerns\HasDomains;
use App\Models\Plan;
use Stripe\StripeClient;

class Tenant extends BaseTenant implements TenantWithDatabase
{
    use HasDatabase, HasDomains, Billable;

    public static function getCustomColumns(): array
    {
        return [
            'id',
            'mansion_registration_id',
            'mansion_name',
            'name',
            'email',
            'password',
            'stripe_id',
            'pm_type',
            'pm_last_four',
            'trial_ends_at',
        ];
    }

    public function mansionRegistration()
    {
        return $this->belongsTo(MansionRegistration::class, 'mansion_registration_id');
    }

    public function features()
    {
        return $this->belongsToMany(Feature::class, 'feature_tenant');
    }

    public function plan()
    {
        return $this->belongsTo(Plan::class, 'stripe_price_id', 'stripe_price_id');
    }

    public function getCurrentPlan()
    {
        $stripePriceId = $this->subscription('default')->stripe_price;
        return Plan::where('stripe_price_id', $stripePriceId)->first();
    }

    public function planFeatures()
    {
        $plan = $this->getCurrentPlan();
        return $plan->features;
    }

    public function directFeatures()
    {
        return $this->features;
    }

    public function allFeatures()
    {
        $directFeatures = $this->features;
        $planFeatures = $this->getCurrentPlan()->features;
        $allFeatures = $directFeatures->merge($planFeatures)->unique('id')->sortBy('id')->values();
        return $allFeatures;
    }
}
