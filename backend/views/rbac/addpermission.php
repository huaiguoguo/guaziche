<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/6
 * Time: 15:45
 */

use yii\helpers\Url;
use yii\helpers\Html;
use yii\widgets\ActiveForm;


?>


<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>新增权限
                        <small></small>
                    </h5>
                    <div class="ibox-tools">
                        <a class="btn btn-primary btn-sm" href="<?= Url::toRoute(['permission']); ?>"> 返回 </a>
                    </div>
                </div>
                <div class="ibox-content">
                    <form method="post" class="form-horizontal">
                        <div class="form-group <?php if(isset($error['description'])):?>has-error<?php endif;?>">
                            <label class="col-sm-2 control-label">权限名称</label>
                            <div class="col-sm-8">
                                <input type="text" name="PermissionForm[description]" placeholder="权限名称" class="form-control">
                            </div>
                            <span class='has-error'><div class="help-block"><?php if(isset($error['description'])){echo $error['description'][0];};?></div></span>
                        </div>

                        <div class="form-group <?php if(isset($error['name'])):?>has-error<?php endif;?>"><label class="col-sm-2 control-label">权限路径</label>
                            <div class="col-sm-8">
                                <input type="text" name="PermissionForm[name]" placeholder="权限路径"  class="form-control">
                            </div>
                            <span class='has-error'><div class="help-block"><?php if(isset($error['name'])){echo $error['name'][0];};?></div></span>
                        </div>

                        <div class="form-group"><label class="col-sm-2 control-label">父级权限</label>
                            <div class="col-sm-8">
                                <div class="row">
                                    <div class="col-md-4">
                                        <select class="form-control m-b parent_permission" name="PermissionForm[parent_permission]">
                                            <option value>----选择父级权限----</option>
                                            <?php foreach ($permission as $key=>$value):?>
                                                <option value="<?=$value->name;?>"><?=$value->description;?></option>
                                            <?php endforeach;?>
                                        </select>
                                    </div>
                                    <div class="col-md-4">
                                        <select class="form-control m-b" name="PermissionForm[child_permission]"></select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group"><label class="col-sm-2 control-label">排序</label>
                            <div class="col-sm-8">
                                <input type="number" name="PermissionForm[sort]" placeholder="排序"  class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-4 col-sm-offset-2">
                                <button class="btn btn-white" type="submit">关闭</button>
                                <button class="btn btn-primary" type="submit">保存</button>
                            </div>
                        </div>
                        <input type="hidden" name="<?=Yii::$app->request->csrfParam;?>" value="<?=Yii::$app->request->csrfToken;?>"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


<?php \backend\assets\AppAsset::addScript($this, '/js/common.js');?>


