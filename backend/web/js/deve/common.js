/**
 * Created by guofeng on 2016/3/23 0023.
 */

/**
 * @author guofeng
 * @param e
 * @constructor
 * @desc confirm确认 ajax提交前
 */

var _csrf = $('input[name=_csrf]').val();
var UrlList = ['/chapter/addsuite.html', '/chapter/addcourse.html', '/chapter/addplan.html', '/chapter/addexercise.html']

var ConfirmAjaxBeforeSend = function (e) {
    var errordiv = $(e).siblings('.has-error').find('label');
    var successdiv = $(e).siblings('.has-success').find('label');
    errordiv.text('');
    successdiv.text('');
    $(e).attr('disabled', 'disabled');
}


/**
 * @author guofeng
 * @param data
 * @param textStatus
 * @constructor
 * @desc confirm 提交 ajax成功
 */


var ConfirmAjaxSuccess = function (data, textStatus) {
    if (typeof data == 'string') {
        data = JSON.parse(data);
    }
    var errordiv = $('#confirm .has-error').find('label');
    var successdiv = $('#confirm .has-success').find('label');
    if (data.code == 200 && textStatus == 'success') {
        successdiv.text('操作成功，跳转中');
        setTimeout(function () {
            if (!$('.page span.rows').length) {
                var index = $('#page span').index($('#page span.active'));
                $('.page span.active').removeClass('active');
                $('.page span').eq(index).trigger('click');
                $('#confirm').modal('hide');
                $('#confirm .has-success label').text('');
                $('#confirm .submit').removeAttr('disabled');
            } else {
                window.location.reload();
            }
            window.location.reload();
        }, 1000);
    } else {
        errordiv.text(data.desc);
        $('#confirm .submit').removeAttr('disabled');
    }
}

/**
 * @author guofeng
 * @constructor
 * @desc confirm 提交 ajax错误时
 */
var ConfirmAjaxError = function (error) {
    var errordiv = $('#confirm .has-error').find('label');
    errordiv.text('网络连接失败，请检查网络后再次尝试' + error);
    $('#confirm .submit').removeAttr('disabled');
}

/**
 * @author guofeng
 * @param e
 * @returns {boolean}
 * @constructor
 * @desc confir点确认
 */
var ConfirmSubmit = function (e) {
    var parent = $('#confirm'),
        para = parent.attr('data-para'),
        id = parent.attr('data-value'),
        type = parent.attr('data-type'),
        csrf = parent.attr('cs'),
        config;
    config = {
        type: 'POST',
        url: confirmConfig[type].url,
        param: {
            id: id,
            _csrf: csrf
        },
        beforeSendFunc: ConfirmAjaxBeforeSend(e),
        successFunc: ConfirmAjaxSuccess,
        errorFunc: ConfirmAjaxError,
    }
    getAjaxResult(config);
    return false;
}


/**
 * confirm确认操作--
 */
$(document).on('click', '#confirm .submit', ConfirmSubmit);


/**
 * @author guofeng
 * @param obj
 * @param param
 * @returns {boolean}
 * @desc 共用ajax
 */
var getAjaxResult = function (obj, param) {
    $.ajax({
        data: obj.param,
        type: obj.type,
        url: obj.url,
        beforeSend: obj.beforeSendFunc ? obj.beforeSendFunc : '',
        success: obj.successFunc,
        error: obj.errorFunc
    })
    return false;
};

/**
 * 跳转到新增章节页面
 */
$(document).on('click', '#addChapter', function () {
    var gid = $('select[name=Grade]').val();
    var sid = $('select[name=Subject]').val();
    var vid = $('select[name=Versions]').val();
    // var volid = $('select[name=volume]').val();
    var volid = ''; // 册数功能不要了 先注释  先把册数 传空过去

    if (gid == 0) {
        alert('请选择年级');
        return;
    } else if (sid == 0) {
        alert('请选择科目');
        return;
    } else if (vid == 0) {
        alert('请选择教材版本');
        return;
    }
    // else if(volid==0){
    //     alert("请选择上下册");
    //     return;
    // }
    window.location.href = "/catchapter/add.html?gid=" + gid + "&sid=" + sid + "&vid=" + vid + "&volid=" + volid;
})

/**
 * 跳转到新增知识点页面
 */
$(document).on('click', '#addKnowledge', function () {
    var gid = $('select[name=Grade]').val();
    var sid = $('select[name=Subject]').val();

    if (gid == 0) {
        alert('请选择年级');
        return;
    } else if (sid == 0) {
        alert('请选择科目');
        return;
    }
    window.location.href = "/catknowledge/add.html?gid=" + gid + "&sid=" + sid;
})


var extArr = ['.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.bmp', '.gif', '.jpg', '.jpeg', '.png', '.txt', '.rtf', '.wps', '.wtf', '.pdf', '.zip', '.rar', '.flv'];


