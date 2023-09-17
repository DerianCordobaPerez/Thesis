<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Thesis\Enums\PhoneBrand;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Phone>
 */
final class PhoneFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'number' => $this->faker->phoneNumber,
            'brand' => collect(PhoneBrand::cases())->random(),
        ];
    }
}
