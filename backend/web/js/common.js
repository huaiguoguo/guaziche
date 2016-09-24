/**
 * Created by huochai on 2016/7/8.
 */


// console.log(window.location.pathname);
// cart_ajax_urls = cart_ajax_url.split(".html").splice(0, 1);
// // if ($.inArray(cart_ajax_urls, ['/custom/cart'])) {
//
// // }


var ajax_success = function (data) {
    $("select[name='PermissionForm[child_permission]']").html(template(data));
}

var ajax_error = function (error) {
    console.log(error);
}


var ajax_url = "/rbac/ajax-get-permission.html";

var ajax_config = {
    url: ajax_url,
    data: {},
    type: "POST",
    success: ajax_success,
    error: ajax_error
}


// $("select[name='PermissionForm[child]']");
// .find("option:selected").val();


var template = function (data) {
    optoins = "<option value=''>请选择</option>";
    $.each(data.data, function (i, val) {
        optoins += "<option value='" + val.name + "'>" + val.description + "</option>";
    })
    return optoins;
}


var getAjaxResult = function (config) {
    $.ajax({
        data: config.data,
        type: config.type,
        url: config.url,
        beforeSend: config.beforeSendFunc ? config.beforeSendFunc : '',
        success: config.success,
        error: config.error
    })
    return false;
};

//去除中文字符串
var RemovalCharacters = function (selector) {
    reg = /[\u4E00-\u9FA5]/g;
    deliver_fee = selector.replace(reg, '');
    return deliver_fee;
}


$(document).on("change", ".parent_permission", function () {
    ajax_config.data = {
        csrf_backend: csrf_backend,
        name: $(this).val(),
    };
    getAjaxResult(ajax_config);
})


///以下是分配权限专用

var ztreeNode;
var ajaxGetMenuError = function (error) {
}
var ajaxGetMenuSuccess = function (data) {
    ztreeNode = data.data;
    $.fn.zTree.init($("#treeDemo"), setting, ztreeNode);
}

var getMenuData = function () {
    ajax_config.url = '/rbac/ajax-get-menu.html';
    ajax_config.success = ajaxGetMenuSuccess;
    ajax_config.error = ajaxGetMenuError;
    ajax_config.data.csrf_backend = csrf_backend;
    getAjaxResult(ajax_config);
}




var setting = {
    view: {
        selectedMulti: false
    },
    check: {
        enable: true
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        onCheck: onCheck
    }
};


var clearFlag = true;
function onCheck(e, treeId, treeNode) {
    // count();
    if (clearFlag) {
        clearCheckedOldNodes();
    }
}

function clearCheckedOldNodes() {
    
    var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
        nodes = zTree.getChangeCheckedNodes();

    for (var i = 0, l = nodes.length; i < l; i++) {
        nodes[i].checkedOld = nodes[i].checked;
    }


}


///分配权限专用结束