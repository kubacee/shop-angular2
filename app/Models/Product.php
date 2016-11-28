<?php

namespace App\Models;

/**
 * Class Product
 *
 * @package App\Models
 */
class Product extends ProductAbstract
{
    /**
     * @param $categoryId
     * @return \Illuminate\Support\Collection
     */
    public function findByCategoryId($categoryId)
    {
        $queryBuilder = $this->newBaseQueryBuilder();

        // ~

        $queryBuilder
            ->from($this->table)
            ->where('category_id', '=', $categoryId);

        // ~

        return $queryBuilder->get();
    }
}
