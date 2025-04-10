<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    protected $connection = 'central';

    protected $fillable = [
        'name',
        'description',
        'lookup_key',
    ];

    public function plans()
    {
        return $this->belongsToMany(Plan::class, 'feature_plan');
    }

    public function tenants()
    {
        return $this->belongsToMany(Tenant::class, 'feature_tenant');
    }
}
