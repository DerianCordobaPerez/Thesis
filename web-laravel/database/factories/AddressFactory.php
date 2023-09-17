<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Thesis\Enums\ZipCode;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
final class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'city' => $this->faker->city,
            'country' => $this->faker->country,
            'zip_code' => collect(ZipCode::cases())->random(),
        ];
    }
}
