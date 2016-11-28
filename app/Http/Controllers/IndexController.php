<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Routing\Controller;
use Illuminate\Contracts\View\View;

/**
 * Class IndexController
 *
 * @package App\Http\Controllers
 */
class IndexController extends Controller
{
    /**
     * @return View
     */
    public function indexAction()
    {
        return view('shop.index');
    }
}