/**
 * 以下是上传套件相关的js
 */

//上传文件  选择完文件之后
var OnChangeFunc = function (e, url) {
    var fileName, ext;
    var self = $(e.target)
    var tipSpan = self.parent().next()
    var inputName = e.target.name;
    var data = new FormData()
    var files = self[0].files;
    tipSpan.html('正在上传').css({'color': 'red', 'font-size': '16px', 'font-weight': 'blod'}).show();


    fileName = files[0].name;
    ext = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();
    if ($.inArray(ext, extArr) == -1) {
        tipSpan.html('文件格式不正确').css({'color': 'red', 'font-size': '16px', 'font-weight': 'blod'}).show();
        return false;
    }
    //为FormData对象添加数据
    $.each(files, function (i, file) {
        data.append('upload_file', file);
    });

    data.append('_csrf', $('input[name=_csrf]').val());

    $('#btnSub').attr('disabled', true);


    (function (data, inputName, e, url) {
        $.ajax({
            url: url ? url : '/chapter/upload.html',
            data: data,
            type: 'POST',
            contentType: false,    //不可缺
            processData: false,    //不可缺
            dataType: 'json',
            success: function (data) {
                console.log(inputName, data.data);
                tipSpan.html('上传成功');

                if (data.code == 200) {
                    switch (inputName) {
                        case "course":
                            $('input:hidden[name=course_file_id]').val(data.data);
                            break;
                        case "plan":
                            $('input:hidden[name=plan_file_id]').val(data.data);
                            break;
                        case "exercise":
                            $('input:hidden[name=exercise_file_id]').val(data.data);
                            break;
                        case "exercise_answer":
                            $('input:hidden[name=exercise_answer_file_id]').val(data.data);
                            break;
                        case "covers":
                            $('input:hidden[name=covers]').val(data.data);
                            break;
                        case "ebook":
                            $('input:hidden[name=ebook]').val(data.data);
                            break;
                        case "image":
                            $('input:hidden[name=image]').val(data.data);
                            break;
                        case "vedio":
                            $('input:hidden[name=vedio]').val(data.data);
                            break;
                    }
                } else {
                    tipSpan.html('上传失败:' + data.desc);
                }
                $('#btnSub').attr('disabled', false);
            },
            error: function (err) {
                tipSpan.html('请求失败:' + err.responseText);
                $('#btnSub').attr('disabled', false);
            }
        });
    })(data, inputName, e, url);

}


//当上传文件input 触发onchange事件时   ajax上传文件
$('#suite #tab-1 input[name=course]').change(OnChangeFunc);//上传课件
$('#suite #tab-2 input[name=plan]').change(OnChangeFunc);//上传教案
$('#suite #tab-3 input[name=exercise]').change(OnChangeFunc);//上传练习
$('#suite #tab-3 input[name=exercise_answer]').change(OnChangeFunc);//上传练习答案


//默认隐藏章节相关类目【版本 上下册 章节】 和 知识点类目【知识点】
$('#suite select[name=versions_id]').attr('disabled', true).parent().parent().hide();
// $('#suite select[name=volume]').attr('disabled', true).parent().parent().hide();
$('#suite select[name=chapter_id]').attr('disabled', true).parent().parent().hide();

$('#suite select[name=knowledge_id]').attr('disabled', true).parent().parent().hide();


//如果点击了 章节的 checkbox 时      显示或隐藏 章节相关的select
$("#is_chapter").on('ifClicked', function () {

    if ($(this).children("div").hasClass('checked') == true) {
        $('select[name=versions_id]').attr('disabled', true).parent().parent().hide();
        // $('select[name=volume]').attr('disabled', true).parent().parent().hide();
        $('select[name=chapter_id]').attr('disabled', true).parent().parent().hide();
    } else {
        // generateSelectList();
        $('select[name=versions_id]').attr('disabled', false).parent().parent().show();
        // $('select[name=volume]').attr('disabled', false).parent().parent().show();
        $('select[name=chapter_id]').attr('disabled', false).parent().parent().show();
    }
});


