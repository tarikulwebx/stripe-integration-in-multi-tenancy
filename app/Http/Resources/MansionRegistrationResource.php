<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MansionRegistrationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'position' => $this->position,
            'mansion_name' => $this->mansion_name,
            'location_prefecture' => $this->location_prefecture,
            'management_method' => $this->management_method,
            'why_want_to_use_hss' => $this->why_want_to_use_hss,
            'status' => $this->status,
            'rejected_reason' => $this->rejected_reason,
            'approved_at' => $this->approved_at,
            'rejected_at' => $this->rejected_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'tenant' => $this->tenant,
        ];
    }
}
