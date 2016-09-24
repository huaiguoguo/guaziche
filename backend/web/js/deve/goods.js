/**
 * Created by guo on 2016/5/15.
 */


var extArr = ['.jpg', '.jpeg', '.png'];

//上传文件  选择完文件之后
var OnChangeFunc = function (e, url) {
    var fileName, ext;
    var self = $(e.target);

    var tipSpan = self.parent().next();
    var inputName = e.target.name;
    var data = new FormData();
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
        data.append(inputName, file);
    });
    data.append('_csrf', csrf);

    (function (data, inputName, e, url) {
        $.ajax({
            url: url ? url : self.data('upload'),
            data: data,
            type: 'POST',
            contentType: false,    //不可缺
            processData: false,    //不可缺
            dataType: 'json',
            success: function (data) {
                // console.log(inputName, data.data);
                tipSpan.html('上传成功');
                if (data.code == 200) {
                    $("#tbody").append(
                        '<tr>' +
                        '<td><img src="/img/gallery/2s.jpg"></td>' +
                        '<td><input type="text" class="form-control" value="http://www.xxxx.com/images/'+data.data+'">' +
                        '</td>' +
                        '<td> <input type="text" class="form-control" value="1"> </td>' +
                        '<td> <button class="btn btn-white"><i class="fa fa-trash"></i></button> </td>' +
                        '</tr>'
                    );
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
$('input[type=file]').change(OnChangeFunc);


//goods-goods_img
var check = function(obj){
    var trlist = $('#tab-2 tr:not(:first)'),input,image,sort;
    var ImageJson = {};
    $.each(trlist, function(i){
        input = $(this).find('input');
        image = $(input[0]).val();
        sort = $(input[1]).val();
        console.log(input);
        console.log(image);
        console.log(sort);
        ImageJson[sort] = (image.split('.com'))[1];
    })
    $('#goods_img').val(JSON.stringify(ImageJson));
    return true;
}





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
var ConfirmSubmit = function (param) {
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
        beforeSendFunc: ConfirmAjaxBeforeSend(),
        successFunc: ConfirmAjaxSuccess,
        errorFunc: ConfirmAjaxError,
    }
    getAjaxResult(config);
    return false;
}


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