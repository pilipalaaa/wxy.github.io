function getQueryString(url, name) {
    var str = url.substring(url.indexOf('?')+1, url.length);
    var strs = new Array();
    strs = str.split("&");
    name +="=";
    for (var i = 0; i < strs.length; i++)
    {
        if (strs[i].length >= name.length)
        {
            if (strs[i].substring(0, name.length).toLowerCase() == name.toLowerCase())
            {
                return strs[i].substring(name.length, strs[i].length);
            }
        }
    }
    return null;
}
var sideAndFootIsShow = true;
function showSideAndFoot() {
    sideAndFootIsShow = true;
    $(".layui-side").show();
    $(".layui-body").css("left", "200px");
    $(".layui-footer").css("left", "200px");
}
function hideSideAndFoot() {
    sideAndFootIsShow = false;
    $(".layui-side").hide();
    $(".layui-body").css("left", 0);
    $(".layui-footer").css("left", 0);
}

function gotoPage(url) {
    $("#ifrMain").attr("src", url);
}

//栏目
$('#Column .layui-nav-child a').click(function () {
    var href = $(this).attr('href');
    if (href.length == 0)
        return false
    if (!sideAndFootIsShow) {
        showSideAndFoot();
    }
    $('#ReLoad').attr("url", href.substring(0, href.indexOf("?")));
    $('#ReLoad').attr("val", getQueryString(href, "left"));
    $(".dtree  .btn-show").css('color', '');

    var $li = $(this).parent().parent().parent();
    $li.addClass("layui-this");
});



$('.dtree .btn-show').live("click", function () {
    var val = $("#ReLoad").attr("val");
    if (val == 1) {
        $(".dtree  .btn-show").css('color', '');
        $(this).css('color', '#ff7500');
        $("#ifrMain").attr("src", $("#ReLoad").attr('url') + "?index=1&ID=" + $(this).attr("val"));
    } else {
        $(".dtree  .btn-show").css('color', '');
    }
});
$('.dtree .btn-show1').live("click", function () {
    var val = $("#ReLoad").attr("val");
    if (val == 1) {
        $(".dtree  .btn-show").css('color', '');
        $("#ifrMain").attr("src", $("#ReLoad").attr('url') + "?index=1&ID=" + $(this).attr("val"));
    }
});
