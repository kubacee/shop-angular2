<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/{any?}', 'IndexController@indexAction')
    ->name('page_index');

Route::get('/product/show/{id}', 'ProductController@show')
    ->name('product_show');

Route::get('/product/edit/{id}', 'ProductController@show')
    ->name('product_show');

Route::get('/category/list', 'CategoryController@listAction')
    ->name('category_list');

///* Product */
Route::get('/product/list/{categoryId}', 'ProductController@listAction');