//-------------------------------上传套件页面 上传（课件/教案/练习）-checded-------------begin---------------
$(function () {
    //页面加载完成之后  如果是新增 套件  课件  教案  练习的话   就把三个复选框 都选中
    if ($.inArray(currentUrl, UrlList) != -1) {
        $("#is_course").click();
        $("#is_plan").click();
        $("#is_exercise").click();
    }


    //编辑 套件页面上传内容选项   谁有值就把谁选中   &&   所属章节和知识点  有值则双击
    if (currentUrl == "/chapter/editsuite.html") {
        if ($("#is_course").data('course_id') > 0) {
            $("#is_course").click()
        }
        ;
        if ($("#is_plan").data('plan_id') > 0) {
            $("#is_plan").click()
        }
        ;
        if ($("#is_exercise").data('exercise_id') > 0) {
            $("#is_exercise").click()
        }
        ;

        if ($("#is_chapter").data("is_chapter") > 0) {
            $("#is_chapter").click()
        }
        ;
        if ($("#is_knowledge").data("is_knowledge") > 0) {
            $("#is_knowledge").click()
        }
        ;

        generateSelectList();


    }

    //编辑课件/教案/练习页面的时候  如果是属于知识点或章节的话  就双击 复选框
    if (currentUrl == "/chapter/editcourse.html" || currentUrl == "/chapter/editplan.html" || currentUrl == "/chapter/editexercise.html") {

        if ($("#is_chapter").data("is_chapter") > 0) {
            $("#is_chapter").click()
        }
        ;
        if ($("#is_knowledge").data("is_knowledge") > 0) {
            $("#is_knowledge").click()
        }
        ;
        generateSelectList();

    }

    //添加和编辑 宝典页面
    ueditorArr = ["/article/edit.html",
        "/article/add.html",
        "/feedback/reply.html",
        "/chapter/addsuite.html",
        "/chapter/addcourse.html",
        "/chapter/addplan.html",
        "/chapter/addexercise.html",
        "/chapter/editexercise.html",
        "/chapter/editcourse.html",
        "/chapter/editplan.html",
        "/chapter/editsuite.html",
    ];
    if ($.inArray(currentUrl, ueditorArr) != -1) {
        var ue = UE.getEditor('editor', {
            // initialFrameWidth:500,
        });
    }


})

$("#is_course").on('ifClicked', function () {
    if ($(this).children("div").hasClass('checked') == true) {
        $(".nav-tabs li").eq(0).removeClass("active").hide();
        $("#tab-1").removeClass("active");
    } else {
        //选中
        $(".nav-tabs li").removeClass("active");
        $(".nav-tabs li").eq(0).addClass("active").show();
        $(".tab-content div").removeClass("active");
        $("#tab-1").addClass("active");
    }
})

$("#is_plan").on('ifClicked', function () {
    if ($(this).children("div").hasClass('checked') == true) {
        $(".nav-tabs li").eq(1).removeClass("active").hide();
        $("#tab-2").removeClass("active");
    } else {
        //选中
        $(".nav-tabs li").removeClass("active");
        $(".nav-tabs li").eq(1).addClass("active").show();
        $(".tab-content div").removeClass("active");
        $("#tab-2").addClass("active");
    }
})

$("#is_exercise").on('ifClicked', function () {
    if ($(this).children("div").hasClass('checked') == true) {
        $(".nav-tabs li").eq(2).removeClass("active").hide();
        $("#tab-3").removeClass("active");

    } else {
        //选中
        $(".nav-tabs li").removeClass("active");
        $(".nav-tabs li").eq(2).addClass("active").show();
        $(".tab-content div").removeClass("active");
        $("#tab-3").addClass("active");
    }
})

//-------------------------------上传套件页面 上传内容（课件/教案/练习）-checked-----------------end-----------


//如果点击了 知识点的 checkbox 时      显示或隐藏 知识相关的select
$("#is_knowledge").on('ifClicked', function () {
    if ($(this).children("div").hasClass('checked') == true) {
        $('select[name=knowledge_id]').attr('disabled', true).parent().parent().hide();
    } else {
        $('select[name=knowledge_id]').attr('disabled', false).parent().parent().show();
    }
});


var CheckIsChapterAndIsKnowledgeCheckbox = function () {
    $("#is_chapter").parent().next().html('');
    if ($("#is_chapter").find('div').hasClass('checked') == false && $("#is_knowledge").find('div').hasClass('checked') == false) {
        $("#is_chapter").parent().next().html('请勾选所属 章节或知识点').css({
            'color': 'red',
            'display': 'block',
            'width': '150px',
            'margin-top': '-10px',
            'float': 'right'
        });
        return false;
    }
    return true;
}

