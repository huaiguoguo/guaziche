<?php
/**
 * Created by PhpStorm.
 * User: guofeng
 * Date: 2016/3/22 0022
 * Time: 上午 11:16
 * Desc: backend controller 的父类
 */

namespace common\extend;

use common\helper\Dump;
use common\models\UploadLog;
use yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\DownloadCourse;
use common\models\DownloadPlan;
use common\models\DownloadExercise;
use common\models\DocAssembly;
use yii\base\Exception;

use common\lib\Qiniu\UpFile;
use kartik\alert\Alert;
use kartik\alert\AlertBlock;

use yii\helpers\Url;
use common\models\ShopCart;


class EController extends Controller
{


    public function init()
    {
    }


    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
        ];
    }

    // 检测dir是否存在
    public function checkDir($dir)
    {
        if (!is_dir(Yii::getAlias('@public').$dir)) {
            if (!mkdir(Yii::getAlias('@public').$dir)) {
                return false;
            }
        }

        return $dir;
    }

    /**
     * 把返回的数据集转换成Tree
     * @param array $list 要转换的数据集
     * @param string $pid parent标记字段
     * @param string $level level标记字段
     * @return array
     * @author 麦当苗儿 <zuojiazi@vip.qq.com>
     */
    function list_to_tree($list, $pk = 'id', $pid = 'pid', $child = '_child', $root = 0)
    {
        // 创建Tree
        $tree = array();
        if (is_array($list)) {
            // 创建基于主键的数组引用
            $refer = array();
            foreach ($list as $key => $data) {
                $ttt                    = &$list[$key];
                $ttt['state']['opened'] = true;
                $refer[$data[$pk]]      = &$ttt;
            }
            foreach ($list as $key => $data) {
                // 判断是否存在parent
                $parentId = $data[$pid];
                if ($root == $parentId) {
                    $tree[] = &$list[$key];
                } else {
                    if (isset($refer[$parentId])) {
                        $parent           = &$refer[$parentId];
                        $test             = &$list[$key];
                        $test['icon']     = 'none';
                        $parent[$child][] = &$test;
                    }
                }
            }
        }

        return $tree;
    }


    /**
     * 获取和设置配置参数 支持批量定义
     * @param string|array $name 配置变量
     * @param mixed $value 配置值
     * @param mixed $default 默认值
     * @return mixed
     */
    protected function C($name = null, $value = null, $default = null)
    {
        static $_config = array();
        // 无参数时获取所有
        if (empty($name)) {
            return $_config;
        }
        // 优先执行设置获取或赋值
        if (is_string($name)) {
            if (!strpos($name, '.')) {
                $name = strtoupper($name);
                if (is_null($value))
                    return isset($_config[$name]) ? $_config[$name] : $default;
                $_config[$name] = $value;

                return null;
            }
            // 二维数组设置和获取支持
            $name    = explode('.', $name);
            $name[0] = strtoupper($name[0]);
            if (is_null($value))
                return isset($_config[$name[0]][$name[1]]) ? $_config[$name[0]][$name[1]] : $default;
            $_config[$name[0]][$name[1]] = $value;

            return null;
        }
        // 批量设置
        if (is_array($name)) {
            $_config = array_merge($_config, array_change_key_case($name, CASE_UPPER));

            return null;
        }

        return null; // 避免非法参数
    }


    /**
     * Ajax方式返回数据到客户端
     * @access protected
     * @param mixed $data 要返回的数据
     * @param String $type AJAX返回数据格式
     * @param int $json_option 传递给json_encode的option参数
     * @return void
     */
    protected function ajaxReturn($data, $type = '', $json_option = 0)
    {
        if (empty($type)) $type = 'JSON';
        switch (strtoupper($type)) {
            case 'JSON' :
                // 返回JSON数据格式到客户端 包含状态信息
                header('Content-Type:application/json; charset=utf-8');
                $data = json_encode($data, $json_option);
                break;
            case 'JSONP':
                // 返回JSON数据格式到客户端 包含状态信息
                header('Content-Type:application/json; charset=utf-8');
                $handler = isset($_GET[$this->C('VAR_JSONP_HANDLER')]) ? $_GET[$this->C('VAR_JSONP_HANDLER')] : $this->C('DEFAULT_JSONP_HANDLER');
                $data    = $handler . '(' . json_encode($data, $json_option) . ');';
                break;
            case 'EVAL' :
                // 返回可执行的js脚本
                header('Content-Type:text/html; charset=utf-8');
                break;
        }

        return $data;
    }


    //生成返回提示信息
    public function makeinformation($code, $desc, $data = "")
    {
        return array("code" => $code, 'desc' => $desc, 'data' => $data);
    }


    //删除套件/课件/教案/练习
    public function deleteDownloadAndDocAssembly($type, $id)
    {
        switch ($type) {
            case 1:
                $result = DownloadCourse::findOne($id)->delete();
                $resDoc = DocAssembly::deleteAll(['course_id' => $id]);
                if (!$result || !$resDoc) {
                    throw new Exception("记录不存在");
                }
                break;
            case 2:
                $result = DownloadPlan::findOne($id)->delete();
                $resDoc = DocAssembly::deleteAll(['plan_id' => $id]);
                if (!$result || !$resDoc) {
                    throw new Exception("记录不存在");
                }
                break;
            case 3:
                break;
                $result = DownloadExercise::findOne($id)->delete();
                $resDoc = DocAssembly::deleteAll(['exercise_id' => $id]);
                if (!$result || !$resDoc) {
                    throw new Exception("记录不存在");
                }
                break;
            case 4:
                $resDoc = DocAssembly::findOne($id);
                if (!empty($resDoc->course_id)) {
                    $resultCourse = DownloadCourse::findOne($resDoc->course_id)->delete();
                    if (!$resultCourse) {
                        throw new Exception("记录不存在或删除异常");
                    }
                }
                if (!empty($resDoc->plan_id)) {
                    $resultPlan = DownloadPlan::findOne($resDoc->plan_id)->delete();
                    if (!$resultPlan) {
                        throw new Exception("记录不存在或删除异常");
                    }
                }
                if (!empty($resDoc->exercise_id)) {
                    $resultExercise = DownloadExercise::findOne($resDoc->exercise_id)->delete();
                    if (!$resultExercise) {
                        throw new Exception("记录不存在或删除异常");
                    }
                }
                $resDoc = $resDoc->delete();
                if (!$resDoc) {
                    throw new Exception("记录不存在或删除异常");
                }
                break;
        }
    }


    //七牛上传
    public function UploadFile()
    {
        $uploadObj    = new UpFile();
        $qiniuConfig  = Yii::$app->params['qiniu'];
        $uploadResult = $uploadObj->QiniuUpOfficeToPdf('upload_file', $qiniuConfig);
        if (!isset($uploadResult['url'])) {
            throw new Exception(json_encode($uploadResult));
        };
        $uploadResultImages = $uploadObj->QiniuPdfGetImages($uploadResult['url'], $qiniuConfig);
        if ($uploadResult['url'] && $uploadResultImages) {
            return $this->SaveUploadLog($uploadResult, $uploadResultImages);
        } else {
            throw new Exception("上传失败");
        }
    }

    //七牛单传（不用获取图片）
    public function UploadFileSingle()
    {
        $uploadObj          = new UpFile();
        $qiniuConfig        = Yii::$app->params['qiniu'];
        $uploadResultImages = $uploadObj->QiniuUploadFile($_FILES['upload_file']['tmp_name'], $uploadObj->QiniuNewFileName($_FILES['upload_file']['name']), $qiniuConfig);
        if ($uploadResultImages) {
            $uploadResult['oldname'] = $_FILES['upload_file']['name'];
            $uploadResult['url']     = $uploadResultImages;
            $uploadResult['ext']     = pathinfo($_FILES['upload_file']['name'], PATHINFO_EXTENSION);
            $uploadResult['size']    = $_FILES['upload_file']['size'];

            return $this->SaveUploadLog($uploadResult, $uploadResultImages);
        } else {
            throw new Exception("上传失败");
        }
    }

    //记录uploadlog表
    public function SaveUploadLog($uploadResult, $uploadResultImages)
    {
        $uploadlog              = new UploadLog();
        $uploadlog->name        = $uploadResult['oldname'];
        $uploadlog->url         = $uploadResult['url'];
        $uploadlog->ext         = $uploadResult['ext'];
        $uploadlog->size        = $uploadResult['size'];
        $uploadlog->images      = is_array($uploadResultImages) ? join(',', $uploadResultImages) : $uploadResultImages;
        $uploadlog->upload_time = date("Y-m-d H:i:s", time());
        $uploadlog->upload_uid  = Yii::$app->user->getId();
        if (!$uploadlog->save()) {
            throw new Exception($uploadlog->getErrors());
        }

        return $uploadlog->id;
    }


    public $optionStr = "";

    public function getListChild($chapter, $tag, $chapter_id)
    {
        foreach ($chapter as $key => $value) {
            $str = "";
            if ($chapter_id == $value['id']) $str = " selected";
            if ($tag > 1) {
                $this->optionStr .= "<option value=" . $value['id'] . $str . ">" . $this->generateRepeatString($tag) . $value['title'] . "</option>";
            } else {
                $this->optionStr .= "<option value=" . $value['id'] . $str . ">" . $value['title'] . "</option>";
            }
            if (isset($value['children']) && $value['children']) {
                $this->getListChild($value['children'], $tag + 1, $chapter_id);
            }
        }

        return $this->optionStr;
    }


    public function generateRepeatString($tag)
    {
        $str = '';
        for ($i = 0; $i < $tag; $i++) {
            $str .= '&nbsp;&nbsp;&nbsp;&nbsp;';
        }

        return $str;
    }


    protected static function InsertDocAssembly($postData)
    {
        $transaction = Yii::$app->db->beginTransaction();
        try {
            $DocAssembly = new DocAssembly();
            if (isset($postData['is_course'])) {
                //首先记录课件记录
                $course             = new DownloadCourse();
                $course->user_id    = Yii::$app->user->getId();
                $course->grade_id   = $postData['grade_id'];
                $course->subject_id = $postData['subject_id'];
                if (isset($postData['is_chapter'])) {
                    $course->versions_id = $postData['versions_id'];
                    $course->chapter_id  = $postData['chapter_id'];
//                    $course->volume       = $postData['volume'];
                    $course->versions_id = $postData['versions_id'];

                    $DocAssembly->chapter_id  = $postData['chapter_id'];
                    $DocAssembly->versions_id = $postData['versions_id'];
//                    $DocAssembly->volume        = $postData['volume'];
                }
                if (isset($postData['is_knowledge'])) {
                    $course->knowledge_id      = $postData['knowledge_id'];
                    $DocAssembly->knowledge_id = $postData['knowledge_id'];
                }
                $course->title       = $postData['course_title'];
                $course->description = $postData['course_description'];
                $course->content     = $postData['course_content'];
                $course->integral    = intval($postData['course_integral']);
                $course->file_id     = $postData['course_file_id'];//上传的文件id  (upload_log表)

                $uploadLog        = UploadLog::findOne($course->file_id);
                $course->postfix  = $uploadLog->ext;//  (upload_log表)
                $course->images   = $uploadLog->images;//  (upload_log表)
                $course->size     = $uploadLog->size;//  (upload_log表)
                $course->download = $uploadLog->url;

                $course->add_time = date("Y-m-d", time());
                if (!$course->save()) {
                    throw new Exception($course->getErrors());
                }
                $DocAssembly->course_id = $course->id;
            }


            if (isset($postData['is_plan'])) {
                //记录教案记录
                $plan             = new DownloadPlan();
                $plan->user_id    = Yii::$app->user->getId();
                $plan->grade_id   = $postData['grade_id'];
                $plan->subject_id = $postData['subject_id'];
                if (isset($postData['is_chapter'])) {
                    $plan->versions_id = $postData['versions_id'];
                    $plan->chapter_id  = $postData['chapter_id'];
//                    $plan->volume       = $postData['volume'];
                    $plan->versions_id       = $postData['versions_id'];
                    $DocAssembly->chapter_id = $postData['chapter_id'];
                }
                if (isset($postData['is_knowledge'])) {
                    $plan->knowledge_id        = $postData['knowledge_id'];
                    $DocAssembly->knowledge_id = $postData['knowledge_id'];
                }
                $plan->title       = $postData['plan_title'];
                $plan->description = $postData['plan_description'];
                $plan->content     = $postData['plan_content'];
                $plan->integral    = intval($postData['plan_integral']);
                $plan->file_id     = $postData['plan_file_id'];//上传的文件id  (upload_log表)

                $uploadLog      = UploadLog::findOne($plan->file_id);
                $plan->postfix  = $uploadLog->ext;//  (upload_log表)
                $plan->images   = $uploadLog->images;//  (upload_log表)
                $plan->size     = $uploadLog->size;//  (upload_log表)
                $plan->download = $uploadLog->url;

                $plan->add_time = date("Y-m-d", time());
                if (!$plan->save()) {
                    throw new Exception($plan->getErrors());
                }
                $DocAssembly->plan_id = $plan->id;
            }

            if (isset($postData['is_exercise'])) {
                //记录同步练习记录
                $exercise             = new DownloadExercise();
                $exercise->user_id    = Yii::$app->user->getId();
                $exercise->grade_id   = $postData['grade_id'];
                $exercise->subject_id = $postData['subject_id'];

                if (isset($postData['is_chapter'])) {
                    $exercise->versions_id = $postData['versions_id'];
                    $exercise->chapter_id  = $postData['chapter_id'];
//                    $exercise->volume       = $postData['volume'];
                    $DocAssembly->versions_id = $postData['versions_id'];
                    $DocAssembly->chapter_id  = $postData['chapter_id'];
                }
                if (isset($postData['is_knowledge'])) {
                    $exercise->knowledge_id    = $postData['knowledge_id'];
                    $DocAssembly->knowledge_id = $postData['knowledge_id'];
                }
                $exercise->title       = $postData['exercise_title'];
                $exercise->description = $postData['exercise_description'];
                $exercise->content     = $postData['exercise_content'];
                $exercise->integral    = intval($postData['exercise_integral']);
                $exercise->file_id     = $postData['exercise_file_id'];//上传的文件id  (upload_log表)
                $uploadLog             = UploadLog::findOne($exercise->file_id);
                $exercise->postfix     = $uploadLog->ext;//  (upload_log表)
                $exercise->images      = $uploadLog->images;//  (upload_log表)
                $exercise->size        = $uploadLog->size;//  (upload_log表)
                $exercise->download    = $uploadLog->url;
                $exercise->add_time    = date("Y-m-d", time());
                if (!$exercise->save()) {
                    throw new Exception($exercise->getErrors());
                }
                $DocAssembly->exercise_id = $exercise->id;

            }

            //往组件里面添加  以上三个id  及年级  章节   册   教材版本 信息
            $DocAssembly->is_assembly = 1;
            if (isset($postData['assembly_title']) && $postData['assembly_title']) {
                $DocAssembly->title = $postData['assembly_title'];
            }
            $DocAssembly->grade_id   = $postData['grade_id'];
            $DocAssembly->subject_id = $postData['subject_id'];

            if (!$DocAssembly->save()) {
                throw new Exception($DocAssembly->getErrors());
            } else {
                $transaction->commit();

                return true;
            }

        } catch (yii\base\Exception $e) {
            $transaction->rollBack();
            Yii::$app->session->setFlash('error', $e->getMessage());

            return false;
        }
    }


    protected static function UpdateDocAssembly($postData, $id)
    {
        $transaction = Yii::$app->db->beginTransaction();
        try {
            $DocAssembly = DocAssembly::findOne($id);
            if (!$DocAssembly) {
                throw new Exception("套件id错误");
            }
            if (isset($postData['is_course'])) {
                //首先记录课件记录
                $course             = DownloadCourse::findOne($postData['course_id']);
                $course->user_id    = Yii::$app->user->getId();
                $course->grade_id   = $postData['grade_id'];
                $course->subject_id = $postData['subject_id'];

                if (isset($postData['is_chapter'])) {
                    $course->versions_id = $postData['versions_id'];
                    $course->chapter_id  = $postData['chapter_id'];
//                    $course->volume       = $postData['volume'];
                    $course->versions_id     = $postData['versions_id'];
                    $DocAssembly->chapter_id = $postData['chapter_id'];
                }
                if (isset($postData['is_knowledge'])) {
                    $course->knowledge_id      = $postData['knowledge_id'];
                    $DocAssembly->knowledge_id = $postData['knowledge_id'];
                }

                $course->title       = $postData['course_title'];
                $course->description = $postData['course_description'];
                $course->content     = $postData['course_content'];
                $course->integral    = intval($postData['course_integral']);
                $course->file_id     = $postData['course_file_id'];//上传的文件id  (upload_log表)

                $uploadLog        = UploadLog::findOne($course->file_id);
                $course->postfix  = $uploadLog->ext;//  (upload_log表)
                $course->images   = $uploadLog->images;//  (upload_log表)
                $course->size     = $uploadLog->size;//  (upload_log表)
                $course->download = $uploadLog->url;

                $course->add_time = date("Y-m-d", time());
                if (!$course->save()) {
                    throw new Exception($course->getErrors());
                }
                $DocAssembly->course_id = $course->id;
            }


            if (isset($postData['is_plan'])) {
                //记录教案记录
                $plan             = DownloadPlan::findOne($postData['plan_id']);
                $plan->user_id    = Yii::$app->user->getId();
                $plan->grade_id   = $postData['grade_id'];
                $plan->subject_id = $postData['subject_id'];
                if (isset($postData['is_chapter'])) {
                    $plan->versions_id = $postData['versions_id'];
                    $plan->chapter_id  = $postData['chapter_id'];
//                    $plan->volume       = $postData['volume'];
                    $plan->versions_id       = $postData['versions_id'];
                    $DocAssembly->chapter_id = $postData['chapter_id'];
                }
                if (isset($postData['is_knowledge'])) {
                    $plan->knowledge_id        = $postData['knowledge_id'];
                    $DocAssembly->knowledge_id = $postData['knowledge_id'];
                }
                $plan->title       = $postData['plan_title'];
                $plan->description = $postData['plan_description'];
                $plan->content     = $postData['plan_content'];
                $plan->integral    = intval($postData['plan_integral']);
                $plan->file_id     = $postData['plan_file_id'];//上传的文件id  (upload_log表)

                $uploadLog      = UploadLog::findOne($plan->file_id);
                $plan->postfix  = $uploadLog->ext;//  (upload_log表)
                $plan->images   = $uploadLog->images;//  (upload_log表)
                $plan->size     = $uploadLog->size;//  (upload_log表)
                $plan->download = $uploadLog->url;

                $plan->add_time = date("Y-m-d", time());
                if (!$plan->save()) {
                    throw new Exception($plan->getErrors());
                }
                $DocAssembly->plan_id = $plan->id;
            }

            if (isset($postData['is_exercise'])) {
                //记录同步练习记录
                $exercise             = DownloadExercise::findOne($postData['exercise_id']);
                $exercise->user_id    = Yii::$app->user->getId();
                $exercise->grade_id   = $postData['grade_id'];
                $exercise->subject_id = $postData['subject_id'];

                if (isset($postData['is_chapter'])) {
                    $exercise->versions_id = $postData['versions_id'];
                    $exercise->chapter_id  = $postData['chapter_id'];
//                    $exercise->volume       = $postData['volume'];
                    $DocAssembly->versions_id = $postData['versions_id'];
                    $DocAssembly->chapter_id  = $postData['chapter_id'];
                }
                if (isset($postData['is_knowledge'])) {
                    $exercise->knowledge_id    = $postData['knowledge_id'];
                    $DocAssembly->knowledge_id = $postData['knowledge_id'];
                }
                $exercise->title       = $postData['exercise_title'];
                $exercise->description = $postData['exercise_description'];
                $exercise->content     = $postData['exercise_content'];
                $exercise->integral    = intval($postData['exercise_integral']);
                $exercise->file_id     = $postData['exercise_file_id'];//上传的文件id  (upload_log表)
                $uploadLog             = UploadLog::findOne($exercise->file_id);
                $exercise->postfix     = $uploadLog->ext;//  (upload_log表)
                $exercise->images      = $uploadLog->images;//  (upload_log表)
                $exercise->size        = $uploadLog->size;//  (upload_log表)
                $exercise->download    = $uploadLog->url;
                $exercise->add_time    = date("Y-m-d", time());
                if (!$exercise->save()) {
                    throw new Exception($exercise->getErrors());
                }
                $DocAssembly->exercise_id = $exercise->id;

            }

            //往组件里面添加  以上三个id  及年级  章节   册   教材版本 信息
            $DocAssembly->is_assembly = 1;
            if (isset($postData['assembly_title']) && $postData['assembly_title']) {
                $DocAssembly->title = $postData['assembly_title'];
            }
            $DocAssembly->grade_id   = $postData['grade_id'];
            $DocAssembly->subject_id = $postData['subject_id'];

            if (!$DocAssembly->save()) {
                throw new Exception($DocAssembly->getErrors());
            } else {
                $transaction->commit();

                return true;
            }

        } catch (Exception $e) {
            $transaction->rollBack();
            Yii::$app->session->setFlash('error', $e->getMessage());

            return false;
        }
    }


    public function insertModel($postData, $model, $tag = '')
    {

        $transaction = Yii::$app->db->beginTransaction();
        try {
            $DocAssembly = new DocAssembly();

            //首先记录课件记录
            $Mode             = $model;
            $Mode->user_id    = Yii::$app->user->getId();
            $Mode->grade_id   = $postData['grade_id'];
            $Mode->subject_id = $postData['subject_id'];
            if (isset($postData['is_chapter'])) {
                $Mode->versions_id = $postData['versions_id'];
                $Mode->chapter_id  = $postData['chapter_id'];
//                $Mode->volume       = $postData['volume'];
                $Mode->versions_id       = $postData['versions_id'];
                $DocAssembly->chapter_id = $postData['chapter_id'];
            }
            if (isset($postData['is_knowledge'])) {
                $Mode->knowledge_id        = $postData['knowledge_id'];
                $DocAssembly->knowledge_id = $postData['knowledge_id'];
            }

            $Mode->title       = $postData[$tag . '_title'];
            $Mode->description = $postData[$tag . '_description'];
            $Mode->content     = $postData[$tag . '_content'];
            $Mode->integral    = intval($postData[$tag . '_integral']);
            $Mode->file_id     = $postData[$tag . '_file_id'];//上传的文件id  (upload_log表)
            $uploadLog         = UploadLog::findOne($Mode->file_id);
            $Mode->postfix     = $uploadLog->ext;//  (upload_log表)
            $Mode->images      = $uploadLog->images;//  (upload_log表)
            $Mode->size        = $uploadLog->size;//  (upload_log表)
            $Mode->download    = $uploadLog->url;
            $Mode->add_time    = date("Y-m-d", time());
            if (!$Mode->save()) {
                throw new Exception($Mode->getErrors());
            }
            switch ($tag) {
                case "course":
                    $DocAssembly->course_id = $Mode->id;
                    break;
                case "plan":
                    $DocAssembly->plan_id = $Mode->id;
                    break;
                case "exercise":
                    $DocAssembly->exercise_id = $Mode->id;
                    break;
            }
            $DocAssembly->is_assembly = 0;
            $DocAssembly->grade_id    = $postData['grade_id'];
            $DocAssembly->subject_id  = $postData['subject_id'];

            if (!$DocAssembly->save()) {
                throw new Exception($DocAssembly->getErrors());
            } else {
                $transaction->commit();

                return true;
            }
        } catch (Exception $e) {
            $transaction->rollBack();
            Yii::$app->session->setFlash('error', $e->getMessage());

            return false;
        }

    }


    public function updateModel($postData, $model, $tag = '')
    {

        $transaction = Yii::$app->db->beginTransaction();
        try {
            $DocAssembly = DocAssembly::findOne($postData['docassemble_id']);
            if (!$DocAssembly) {
                throw new Exception('此记录所属的套件信息不存在');
            }
            //首先记录课件记录
            $Mode             = $model;
            $Mode->user_id    = Yii::$app->user->getId();
            $Mode->grade_id   = $postData['grade_id'];
            $Mode->subject_id = $postData['subject_id'];

            if (isset($postData['is_chapter'])) {
                $Mode->versions_id = $postData['versions_id'];
                $Mode->chapter_id  = $postData['chapter_id'];
//                $Mode->volume       = $postData['volume'];
                $Mode->versions_id       = $postData['versions_id'];
                $DocAssembly->chapter_id = $postData['chapter_id'];
            }
            if (isset($postData['is_knowledge'])) {
                $Mode->knowledge_id        = $postData['knowledge_id'];
                $DocAssembly->knowledge_id = $postData['knowledge_id'];
            }
            $Mode->title       = $postData[$tag . '_title'];
            $Mode->description = $postData[$tag . '_description'];
            $Mode->content     = $postData[$tag . '_content'];
            $Mode->integral    = intval($postData[$tag . '_integral']);
            $Mode->file_id     = $postData[$tag . '_file_id'];//上传的文件id  (upload_log表)
            $uploadLog         = UploadLog::findOne($Mode->file_id);
            $Mode->postfix     = $uploadLog->ext;//  (upload_log表)
            $Mode->images      = $uploadLog->images;//  (upload_log表)
            $Mode->size        = $uploadLog->size;//  (upload_log表)
            $Mode->download    = $uploadLog->url;
            $Mode->add_time    = date("Y-m-d", time());
            if (!$Mode->save()) {
                throw new Exception($Mode->getErrors());
            }
            switch ($tag) {
                case "course":
                    $DocAssembly->course_id = $Mode->id;
                    break;
                case "plan":
                    $DocAssembly->plan_id = $Mode->id;
                    break;
                case "exercise":
                    $DocAssembly->exercise_id = $Mode->id;
                    break;
            }
            $DocAssembly->is_assembly = 0;
            $DocAssembly->grade_id    = $postData['grade_id'];
            $DocAssembly->subject_id  = $postData['subject_id'];

            if (!$DocAssembly->save()) {
                throw new Exception($DocAssembly->getErrors());
            } else {
                $transaction->commit();

                return true;
            }
        } catch (Exception $e) {
            $transaction->rollBack();
            Yii::$app->session->setFlash('error', $e->getMessage());

            return false;
        }
    }


    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: ......
     * @param string $msg
     * @param string $RedirectUrl
     * @return yii\web\Response
     * @throws Exception
     */
    public function success($msg='', $RedirectUrl = '')
    {
        if (!$msg) throw new Exception('请您填写成功信息');
        Yii::$app->session->setFlash('success', $msg);
        if ($RedirectUrl) return $this->redirect(Url::toRoute($RedirectUrl));
    }


    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: ......
     * @param $msg
     * @param string $RedirectUrl
     * @return yii\web\Response
     * @throws Exception
     */
    public function info($msg, $RedirectUrl = '')
    {
        if (!$msg) throw new Exception('请您填写提示信息');
        Yii::$app->session->setFlash('info', $msg);
        if ($RedirectUrl) return self::redirect(Url::toRoute($RedirectUrl));
    }


    /**
     * @param $msg 警告信息
     * @return string|void
     */
    public function warning($msg, $RedirectUrl = '')
    {
        if (!$msg) throw new Exception('请您填写警告信息');
        Yii::$app->session->setFlash('warning', $msg);
        if ($RedirectUrl) return self::redirect(Url::toRoute($RedirectUrl));
    }


    /**
     * @author: 火柴<290559038@qq.com>
     * @descri: 错误信息
     * @param $msg
     * @param string $RedirectUrl
     * @return yii\web\Response
     * @throws Exception
     */
    public function error($msg, $RedirectUrl = '')
    {
        if (!$msg) throw new Exception('请您填写错误信息');
        Yii::$app->session->setFlash('error', $msg);
        if ($RedirectUrl) return self::redirect(Url::toRoute($RedirectUrl));
    }


    public function tips($messages, $url, $code)
    {
        $data['message'] = $messages;
        $data['url']     = $url;
        $data['code']    = $code;

        return $this->render('/layouts/message', $data);
    }














    /**
     * 通用提示
     * @param $message 信息内容
     * @return Ambigous <string, string>
     */
    public function successs($message)
    {
        echo Alert::widget([
                               'type'          => Alert::TYPE_SUCCESS,
                               'title'         => 'Well done！',
                               'icon'          => 'glyphicon glyphicon-ok-sign',
                               'body'          => $message,
                               'showSeparator' => true,
                               'delay'         => 3000
                           ]);
    }

    public function infos($message)
    {
        echo Alert::widget([
                               'type'          => Alert::TYPE_INFO,
                               'title'         => 'Heads up!',
                               'icon'          => 'glyphicon glyphicon-info-sign',
                               'body'          => $message,
                               'showSeparator' => true,
                               'delay'         => 3000
                           ]);
    }

    public function warnings($message)
    {
        echo Alert::widget([
                               'type'          => Alert::TYPE_WARNING,
                               'title'         => 'Warning!',
                               'icon'          => 'glyphicon glyphicon-exclamation-sign',
                               'body'          => $message,
                               'showSeparator' => true,
                               'delay'         => 4000
                           ]);
    }

    public function danger($message)
    {
        echo Alert::widget([
                               'type'          => Alert::TYPE_DANGER,
                               'title'         => 'oh snap',
                               'icon'          => 'glyphicon glyphicon-remove-sign',
                               'body'          => $message,
                               'showSeparator' => true,
                               'delay'         => 5000
                           ]);

    }


    public function AlertBlock()
    {
        echo AlertBlock::widget([
                                    'type'            => AlertBlock::TYPE_ALERT,
                                    'useSessionFlash' => true
                                ]);
    }


    //购物车加
    public function add($shop_cart, $goods_id, $goods_number, $user_id)
    {
        $data = [];
        if (!$shop_cart) {
            $shop_cart           = new ShopCart();
            $shop_cart->user_id  = $user_id;
            $shop_cart->goods_id = $goods_id;
            $shop_cart->number   = $goods_number;
        } else {
            $shop_cart->number = $goods_number;
        }

        if ($shop_cart->save()) {
            $data = ['code' => 200, 'msg' => '添加商品到购物车成功', 'data' => null];
        } else {
            $data = ['code' => 501, 'msg' => '添加商品到购物车失败', 'data' => $shop_cart->getErrors()];
        }

        return $data;
    }


    //购物车减
    public function reduce($shop_cart, $goods_number)
    {
        $data = [];
        if ($shop_cart) {
            $shop_cart->number = $goods_number;
        } else {
            $data = ['code' => 501, 'msg' => '无此商品', 'data' => ''];

            return $data;
        }

        $isSuccess = $goods_number < 1 ? $shop_cart->delete() : $shop_cart->save();
        $message   = $goods_number < 1 ? "删除" : "减数量";
        if ($isSuccess) {
            $data = ['code' => 200, 'msg' => "{$message}成功", 'data' => null];
        } else {
            $data = ['code' => 501, 'msg' => "{$message}失败", 'data' => $shop_cart->getErrors()];
        }

        return $data;
    }

    //购物车移除商品
    public function remove($shop_cart)
    {
        $data = [];
        if (!$shop_cart) {
            $data = ['code' => 501, 'msg' => '无此商品', 'data' => $shop_cart->getErrors()];

            return $data;
        }

        if ($shop_cart->delete()) {
            $data = ['code' => 200, 'msg' => '删除商品成功', 'data' => null];
        } else {
            $data = ['code' => 501, 'msg' => '删除商品失败', 'data' => $shop_cart->getErrors()];
        }

        return $data;
    }


}