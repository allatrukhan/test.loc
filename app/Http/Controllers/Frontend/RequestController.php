<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RequestController extends Controller
{
    
    public function index() : Response
    {

        return Inertia::render('LeftRequest/LeftRequest', []);

    }

}
