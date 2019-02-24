<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// ログイン認証
Route::get('/', 'Auth\LoginController@index')->name('index');
Route::get('login', 'Auth\LoginController@show')->name('login.show');
Route::post('login','Auth\LoginController@login')->name('login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

Route::middleware(['auth'])->group(function() {
    Route::prefix('api')->name('api.')->group(function() {
        Route::prefix('users')->name('users.')->group(function() {
            Route::get('/', 'UserController@apiIndex')->name('index');
            Route::get('form-data', 'UserController@apiFormData')->name('form_data');
        });
    });
    Route::prefix('dashboard')->name('dashboard')->group(function() {
        Route::get('/', 'DashboardController@show');
        // VueRouting用
        Route::get('/{any?}', 'DashboardController@show')->where('any', '.*');
    });
    Route::prefix('users')->name('users')->group(function() {
        Route::get('/', 'UserController@index');
        Route::post('/', 'UserController@store')->name('.store');
        Route::patch('/{user}', 'UserController@update')->name('.update');
        Route::delete('/{user}', 'UserController@destroy')->name('.destroy');
        // VueRouting用
        Route::get('/{any?}', 'UserController@index')->where('any', '.*');
    });
});