<?php
/**
 * Created by PhpStorm.
 * Author: 火柴<290559038@qq.com>
 * Date: 2016/7/14
 * Time: 15:36
 */
use yii\web\View;
use yii\helpers\Markdown;
use yii\helpers\Html;
use yii\widgets\ActiveForm;

?>


<div class="wrapper wrapper-content  animated fadeInRight article">
    <div class="row">
        <div class="col-lg-10 col-lg-offset-1">
            <div class="ibox">
                <div class="ibox-content">
                    <div class="pull-right">
                        <button class="btn btn-white btn-xs" type="button">Model</button>
                        <button class="btn btn-white btn-xs" type="button">Publishing</button>
                        <button class="btn btn-white btn-xs" type="button">Modern</button>
                    </div>
                    <div class="text-center article-title">
                        <span class="text-muted">
                            <i class="fa fa-clock-o"></i> <?= date("Y-m-d H:i:s", $detail->created_at); ?></span>
                        <h4>
                            <?= $detail->title; ?>
                        </h4>
                    </div>
                    <p> <?= $detail->content; ?> </p>

                    <hr>
                    <div class="row">
                        <div class="col-md-6">
                            <h5>标签:</h5>
                            <button class="btn btn-primary btn-xs" type="button">yii2</button>
                            <button class="btn btn-white btn-xs" type="button">composer</button>
                        </div>
                        <div class="col-md-6">
                            <div class="small text-right">
                                <h5>统计:</h5>
                                <div><i class="fa fa-comments-o"> </i> 56条 评论</div>
                                <i class="fa fa-eye"> </i> 144次 浏览
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            <h2></h2>

                            <?php
                            $comment_list = $detail->comment;
                            foreach ($comment_list as $key => $value):
                                ?>

                                <div class="social-feed-box">
                                    <div class="social-avatar">
                                        <a href="#" class="pull-left">
                                            <img alt="image" src="/img/a5.jpg">
                                        </a>
                                        <div class="media-body">
                                            <a href="##"> <?=$value->user->username;?> </a>
                                            <small class="text-muted"><?=date("Y-m-d H:i:s",$value->created_at);?></small>
                                        </div>
                                    </div>
                                    <div class="social-body">
                                        <p><?=$value->content;?></p>
                                    </div>
                                </div>

                            <?php endforeach; ?>
                        </div>

                        <div class="col-lg-12">
                            <div class="social-feed-box">
                                <div class="social-avatar"></div>
                                <div class="social-body">

                                    <?php
                                    $form = ActiveForm::begin([
                                                                  'options'            => ['class' => 'form-horizontal'],
                                                                  'enableClientScript' => '',
                                                                  'method'             => 'post',
                                                                  'fieldConfig'        => [
                                                                      'template'     => "{label}\n<div class=\"col-sm-12\">{input}</div>\n<span class='has-error'>{error}</span>",
                                                                      'labelOptions' => ['class' => 'col-sm-2 control-label'],
                                                                  ]
                                                              ]);

                                    echo $form->field($comment, 'content')
                                        ->textarea(['class' => "editor"])
                                        ->label('');
                                    ?>

                                    <div class="form-group">
                                        <div class="col-sm-4 col-sm-offset-2">
                                            <?php
                                            echo Html::submitButton('保存', ['class' => 'btn btn-primary']);
                                            ?>
                                        </div>
                                    </div>

                                    <?php
                                    ActiveForm::end();
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>


</div>


<?php $this->beginBlock('ueditor')  ?>


<?php
$this->endBlock();
$this->registerJs($this->blocks['ueditor'], View::POS_END);
?>








