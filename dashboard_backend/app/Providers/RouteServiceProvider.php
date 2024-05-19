<?php



use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * Define your routes for web and API.
     *
     * @return void
     */
    public function boot()
    {
        $this->routes(function () {
            Route::middleware('api')
                ->group(base_path('routes/api.php'));

            // Define web routes (if applicable) using Route::group
        });
    }

    // ... other methods
}
