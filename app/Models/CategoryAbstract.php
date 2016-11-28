<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class CategoryAbstract
 *
 * @package App\Models
 */
abstract class CategoryAbstract extends Model
{
    /**
     * @var string
     */
    protected $table = 'category';
}
