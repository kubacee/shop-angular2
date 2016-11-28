<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

/* Category */
Route::get('/category/list', 'CategoryController@listAction');

/* Product */
Route::get('/product/{id}', 'ProductController@show');

/* Product */
Route::get('/product/list/{categoryId}', 'ProductController@listAction');
