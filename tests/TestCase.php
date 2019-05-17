<?php

namespace Bavix\Wallet\Test;

use Bavix\Wallet\Services\ProxyService;
use Bavix\Wallet\Services\WalletService;
use Bavix\Wallet\WalletServiceProvider;
use Illuminate\Foundation\Application;
use Orchestra\Testbench\TestCase as OrchestraTestCase;

class TestCase extends OrchestraTestCase
{

    /**
     * @return void
     */
    public function setUp(): void
    {
        app(ProxyService::class)->fresh();
        parent::setUp();
        $this->withFactories(__DIR__ . '/factories');
        $this->loadMigrationsFrom([
            '--database' => 'testbench',
            '--path' => __DIR__ . '/migrations'
        ]);
        $this->loadMigrationsFrom([
            '--database' => 'testbench',
            '--path' => \dirname(__DIR__) . '/database/migrations_v1'
        ]);
        $this->loadMigrationsFrom([
            '--database' => 'testbench',
            '--path' => \dirname(__DIR__) . '/database/migrations_v2'
        ]);
    }

    /**
     * @param Application $app
     * @return array
     */
    protected function getPackageProviders($app): array
    {
        return [WalletServiceProvider::class];
    }

    /**
     * Define environment setup.
     *
     * @param Application $app
     * @return void
     */
    protected function getEnvironmentSetUp($app): void
    {
        $app->singleton(WalletService::class);
        $app->singleton(ProxyService::class);

        $app['config']->set('database.default', 'testbench');
        $app['config']->set('database.connections.testbench', [
            'driver' => 'sqlite',
            'database' => ':memory:',
            'prefix' => '',
        ]);
    }

}