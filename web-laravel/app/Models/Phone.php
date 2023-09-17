<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property string $number
 * @property string $brand
 * @property int $user_id
 */
final class Phone extends Model
{
    use HasFactory;

    protected $fillable = [
        'number',
        'brand',
        'user_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(
            related: User::class,
        );
    }
}
