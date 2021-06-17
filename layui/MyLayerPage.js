function showPage(total, curr, limit) {
    if (!limit) {
        limit = 10;
    }
    var laypage = layui.laypage;
    laypage.render({
        elem: "div_page" //注意，这里的 test1 是 ID，不用加 # 号
        , count: total //数据总数，从服务端得到
        , curr: curr
        , limit: limit
        , theme: '#1E9FFF'
        , layout: ['count', 'prev', 'page', 'next' , 'refresh', 'skip']
        , jump: function (obj, first) {
            //obj包含了当前分页的所有参数，比如：
            console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
            console.log(obj.limit); //得到每页显示的条数
            //首次不执行
            if (!first) {
                $("#Index").val(obj.curr);
                $("#SelectBtn").click();
            }
        }
    });
}