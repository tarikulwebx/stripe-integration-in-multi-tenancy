<?php

namespace Database\Seeders;

use App\Models\Feature;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;
use Stripe\StripeClient;

class FeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $features = [
            [
                'name' => '10 users',
                'lookup_key' => '10_users',
                'description' => '10 users',
            ],
            [
                'name' => '100 users',
                'lookup_key' => '100_users',
                'description' => '100 users',
            ],
            [
                'name' => 'Unlimited users',
                'lookup_key' => 'unlimited_users',
                'description' => 'Unlimited users',
            ],
            [
                'name' => 'LTRP Access',
                'lookup_key' => 'ltrp_access',
                'description' => 'LTRP Access',
            ],
            [
                'name' => 'Meeting Minutes',
                'lookup_key' => 'meeting_minutes',
                'description' => 'Meeting Minutes',
            ],
            [
                'name' => 'Meeting Minutes',
                'lookup_key' => 'meeting_minutes',
                'description' => 'Meeting Minutes',
            ],
            [
                'name' => '1 GB Storage',
                'lookup_key' => '1_gb_storage',
                'description' => '1 GB Storage',
            ],
            [
                'name' => '10 GB Storage',
                'lookup_key' => '10_gb_storage',
                'description' => '10 GB Storage',
            ],
            [
                'name' => 'Unlimited Storage',
                'lookup_key' => 'unlimited_storage',
                'description' => 'Unlimited Storage',
            ],
        ];

        foreach ($features as $feature) {
            $feature = Feature::firstOrCreate(['lookup_key' => $feature['lookup_key']], $feature);

            $stripe = new StripeClient(config('cashier.secret'));

            $stripeFeatureLookupKeys = collect($stripe->entitlements->features->all()->data)->pluck('lookup_key')->toArray();

            if (in_array($feature['lookup_key'], $stripeFeatureLookupKeys)) {
                continue;
            }

            $stripe->entitlements->features->create([
                'name' => $feature['name'],
                'lookup_key' => $feature['lookup_key'],
                'metadata' => [
                    'description' => $feature['description'],
                ],
            ]);
        }
    }
}
