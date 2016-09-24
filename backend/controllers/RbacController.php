<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/6
 * Time: 14:16
 */

namespace backend\controllers;

use yii;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\rbac\Role;
use yii\rbac\Permission;
use yii\rbac\Item;


use common\models\AuthItem;
use common\models\AuthRule;
use common\models\PermissionForm;
use common\models\RoleForm;


class RbacController extends yii\web\Controller
{

    public $authManager;


//    public function behaviors()
//    {
//        return [
//            'access' => [
//                'class' => AccessControl::className(),
//                'rules' => [
//                    [
//                        'actions' => ['login', 'index', 'error'],
//                        'allow'   => true,
//                    ],
//                    [
//                        'actions' => [
//                            'getpermissions', 'getpowerbylevel', 'role', 'addrole', 'delrole', 'checkrolename', 'updaterole',
//                            'getrolebylevel', 'getrole', 'user', 'adduser', 'getuser', 'updateuser', 'checkuser',
//                            'checkusername', 'getlevelrole', 'getnextarea', 'getnexthouse', 'updatemainpassword', 'edituser',
//                            'permission', 'deletepermission', 'add-permission'
//                        ],
//                        'allow'   => true,
//                        'roles'   => ['@'],
//                    ],
//                ],
//            ],
//            'verbs'  => [
//                'class'   => VerbFilter::className(),
//                'actions' => [
//                    'delete' => ['post'],
//                ],
//            ],
//        ];
//    }


    public function init()
    {
        $this->authManager = Yii::$app->authManager;
    }

    public function actionIndex()
    {
        $data = [];

        $auth = Yii::$app->authManager;


        $createPermission              = $auth->createPermission('aaasdfasdfds');
        $createPermission->description = 'test';
        $createPermission->level       = 0;
        $auth->add($createPermission);

        return $this->render('index', $data);
    }


    //角色
    public function actionRole()
    {
        $data             = [];
        $data['rolelist'] = $this->authManager->getRoles();

        return $this->render('role', $data);
    }

    public function actionAddRole()
    {
        $data          = [];
        $data['error'] = [];

        $RoleForm = new RoleForm();
        if ($RoleForm->load(Yii::$app->request->post()) && $RoleForm->validate()) {
            if ($RoleForm->add()) {
                Yii::$app->session->setFlash('success', '新增角色成功');

                return $this->redirect(['role']);
            } else {
                Yii::$app->session->setFlash('error', '新增角色失败');

                return $this->redirect(['role']);
            }
        } else {
            $data['error'] = $RoleForm->getErrors();
        }

        $data['RoleForm'] = $RoleForm;

        return $this->render('addrole', $data);
    }


    public function actionEditRole()
    {

    }

    public function actionDelRole()
    {
        if (Yii::$app->request->isPost && Yii::$app->request->isAjax) {
        }
    }


    //权限
    public function actionPermission()
    {
        $data               = [];
        $data['permission'] = $this->authManager->getPermissions();

        return $this->render('permission', $data);
    }


    //新增权限项
    public function actionAddPermission()
    {
        $data          = [];
        $data['error'] = [];

        $permissionForm = new PermissionForm();
        if ($permissionForm->load(Yii::$app->request->post()) && $permissionForm->validate()) {
            if ($permissionForm->add()) {
                Yii::$app->session->setFlash('success', '新增权限成功');

                return $this->redirect(['permission']);
            } else {
                Yii::$app->session->setFlash('error', '新增权限失败');

                return $this->redirect(['permission']);
            }
        } else {
            $data['error'] = $permissionForm->getErrors();
        }

        $permission         = AuthItem::find()->where(['type' => 2, 'level' => 1])->all();
        $data['permission'] = $permission;

        return $this->render('addpermission', $data);
    }

    //ajax获取权限项目(根据父权限项)
    public function actionAjaxGetPermission()
    {
        Yii::$app->response->format = yii\web\Response::FORMAT_JSON;
        if (Yii::$app->request->isAjax && Yii::$app->request->isPost) {
            $auth = Yii::$app->authManager;
            $item = $auth->getChildren(Yii::$app->request->post('name'));

            return ['code' => 200, 'msg' => 'success', 'data' => $item];
        }
    }


    //编辑权限项
    public function actionEditPermission()
    {
        $data          = [];
        $data['error'] = [];

        $permissionForm = new PermissionForm();
        if ($permissionForm->load(Yii::$app->request->post()) && $permissionForm->validate()) {
            if ($permissionForm->updateItem(Yii::$app->request->get('name'))) {
                Yii::$app->session->setFlash('success', '修改权限成功');

                return $this->redirect(['permission']);
            } else {
                Yii::$app->session->setFlash('error', '修改权限失败');

                return $this->redirect(['permission']);
            }
        } else {
            $data['error'] = $permissionForm->getErrors();
        }

        $auth    = Yii::$app->authManager;
        $data['AuthObj'] = $auth->getPermission(Yii::$app->request->get('name'));
        $data['PermissionForm'] = $permissionForm;

        $data['permission'] =  AuthItem::find()->where(['type' => 2, 'level' => 1])->all();

        return $this->render('editpermission', $data);
    }


    //删除权限项
    public function actionDelPermission()
    {
        if (Yii::$app->request->isAjax && Yii::$app->request->isPost) {
        }
    }


    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: 分配权限
     * @return string
     */
    public function actionAssign()
    {
        $data = [];

        return $this->render('assign', $data);
    }


    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: 获得菜单
     * @return array
     */
    public function actionAjaxGetMenu()
    {
        Yii::$app->response->format = yii\web\Response::FORMAT_JSON;
        $newMenu                    = [];
        if (Yii::$app->request->isAjax && Yii::$app->request->isPost) {
            $menu = AuthItem::find()->where(['type' => 2, 'level' => 1])->all();
            $this->getMenu($menu, $newMenu);

            return ['code' => 200, 'msg' => 'success', 'data' => $newMenu];
        } else {
            return ['code' => 200, 'msg' => 'die', 'data' => $newMenu];
        }
    }


    public function getMenu($menu, &$newMenu)
    {
        foreach ($menu as $key => $value) {
            $pId = 0;
            if ($value->parents) {
                foreach ($value->parents as $ke => $val) {
                    $pId       = $val->name;
                    $newMenu[] = ['id' => $value->name, 'name' => $value->description, 'pId' => $pId, 'open' => false];
                }
            } else {
                $newMenu[] = ['id' => $value->name, 'name' => $value->description, 'pId' => $pId, 'open' => false];
            }
            if (!empty($value->children)) {
                $this->getMenu($value->children, $newMenu);
            }
        }
    }


}