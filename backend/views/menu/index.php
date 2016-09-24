<?php
/**
 * Created by PhpStorm.
 * User: 火柴
 * Date: 2016/4/17
 * GitHub: https://github.com/huaiguoguo
 * Email: 290559038@qq.com
 * Time: 17:09
 */
use common\widgets\VolumeMenuWidget;

?>


<div class="wrapper wrapper-content animated fadeInRight">


    <div class="row">
        <div class="col-lg-12">
            <div class="ibox ">
                <div class="dd" id="catchapterManager">
                    <label>
                        <select class="form-control input-s-sm" name="Grade"> </select>
                    </label>

                    <!--                        <label>-->
                    <!--                            <select class="form-control input-s-sm" name="volume" required>-->
                    <!--                                --><?php //foreach($Volume as $k=>$item):?>
                    <!--                                    <option value="--><? //=$k;?><!--" -->
                    <?php //if($k == $where['volume_id']){echo "selected";}?><!--><? //=$item;?><!--</option>-->
                    <!--                                --><?php //endforeach;?>
                    <!--                            </select>-->
                    <!--                        </label>-->


                    <label>
                        <button type="button" class="btn btn-outline btn-primary" style="margin-bottom: 3px"
                                id="addChapter">添加
                        </button>
                    </label>
                </div>

                <div class="ibox-title">
                    <h5>菜单管理</h5>
                    <div class="ibox-tools">
                        <!--                        <a class="btn btn-primary btn-sm" href="add.html">添加</a>-->
                    </div>
                </div>
                <div class="ibox-content">
                    <div class="dd" id="nestable2">
                        <ol class="dd-list">
                            <?= VolumeMenuWidget::widget(['modelName' => $modelName, 'where' => $where]); ?>
                        </ol>
                    </div>
                    <div class="m-t-md">
                        <h5>Serialised Output</h5>
                    </div>
                    <textarea id="nestable2-output" class="form-control"></textarea>
                </div>

            </div>
        </div>
    </div>


</div>



