/**
 * Created by guo on 2016/5/26.
 */



var getChecked = function(){
        alert();
    return false;
}



var check = function(obj){
    if($('#packages-goods_id').find('input[type=checkbox]').length<=0){
        $('.field-packages-goods_id').addClass('has-error');
        $('.field-packages-goods_id .has-error .help-block').text('套餐包含的产品不能为空');
        return false;
    }
    return true;
}



$('#wancheng').click(function(){
        console.log($(this).is(':checked'));
    $(".ibox-content input[type=checkbox]").each(function(){//each()方法遍历所有的复选框

        if($(this).is(':checked')){//这里就可以判断当前是否被选择了
            var goods_id = $(this).data('id');
            var goods_name = $(this).data('goods_name');
            $('#packages-goods_id').append(template(goods_id, goods_name));
            // $(this).iCheck('uncheck');//如果已选择，可以用iCheck取消选择
        }
    })
})




var DeleteDiv = function (thi) {
    $(thi).next().remove();
    $(thi).removeClass('checked');
    $(thi).remove();
}




var template = function(id,name){

   var temp =   '<div class="icheckbox_square-green checked" style="position: relative;" onclick="DeleteDiv(this)">'+
                    '<input type="checkbox" name="Packages[goods_id][]" checked class="i-checks" value="'+id+'" style="position: absolute; opacity: 0;">'+
                    // '<ins class="" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);">' +
                    '</ins>'+
                '</div><span>'+name+'</span>';
    return temp;
}


$('.icheckbox_square-green').click(function () {
    $(this).next().remove();
    $(this).removeClass('checked');
    $(this).remove();
})



// $("#packages-goods_ids .icheckbox_square-green input[type=checkbox]").on("click", function(){
//     console.log($(this));
// })







