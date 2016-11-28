<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

/**
 * Class CategoryController
 *
 * @package App\Http\Controllers
 */
class CategoryController extends Controller
{
    // ~ Actions

    /**
     * @return Response
     */
    public function listAction()
    {
        $categories = Category::all();

        // ~

        $categories = $this->flattenCategories($categories);

        // ~

        return new Response($categories);
    }

    // ~ Helpers

    /**
     * @param $categories
     * @return array
     */
    private function flattenCategories($categories)
    {
        $returnData = [];

        // ~

        foreach ($categories as $category) {
            $data['id'] = $category->id;
            $data['name'] = $category->name;

            $returnData[] = $data;
        }

        // ~

        return $returnData;
    }
}
