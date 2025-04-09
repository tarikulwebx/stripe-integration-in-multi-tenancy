<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $connection = 'central';

    protected $fillable = [
        'name',
        'stripe_product_id',
        'stripe_price_id',
    ];
}
