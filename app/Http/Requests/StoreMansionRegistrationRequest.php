<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMansionRegistrationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'                => ['required', 'string', 'max:255'],
            'email'               => ['required', 'email', 'max:255', 'unique:mansion_registrations'],
            'position'            => ['required', 'string', 'max:255'],
            'mansion_name'        => ['required', 'string', 'max:255'],
            'location_prefecture' => ['required', 'string', 'max:255'],
            'management_method'   => ['required', 'string', 'max:255'],
            'why_want_to_use_hss' => ['required', 'string'],
        ];
    }
}