//检测标题是否填写了和类目是否选了
var CheckTitleAndSelect = function (obj) {
    var Tag = new Array;
    var errStyle = {'color': 'red', 'display': 'block', 'width': '150px', 'margin-top': '7px', 'float': 'right'};

    var assembly_title = $('input[name=assembly_title]');
    var grade_id = $('select[name=grade_id]');
    var subject_id = $('select[name=subject_id]');
    var versions_id = $('select[name=versions_id]');
    // var volume = $('select[name=volume]');
    var chapter_id = $('select[name=chapter_id]');
    var knowledge_id = $('select[name=knowledge_id]');

    //如果当前页面是 新增套件页面  就判断 套件标题是否填写   反之则不判断
    if (currentUrl == "/chapter/addsuite.html" || currentUrl == "/chapter/editsuite.html") {
        if (assembly_title.val() == null || assembly_title.val() == '') {
            alert(assembly_title.val());
            assembly_title.parent().next().html("请填写套件标题").css(errStyle);
            Tag.push('0');
        } else {
            assembly_title.parent().next().html("");
        }
    }


    if (grade_id.val() == null || grade_id.val() == '') {
        grade_id.parent().next().html("请选择年级").css(errStyle);
        Tag.push('3');
    } else {
        grade_id.parent().next().html("");
    }

    if (subject_id.val() == null || subject_id.val() == '') {
        subject_id.parent().next().html("请选择科目").css(errStyle);
        Tag.push('4');
    } else {
        subject_id.parent().next().html("");
    }

    if ($("#is_chapter").find('div').hasClass('checked')) {
        if (versions_id.val() == null || versions_id.val() == '') {
            versions_id.parent().next().html("请选择教材版本").css(errStyle);
            Tag.push('5');
        } else {
            versions_id.parent().next().html("");
        }
        // if(volume.val() == null || volume.val() == ''){
        //     volume.parent().next().html("请选择上下册").css(errStyle);
        //     Tag.push('6');
        // }else{
        //     volume.parent().next().html("");
        // }
        if (chapter_id.val() == null || chapter_id.val() == '') {
            chapter_id.parent().next().html("请选择章节").css(errStyle);
            Tag.push('7');
        } else {
            chapter_id.parent().next().html("");
        }
    }

    if ($("#is_knowledge").find('div').hasClass('checked')) {
        if (knowledge_id.val() == null || knowledge_id.val() == "") {
            knowledge_id.parent().next().html("请选择知识点").css(errStyle);
            Tag.push('8');
        } else {
            knowledge_id.parent().next().html("");
        }
    }
    return Tag.length > 0 ? false : true;
}


var ClickTab = function (prefix) {
    $("#" + prefix).click();
}

//检测Tab选项卡下面的input框是否填写了  如果没有填写则返回false
var CheckTab = function (prefix) {
    var ObjConfig = inputObj(prefix);

    //同步练习 又不要答案了 先注释，免得反悔
    // if(prefix == 'exercise'){
    //     if( ObjConfig.title.val() == '' || ObjConfig.description.val() == '' ||  ObjConfig.content.val() == '' || ObjConfig.integral.val() == '' || ObjConfig.fileName.val() == '' || ObjConfig.fileNameA.val() == ''){
    //         return false;
    //     }
    //     return true;
    // }else{

    if (ObjConfig.title.val() == '' || ObjConfig.description.val() == '' || ObjConfig.integral.val() == '' || ObjConfig.fileName.val() == '') {
        return false;
    }
    return true;
    // }
}


//返回tab选项卡下面的input对像
var inputObj = function (prefix) {
    return objConfig = {
        title: $('input[name=' + prefix + '_title]'),
        description: $('[name=' + prefix + '_description]'),
        content: $('[name=' + prefix + '_content]'),
        integral: $('input[name=' + prefix + '_integral]'),
        fileName: $('input[name=' + prefix + '_file_id]'),
        // fileNameA : prefix=='exercise'?$('input:hidden[name=exercise_answer_file_id]'):null,
        errStyle: {'color': 'red', 'display': 'block', 'width': '150px', 'margin-top': '7px', 'float': 'right'}
    }
}


//给表单右侧加上错误提示
var errorTips = function (prefix) {
    var ObjConfig = inputObj(prefix), errFont = '请填写' + $('#' + prefix).html();
    ObjConfig.title.parent().next().html('');
    ObjConfig.description.parent().next().html('');
    ObjConfig.content.parent().next().html('');
    ObjConfig.integral.parent().next().html('');
    ObjConfig.fileName.parent().next().html('');
    //同步练习 又不要答案了 先注释，免得反悔
    // if(prefix == 'exercise'){
    //     if(ObjConfig.title.val() == '' || ObjConfig.description.val() == '' || ObjConfig.content.val() == ''  || ObjConfig.integral.val() == '' || ObjConfig.fileName.val() == '' || ObjConfig.fileNameA.val() == ''){
    //         if(ObjConfig.title.val() == ''){
    //             ObjConfig.title.parent().next().html(errFont+'标题').css(ObjConfig.errStyle);
    //         }
    //         if(ObjConfig.description.val() == ''){
    //             ObjConfig.description.parent().next().html(errFont+'描述').css(ObjConfig.errStyle);
    //         }
    //         if(ObjConfig.content.val() == ''){
    //             ObjConfig.content.parent().next().html(errFont+'文章').css(ObjConfig.errStyle);
    //         }
    //         if(ObjConfig.integral.val() == ''){
    //             ObjConfig.integral.parent().next().html(errFont+'积分').css(ObjConfig.errStyle);
    //         }
    //         if(ObjConfig.fileName.val() == ''){
    //             ObjConfig.fileName.parent().next().html('请上传文件').css(ObjConfig.errStyle);
    //         }
    //
    //         if(ObjConfig.fileNameA.val() == ''){
    //             ObjConfig.fileNameA.parent().next().html('请上传答案').css(ObjConfig.errStyle);
    //         }
    //         return false;
    //     }else{
    //         return true;
    //     }
    // }else{
    if (ObjConfig.title.val() == '' || ObjConfig.description.val() == '' || ObjConfig.integral.val() == '' || ObjConfig.fileName.val() == '') {
        if (ObjConfig.title.val() == '') {
            ObjConfig.title.parent().next().html(errFont + '标题').css(ObjConfig.errStyle);
        }
        if (ObjConfig.description.val() == '') {
            ObjConfig.description.parent().next().html(errFont + '描述').css(ObjConfig.errStyle);
        }
        // if(ObjConfig.content.val() == ''){
        //     ObjConfig.content.parent().next().html(errFont+'文章').css(ObjConfig.errStyle);
        // }
        if (ObjConfig.integral.val() == '') {
            ObjConfig.integral.parent().next().html(errFont + '积分').css(ObjConfig.errStyle);
        }
        if (ObjConfig.fileName.val() == '') {
            ObjConfig.fileName.parent().next().html('请上传文件').css(ObjConfig.errStyle);
        }
        return false;
    } else {
        return true;
    }
    // }
}


