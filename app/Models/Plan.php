<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Cashier\Subscription;

class Plan extends Model
{
    protected $connection = 'central';

    protected $fillable = [
        'name',
        'stripe_product_id',
        'stripe_price_id',
    ];

    public function features()
    {
        return $this->belongsToMany(Feature::class, 'feature_plan');
    }
}
