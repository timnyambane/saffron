<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});
Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/settings', function () {
    return Inertia::render('Settings');
})->name('settings');

Route::get('/students/admission', function () {
    return Inertia::render('Students/Admission');
})->name('students.admission');
