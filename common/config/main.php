<?php
return [
    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
    'components' => [
        'cache'       => [
            'class' => 'yii\caching\FileCache',
        ],
        'db'          => [
            'class'       => 'yii\db\Connection',
            'dsn'         => 'mysql:host=localhost;dbname=phpdx',
            'username'    => 'root',
            'password'    => '7c2a5b53',
            'charset'     => 'utf8',
            'tablePrefix' => 'dx_',
        ],

        'redis'       => [
            'class'    => 'yii\redis\Connection',
            'hostname' => 'localhost',
            'port'     => 6379,
            'database' => 0,
            'password' => 'yong123',
        ],

        'mongodb'     => [
            'class' => '\yii\mongodb\Connection',
            'dsn'   => 'mongodb://yong:yong123@localhost:27017/yii',
        ],
        'authManager' => [
            'class'           => 'common\core\CDBManager',
            'itemTable'       => '{{%auth_item}}',
            'assignmentTable' => '{{%auth_assignment}}',
            'itemChildTable'  => '{{%auth_item_child}}',
            'ruleTable'       => '{{%auth_rule}}',
        ],
    ],
];