var CheckUploadCheckboxChecked = function () {
    var is_course = $('#is_course').find('input').is(':checked');
    var is_plan = $('#is_plan').find('input').is(':checked');
    var is_exercise = $('#is_exercise').find('input').is(':checked');
    if (!is_course && !is_plan && !is_exercise) {
        $("#is_course").parent().next()
            .html('请勾选所属 上传文件类型')
            .css({'color': 'red', 'display': 'block', 'width': '150px', 'margin-top': '-10px', 'float': 'right'});
        return false;
    }
    var Arr = new Array();
    if (is_course) {
        Arr.push('course');
    }
    if (is_plan) {
        Arr.push('plan');
    }
    if (is_exercise) {
        Arr.push('exercise');
    }

    if (Arr.length <= 1) {
        $("#is_course").parent().next()
            .html('至少勾选两个其中的两个')
            .css({'color': 'red', 'display': 'block', 'width': '150px', 'margin-top': '-10px', 'float': 'right'});
        return false;
    } else {
        $("#is_course").parent().next().html('')
    }

    return Arr.length ? Arr : false;
}

/*******************************************************套件**************************************/
//检测input框有没有填写
var checkInputValue = function (obj) {
    var Tag;
    var TabTag = new Array();
    var TabOptionName = CheckUploadCheckboxChecked();

    //检测是否选择了章节或知识点
    if (!CheckIsChapterAndIsKnowledgeCheckbox()) {
        return false;
    }

    //检测是否勾选了上传文件类型 如果没有勾选的话  在右侧提示红色tips  并且返回false
    if (!TabOptionName) {
        return false;
    }
    $.each(TabOptionName, function (i, name) {
        if (!CheckTab(name)) {
            TabTag.push(name);
        }
    })

    //检测标题是否填写了和类目是否选了
    if (!CheckTitleAndSelect(obj)) {
        return false;
    }

    //检测标题 并且select是否有值 描述 积分 课件
    if (TabTag.length > 0) {
        errorTips(TabTag[0])
        ClickTab(TabTag[0]);
        return false;
    }
    return true;
}
/*******************************************************套件end**************************************/


/*******************************************************课件**************************************/

//检测课件input框有没有填写
var checkSingleInputValue = function (obj, param) {
    var Tag;
    //检测是否选择了章节或知识点
    if (!CheckIsChapterAndIsKnowledgeCheckbox()) {
        return false;
    }

    //检测标题是否填写了和类目是否选了
    if (!CheckTitleAndSelect(obj)) {
        return false;
    }
    if (!errorTips(param)) {
        return false;
    }
    return true;
}
/*******************************************************课件end**************************************/


var currentUrl = window.location.pathname;
//表单提交时检测表单值是否为空
var CheckForm = function (thi) {
    var result;
    switch (currentUrl) {
        case '/chapter/addsuite.html':
            result = checkInputValue(thi);
            break;
        case '/chapter/addcourse.html':
            result = checkSingleInputValue(thi, 'course');
            break;
        case '/chapter/addplan.html':
            result = checkSingleInputValue(thi, 'plan');
            break;
        case '/chapter/addexercise.html':
            result = checkSingleInputValue(thi, 'exercise');
            break;
        case '/chapter/editsuite.html':
            result = checkInputValue(thi);
            break;
    }
    return result;
}


//--------------------input框时间插件  暂时没有用到
$(document).ready(function () {
    $('#data_1 .input-group.date').datepicker({
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        calendarWeeks: true,
        autoclose: true
    });
})
//--------------------无用end

//-------------------------------------------------------上传教材页面-------------------


