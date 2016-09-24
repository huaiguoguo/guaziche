<?php
$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'),
    require(__DIR__ . '/../../common/config/params-local.php'),
    require(__DIR__ . '/params.php'),
    require(__DIR__ . '/params-local.php')
);

return [
    'id'                  => 'app-backend',
    'basePath'            => dirname(__DIR__),
    'controllerNamespace' => 'backend\controllers',
    'bootstrap'           => ['log'],
    'modules'             => [],
    'components'          => [
        'request'      => [
            'csrfParam' => 'csrf_backend',
        ],
        'user'         => [
            'identityClass'   => 'common\models\Admin',
            'enableAutoLogin' => false,
            'identityCookie'  => ['name' => '_identity-backend', 'httpOnly' => true],
            'loginUrl'        => ['site/login'],
            'authTimeout'     => 3600,
        ],
        'session'      => [
            // this is the name of the session cookie used for login on the backend
            'class'    => 'yii\web\DbSession',
            'name'     => 'advanced-backend',
            'timeout'  => 3600,//超时间
            'savePath' => '@backend/runtime/session',//手工在backend目录下新建文件夹TMP
        ],
        'log'          => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets'    => [
                [
                    'class'  => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],

        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName'  => false,
            'suffix'          => '.html',
            'rules'           => [
            ],
        ],

    ],
    'params'              => $params,
];
