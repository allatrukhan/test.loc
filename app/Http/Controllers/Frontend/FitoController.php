<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FitoController extends Controller
{
    
    public function index() : Response
    {

        return Inertia::render('FitoSequrity/FitoSequrity', ['k'=>'iiooo']);

    }

}



