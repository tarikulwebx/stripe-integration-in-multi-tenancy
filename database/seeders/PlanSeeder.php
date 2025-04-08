<?php

namespace Database\Seeders;

use App\Models\Plan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $plans = [
            [
                'name' => 'Free',
                'stripe_product_id' => 'prod_S5hilVVLHyvFDL',
                'stripe_price_id' => 'price_1RBWIh4QRsh8dWmH976UTSuV',
            ],
            [
                'name' => 'Pro',
                'stripe_product_id' => 'prod_S5hkfRlFb2RWJ8',
                'stripe_price_id' => 'price_1RBWLM4QRsh8dWmHza4gYulr',
            ],
            [
                'name' => 'Enterprise',
                'stripe_product_id' => 'prod_S5hm5TsRdOXcYF',
                'stripe_price_id' => 'price_1RBWMh4QRsh8dWmHgg7eMpgx',
            ],
        ];

        foreach ($plans as $plan) {
            Plan::updateOrCreate([
                'name' => $plan['name'],
            ], [
                'stripe_product_id' => $plan['stripe_product_id'],
                'stripe_price_id' => $plan['stripe_price_id'],
            ]);
        }
    }
}
