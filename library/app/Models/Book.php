<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'title',
        'author',
        'isbn',
        'description',
        'cover_image',
        'category',
        'quantity',
        'available_quantity',
        'publication_year'
    ];

    public function borrowings(){
        return $this->hasMany(Borrowing::class);
    }
}
