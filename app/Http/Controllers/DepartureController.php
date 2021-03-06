<?php

namespace App\Http\Controllers;

use App\Departure;
use Illuminate\Http\Request;

class DepartureController extends Controller
{
    public function create(Request $request)
    {
        $departure = new Departure();
        $departure->title = $request->title;
        $departure->save();
    }

    public function delete($id){
        $departure = Departure::find($id);
        $departure->positions()->delete();
        $departure->delete();
    }

    public function update(Request $request)
    {
        $departure = Departure::find($request->id);
        $departure->title = $request->title;
        $departure->save();
    }
}
