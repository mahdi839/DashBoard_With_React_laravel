<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function add_product (Request $request){

        $product = new Product;
        $product->name = $request->input('name');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->file_path = $request->file('file')->store('products');
        $product->save();
        return $product;

    }

    function list (){
        return Product::all();
    }
    function Delete ($id){
        $result = Product::where('id',$id)->delete();
        if($result){
            return ["result" => "has been deleted"];
        }else{
            return ["result" =>"operation fail"];
        }
    }
}
