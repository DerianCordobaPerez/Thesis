<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * @property int $id
 * @property string $city
 * @property string $country
 * @property int $zip_code
 */
final class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'city',
        'country',
        'zip_code',
    ];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(
            related: User::class,
        );
    }
}
