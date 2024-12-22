<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    protected $fillable = [
        'title', 'description', 'technologies', 'image_url', 'source', 'project_url', 'tags'
    ];
}
