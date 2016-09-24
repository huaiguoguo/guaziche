<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/28
 * Time: 15:57
 */

namespace backend\controllers;


use common\extend\EController;

class SpaceController extends EController
{

    public function actionIndex()
    {
        $data = [];

        return $this->render('index', $data);
    }




    public function actionAdd()
    {
        $data = [];
        $CategoryModel = new Category();
        if (Yii::$app->request->post()) {
            if( $CategoryModel->load(Yii::$app->request->post()) && $CategoryModel->validate() ){
                if($CategoryModel->save()){
                    return self::success('新增分类成功','index');
                }else{
                    return self::error('新增分类失败', 'add');
                }
            }
        }

        $data['Category'] = $CategoryModel;
        return $this->render('add', $data);
    }



    public function actionEdit()
    {
        $data = [];
        $id = Yii::$app->request->post('id');
        $CategoryModel = Category::findOne($id);
        if(!$CategoryModel){
            return self::error('非法操作','index');
        }
        if(Yii::$app->request->post()){
            if($CategoryModel->load(Yii::$app->request->post()) && $CategoryModel->validate()){
                if($CategoryModel->save()){
                    return self::success('更新成功','index');
                }else{
                    return self::error('更新失败',['edit', 'id'=>$id]);
                }
            }
        }
        $data['Category'] = $CategoryModel;
        return $this->render('edit', $data);
    }



    public function actionDel(){
        if(Yii::$app->request->isAjax && Yii::$app->request->post()){
            $id = Yii::$app->request->post('id');
            $res = Category::findOne($id);
            if(!$res) return Json::encode($this->makeinformation(505, '非法操作'));

            if(intval($res->parent_id) > 0){
                return Json::encode($this->makeinformation(505, '请先删除子分类'));
            }

            if($res->delete()){
                $json = Json::encode($this->makeinformation(200, '删除成功'));
            }else{
                $json = Json::encode($this->makeinformation(505, '删除失败'));
            }
            return $json;
        }
    }



}