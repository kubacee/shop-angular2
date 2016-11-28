@extends('shop.product.base');

@section('title', 'Product index')

@section('content')
    <h3>Product: {{ $product->name }}</h3>
@endsection
