/**
 * Created by Administrator on 2016/9/25.
 */

$(function(){
    $('#dowebok').fullpage({
        //    设置每一个屏幕的颜色
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        //鼠标滚到某一屏之后调用
        afterLoad:function(link,index){
            //link  是锚链接的名称，
            //index 是序号，从1开始计算
            $('.section').removeClass('current');

            //current类加给谁，谁就开始做动画
            //让动画延迟100s
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current')

            },100);

        }
    })




});