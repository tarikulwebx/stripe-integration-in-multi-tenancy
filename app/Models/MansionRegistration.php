<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MansionRegistration extends Model
{
    protected $fillable = [
        'name',
        'email',
        'position',
        'mansion_name',
        'location_prefecture',
        'management_method',
        'why_want_to_use_hss',
        'status',
        'rejected_reason',
        'approved_at',
        'rejected_at',
    ];

    public function tenant()
    {
        return $this->hasOne(Tenant::class, 'mansion_registration_id');
    }
}
