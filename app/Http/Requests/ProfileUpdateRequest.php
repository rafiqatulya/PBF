<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
            'role' => ['required', 'string', 'max:255'],
            'division' => ['string', 'max:255', 'nullable'],
            'job_title' => ['required', 'string', 'max:255'],
            'address' => ['string', 'max:255', 'nullable'],
            'avatar' => ['nullable', File::image()
                ->max(12 * 1024)],
            'description' => ['string', 'max:255', 'nullable'],
        ];
    }
}