$(function () {
    if (currentUrl == "/teachm/edit.html" || currentUrl == "/teachm/add.html") {
        areaOnChange();
    }
})

var VersionsTpl = function (data) {
    var optionStr = "";
    var Selected = "";
    var VersionsSelectObj = $('#teachmatiz select[name=versions]');
    $.each(data, function (i, d) {
        Selected = "";
        if (VersionsSelectObj.data('oldvalue') == d.versions_id) {
            Selected = "selected";
        }
        optionStr += "<option value='" + d.versions_id + "'" + Selected + ">" + d.title + "</option>";
    })
    VersionsSelectObj.empty();
    VersionsSelectObj.append(optionStr);
    SelectOnchange();
}


var areaOnChange = function (e) {
    var area_id = $('#teachmatiz select[name=area]').val();
    var config = {
        type: 'POST',
        url: "/teachm/getversions.html",
        param: {"area_id": area_id, "_csrf": _csrf,},
        beforeSendFunc: "",
        successFunc: function (data, textStatus) {
            if (typeof data == "string") {
                data = JSON.parse(data)
            }
            if (data.code == 200) {
                VersionsTpl(data.data);
            }
            else {
                alert(data.desc);
            }
        },
        errorFunc: function (error) {
            console.log(error);
        },
    }
    getAjaxResult(config);
    return false;
};


var SelectOnchange = function (e) {
    var area = $('select[name=area]');
    var grade = $('select[name=grade]');
    var subject = $('select[name=subject]');
    var versions = $('select[name=versions]');
    // var volumes = $('select[name=volumes]');
    // if(area.val() != '' && grade.val() != '' && subject.val() != '' && volumes.val() != '' && versions.val() != ''){
    var areaText = area.find("option:selected").text();
    var gradeText = grade.find("option:selected").text();
    var subjectText = subject.find("option:selected").text();
    // var volumesText = volumes.find("option:selected").text(); // 注释上下册功能
    var volumesText = '';
    var versionsText = versions.find("option:selected").text();
    $('input[name=teachm_title]').val(gradeText + subjectText + volumesText + "(" + areaText + versionsText + ")");
    // }

}


$('#teachmatiz select[name=area]').change(areaOnChange);
$('#teachmatiz select[name=grade]').change(SelectOnchange);
$('#teachmatiz select[name=subject]').change(SelectOnchange);
$('#teachmatiz select[name=versions]').change(SelectOnchange);
// $('#teachmatiz select[name=volumes]').change(SelectOnchange);


//上传教材封面
$('#teachmatiz input[name=covers]').change(function (e) {
    OnChangeFunc(e, '/teachm/upload.html')
});
// $('#teachmatiz input[name=ebook]').change(function(e){OnChangeFunc(e, '/teachm/upload.html')});//上传教材电子书  此功能暂时不要了


//-----------------------------------------------上传教材页面end---------------------------------------


