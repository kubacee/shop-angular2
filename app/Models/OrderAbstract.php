<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class OrderAbstract
 *
 * @package App\Models
 */
abstract class OrderAbstract extends Model
{
    /**
     * @var string
     */
    protected $table = 'order';
}
