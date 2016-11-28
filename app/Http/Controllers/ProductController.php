<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductController extends Controller
{
    // ~ Actions

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $responseData = [];

        // ~

        $product = Product::find($id);

        if (false == is_null($product)) {
            $responseData['id'] = $product->id;
            $responseData['name'] = $product->name;
        }

        // ~

        return new Response($responseData);
    }

    /**
     * @param $categoryId
     * @return Response
     */
    public function listAction($categoryId)
    {
        $productModel = new Product();

        // ~

        $products = $productModel->findByCategoryId($categoryId);
        $products = $this->flattenProducts($products);

        // ~

        return new Response($products);
    }

    // ~ Helpers

    /**
     * @param $products
     * @return array
     */
    private function flattenProducts($products)
    {
        $returnData = [];

        // ~

        foreach ($products as $product) {
            $data['id'] = $product->id;
            $data['name'] = $product->name;
            $data['description'] = $product->description;
            $data['price'] = $product->price;
            $data['category_id'] = $product->category_id;

            $returnData[] = $data;
        }

        // ~

        return $returnData;
    }
}