//教学宝典 里面 用户分享同意与
$('#tab-2 #adopt').click(function () {
    var self = $(this);
    if (confirm("确定要通过?")) {
        $.ajax('/article/accopt.html', {
            type: 'POST',
            data: {'id': self.data('id'), '_csrf': _csrf, 'passed': 1},
            success: function (data) {
                if (typeof data == "string") {
                    data = JSON.parse(data)
                }
                if (data.code == 200) {
                    window.location.reload();
                    $('#tabLi li').eq(1).children().click();
                }
                else {
                    alert("操作失败");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
            }
        })
    }

})


$('#tab-2 #refuse').click(function () {
    var self = $(this);
    if (confirm("确定要拒绝?")) {
        $.ajax('/article/accopt.html', {
            type: 'POST',
            data: {'id': self.data('id'), '_csrf': _csrf, 'passed': 2},
            success: function (data) {
                if (typeof data == "string") {
                    data = JSON.parse(data)
                }
                if (data.code == 200) {
                    window.location.reload();
                    $('#tabLi li').eq(1).children().click();
                }
                else {
                    alert("操作失败");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
            }
        })
    }
})

//视频管理 上传封面
$('#vedio input[name=image]').change(function (e) {
    OnChangeFunc(e, '/vedio/upload.html')
});

//视频管理 上传视频
$('#vedio input[name=vedio]').change(function (e) {
    OnChangeFunc(e, '/vedio/upload.html')
});

//广告管理 上传封面
$('#advert input[name=image]').change(function (e) {
    OnChangeFunc(e, '/advert/upload.html')
});


// $('#suite select[name=chapter_id]').click(function(){
//     var grade_id = $('select[name=grade_id]').val();
//     var subject_id = $('select[name=subject_id]').val();
//     var versions_id = $('select[name=versions_id]').val();
//     var volume = $('select[name=volume]').val();
//
//     if(grade_id && subject_id && versions_id && volume){
//         $.ajax('/chapter/list.html',{
//             type:'POST',
//             data:{
//                 'grade_id': grade_id,
//                 'subject_id': subject_id,
//                 'versions_id': versions_id,
//                 'volume': volume,
//                 '_csrf':_csrf,
//             },
//             success:function(data){
//                 console.log(data);
//             },
//             error:function(XMLHttpRequest, textStatus, errorThrown){
//                 console.log(textStatus);
//             }
//         })
//     }else {
//         return false;
//     }
// })


//章节分类管理index.html页面的顶部筛选select变动的时候
var catchapterManagerSelectChange = function () {
    var grade_id = $('select[name=Grade]').val();
    var subject_id = $('select[name=Subject]').val();
    var versions_id = $('select[name=Versions]').val();
    // var volume_id = $('select[name=volume]').val();
    var volume_id = '';
    var params = "?grade_id=" + grade_id + "&subject_id=" + subject_id + "&versions_id=" + versions_id + "&volume_id=" + volume_id;
    window.location.href = currentUrl + params;
};
// $('#catchapterManager select[name=volume]').change(catchapterManagerSelectChange);//章节列表筛选
$('#catchapterManager select[name=Versions]').change(catchapterManagerSelectChange);//版本列表筛选
$('#catchapterManager select[name=Subject]').change(catchapterManagerSelectChange);//科目列表筛选
$('#catchapterManager select[name=Grade]').change(catchapterManagerSelectChange);//年级列表筛选


//版本列表筛选 根据城市
var catversionsManagerSelectChange = function () {
    var area_id = $('select[name=area_id]').val();
    var params = "?area_id=" + area_id;
    window.location.href = currentUrl + params;
};
$('#catversionsManager select[name=area_id]').change(catversionsManagerSelectChange);//章节列表筛选


////////////////////////////////////////////////////////////////////新增 套件 课件 教案 练习 页面    根据年级/科目/版本/册别 取得 章节或知识类目 //////////////////////////////////////////////

//当页面加载完毕后   如果是新增 套件/课件/教案/练习页面 则执行一次
$(document).ready(function () {
    if ($.inArray(currentUrl, UrlList) != -1) {
        generateSelectList();
    }
})


//新增 套件 课件 教案 练习 页面 当年级 科目下拉列表选择的时候 获取最新的select知识点或者章节 并且放入知识点或者章节select下面
$('#suite .panel-heading .panel-title select[name=grade_id]').change(function () {
    generateSelectList();
})
$('#suite .panel-heading .panel-title select[name=subject_id]').change(function () {
    generateSelectList();
})
$('#suite .panel-heading .panel-title select[name=versions_id]').change(function () {
    generateSelectList();
})
// $('#suite .panel-heading .panel-title select[name=volume]').change(function(){ generateSelectList(); })


//新增套件 课件 教案 练习页面   获取四个select值
var encapsulation = function () {
    var grade_id = $("#suite .panel-heading .panel-title select[name=grade_id]"); //年级
    var subject_id = $("#suite .panel-heading .panel-title select[name=subject_id]"); //科目
    var versions_id = $("#suite .panel-heading .panel-title select[name=versions_id]"); //版本
    // var volume = $("#suite .panel-heading .panel-title select[name=volume]"); //册别 // 注释上下册功能
    var volume = ''; //册别 // 注释上下册功能
    var data = {
        "grade_id": grade_id.val(),
        "subject_id": subject_id.val(),
        "versions_id": versions_id.val(),
        "volume": volume,
        "_csrf": _csrf,
    }
    return data;
}


var generateSelectList = function () {
    var is_chapter = $("#suite #is_chapter").find('input').is(":checked")
    var is_knowledge = $("#suite #is_knowledge").find('input').is(":checked")
    var chapterUrl = "/catchapter/getchapter.html";
    var knowledgeUrl = "/catknowledge/getknowledge.html";
    var data = encapsulation();
    ChapterList(chapterUrl, data);
    ChapterList(knowledgeUrl, data);
    // if(is_chapter){ ChapterList(chapterUrl, data); }
    // if(is_knowledge){ ChapterList(knowledgeUrl, data); }
}


//ajax请求获得select列表值
var ChapterList = function (url, data) {
    $.ajax(url, {
        type: "POST",
        data: data,
        success: function (result) {
            result = JSON.parse(result).data;
            Tpl(result, this.url);
        },
        error: function (error) {
            console.log(error.responseText);
        }
    })
}


// 模板  把option放入select里面
var Tpl = function (data, url) {
    var optionsString = TplDiGui(data, 1, url);
    // console.log(optionsString);
    var chapter_id = $("#suite .panel-heading .panel-title select[name=chapter_id]");
    var knowledge_id = $("#suite .panel-heading .panel-title select[name=knowledge_id]");
    if (url == '/catchapter/getchapter.html') {
        chapter_id.empty();
        chapter_id.append(optionsString);
    }
    if (url == '/catknowledge/getknowledge.html') {
        knowledge_id.empty();
        knowledge_id.append(optionsString)
    }
}


//把数据生成select  option
var optionStr = "";
var TplDiGui = function (data, tag, url) {
    if (tag <= 1) {
        optionStr = ""
    }

    //获得 章节 select上面的 data-is_chapter 和 知识点 select上面的 data-is_knowledge
    //这两个值，在addsuite.html（新增套件）页面为空值    在 editsuite.html（编辑套件）页面是有值的
    var chapter_id = "";
    var knowledge_id = "";
    var isSelected = "";
    if (currentUrl == "/chapter/editsuite.html" || currentUrl == "/chapter/editcourse.html" || currentUrl == "/chapter/editplan.html" || currentUrl == "/chapter/editexercise.html") {
        chapter_id = $("#is_chapter").data("is_chapter");
        knowledge_id = $("#is_knowledge").data("is_knowledge");
    }

    for (var i in data) {
        if (url == '/catchapter/getchapter.html') {
            if (chapter_id == data[i].id) {
                isSelected = "selected";
            }
        }
        if (url == '/catknowledge/getknowledge.html') {
            if (knowledge_id == data[i].id) {
                isSelected = "selected";
            }
        }

        if (tag > 1) {
            optionStr += "<option value='" + data[i].id + "'" + isSelected + ">" + generate(tag) + data[i].title + "</option>"
        } else {
            optionStr += "<option value='" + data[i].id + "'" + isSelected + ">" + data[i].title + "</option>"
        }
        if (data[i].children != undefined) {
            TplDiGui(data[i].children, tag + 1, url);
        }
    }
    return optionStr;
}

//生成空格  章节或者知识点 select里面用
var generate = function (tag) {
    var str = '';
    for (var i = 0; i < tag; i++) {
        str += '&nbsp;&nbsp;&nbsp;&nbsp;';
    }
    return str;
}


////////////////////////////////////////////////////////////////////新增 套件 课件 教案 练习end//////////////////////////////////////////////


////////////////////////////////////////////////////////////////////备课文件 页面 章节select 和 知识点select 选择事件//////////////////////////////////
$('select[name=chapter]').change(function () {
    // var sero = $(".todo-list li:eq(0)").find('a').eq(0)[0].search+"&chapter_id="+$(this).val();
    var currentParams = window.location.search;
    var NewArrSplit = currentParams.split("&");
    var NewArr = new Array;
    $.each(NewArrSplit, function (i, data) {
        if (data.search("chapter_id=") == -1) {
            NewArr.push(NewArrSplit[i]);
        }
    })
    var params = NewArr.join("&") + "&chapter_id=" + $(this).val();
    window.location.href = params;
})

$('select[name=knowledge]').change(function () {
    var currentParams = window.location.search;
    var NewArrSplit = currentParams.split("&");
    var NewArr = new Array;
    $.each(NewArrSplit, function (i, data) {
        if (data.search("knowledge_id=") == -1) {
            NewArr.push(NewArrSplit[i]);
        }
    })
    var params = NewArr.join("&") + "&knowledge_id=" + $(this).val();
    window.location.href = params;
})
//////////////////////////////////////////////////////备课文件 页面 章节select 和 知识点select 选择事件end////////////////////////////////////////


////////////////////////////////////////////////////////////反馈页面的处理和不处理按钮
$("#operation a").click(function () {
    var id = $(this).data('id');
    var pass = $(this).data('pass');
    var url = "";
    var config = {
        type: 'POST',
        url: url,
        param: {"id": id, "_csrf": _csrf, "pass": pass},
        beforeSendFunc: "",
        successFunc: function (data, textStatus) {
            if (typeof data == "string") {
                data = JSON.parse(data)
            }
            if (data.code == 200) {
                window.location.reload();
            }
            else {
                alert(data.desc);
            }
        },
        errorFunc: function (error) {
            console.log(error);
        },
    }

    if (pass == 1 || pass == 2) {
        config.url = "/feedback/processed.html";
        getAjaxResult(config);
        return false;
    } else {
        $('#confirm').attr('data-value', id);
        $('#confirm').attr('data-type', 'del');
        $('#confirm').attr('cs', _csrf);
        $('#confirm .modal-body p').text(confirmConfig.del.text);
        $('#confirm').find('.modal-footer label').text('');
        $('#confirm').modal();
    }
})
///////////////////////////////////////////////////////////////////////////反馈页面处理 不处理  end

if ($.inArray(currentUrl, ['/catversions/add.html', '/catversions/update.html']) != -1) {

    $('.btn-primary').click(function () {
        if (!$('#area_id').find("input").is(':checked')) {
            $("#area_id").parent().next()
                .html('至少勾选两个其中的1个')
                .css({'color': 'red', 'display': 'block', 'width': '150px', 'margin-top': '-10px', 'float': 'right'});
            return false;
        }
        return true;
    })

}
