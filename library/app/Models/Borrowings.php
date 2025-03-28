<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Borrowings extends Model
{
    protected $fillable = [
        'user_id',
        'book_id',
        'borrowed_at',
        'due_date',
        'returned_at',
        'status'
    ];

    protected $casts = [
        'borrowed_at' => 'datetime',
        'due_date' => 'datetime',
        'returned_at' => 'datetime'
    ];

    public function user(){
        $this->belongsTo(User::class);
    }

    public function book(){
        $this->belongsTo(Book::class);
    }
}
