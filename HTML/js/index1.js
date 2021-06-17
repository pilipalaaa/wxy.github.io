/*var myChart = echarts.init(document.getElementById('left_top'));
option = {
    title: {
        text: '光伏发电/储能（日）',
        textStyle:{
            color: '#00FFFF'
        }
    },
    tooltip: {
        trigger: 'axis',
        hideDelay: '300',
        formatter: function (params) {
            var htmlStr = '';
            htmlStr += '<div><span style="color:#fff;">' + params[0].name + '</span><br/> ';
            for(var i=0;i<params.length;i++){
                //前面的原点和他的颜色
                htmlStr += '<span style="width: 8px;height: 8px;display:inline-block;border-radius: 50%;background-color:'+params[i].color+'"></span><span style="color:#fff;">' + params[i].seriesName + ':</span>'+
                    '<span style="color:#fff;">' + params[i].value + '&nbsp;KWh</span><br/>';
            }
            htmlStr += '</div>';
            return  htmlStr
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00',
                '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
                '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
        axisLabel: {
            margin: 2,
            interval: 1,
            rotate: 40,
            color: '#00FFFF',
        },
        axisLine: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            margin: 2,
            interval: 0,
            rotate: 40,
            color: '#00FFFF',
            /!*formatter: function (value, index) {
                if (value >= 10000 && value < 10000000) {
                    value = value / 10000 + "万";
                } else if (value >= 10000000) {
                    value = value / 10000000 + "千万";
                }
                return value;
            },*!/
        },
        axisLine: {
            show: false,
        },
    },
    grid: {
        left: 35
    },
    series: [{
        data: [0, 0, 0, 0, 0, 1.6, 8.7, 20, 32.2, 52.3, 60.2, 66.6,
                70.4, 69.3, 55.1, 48.6, 29.3, 12.8, 2.6, 0.1, 0, 0,
                0, 0],
        type: 'line',
        name: '日发电量',
        color: '#75D8E9',
        areaStyle: {}
    }]
};
myChart.setOption(option);*/

$.ajax({
    type : "post",
    async : true,
    url :'http://localhost:8080/SSM_war_exploded/echarts2',
    data : {},
    dataType : "json",
    success : function(result) {
        if(result){
            var time=[];
            var data=[];
            for(var i=0; i < result.length; i++){
                time.push(result[i].time);
            }
            for(var i=0; i < result.length; i++){
                data.push(result[i].data);
            }
            var myChart = echarts.init(document.getElementById('left_top'));
            option = {
                title: {
                    text: '光伏发电/储能（日）',
                    textStyle:{
                        color: '#00FFFF'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    hideDelay: '300',
                    formatter: function (params) {
                        var htmlStr = '';
                        htmlStr += '<div><span style="color:#fff;">' + params[0].name + '</span><br/> ';
                        for(var i=0;i<params.length;i++){
                            //前面的原点和他的颜色
                            htmlStr += '<span style="width: 8px;height: 8px;display:inline-block;border-radius: 50%;background-color:'+params[i].color+'"></span><span style="color:#fff;">' + params[i].seriesName + ':</span>'+
                                '<span style="color:#fff;">' + params[i].value + '&nbsp;KWh</span><br/>';
                        }
                        htmlStr += '</div>';
                        return  htmlStr
                    },
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: time,
                    axisLabel: {
                        margin: 2,
                        interval: 1,
                        rotate: 40,
                        color: '#00FFFF',
                    },
                    axisLine: {
                        show: false,
                    },
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        margin: 2,
                        interval: 0,
                        rotate: 40,
                        color: '#00FFFF',
                    },
                    axisLine: {
                    show: false,
                    },
                },
                grid: {
                    left: 35
                },
                series: [{
                    data: data,
                    type: 'line',
                    name: '日发电量',
                    color: '#75D8E9',
                    areaStyle: {}
                }]
            };
            myChart.setOption(option);
        }
    }
})

var myChart = echarts.init(document.getElementById('left_bottom'));
option = {
    title: {
        text: '分项能耗',
        textStyle:{
            color: '#00FFFF'
        }
    },
    tooltip: {
        trigger: 'item',
        /*formatter: '{a} <br/>{b} : {c} ({d}%)',*/
        formatter: '{b} <br/>{a} : {d}%',
    },
    color : [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo'],
    series: [
        {
            name: '分项能耗',
            type: 'pie',
            radius: [10, 50],
            x: 'center',
            y: 'center',
            roseType: 'area',
            data: [
                {value: 30, name: '冷链'},
                {value: 5, name: '空调'},
                {value: 15, name: '加工设备'},
                {value: 25, name: '升降设备'},
                {value: 30, name: '照明'},
                {value: 5, name: '其他'},
            ],
        }
    ]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('middle'));
var option = {
    /*tooltip: {},*/
    //配置属性
    series: [{
        name: 'china_map',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
            normal: {
                show: false, //省份名称
                textStyle:{
                    color:'white'
                }
            },
            emphasis: {
                show: true,
                textStyle:{color:"#800080"}
            }
        },
        itemStyle: {
            normal: {
                borderWidth: .5,
                /*borderColor: '#FFFFFF',
                areaColor:"#FFFFFF"*/
                borderColor: '#FFFFFF',
                areaColor: '#092DFF'
            },
            emphasis: {
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor:"#ffdead"
            }
        },
        data:[
            {name:'上海'},
            {name:'甘肃'},
            {name:'云南'},
            {name:'内蒙古'},
            {name:'北京'},
            {name:'台湾'},
            {name:'吉林'},
            {name:'四川'},
            {name:'天津'},
            {name:'宁夏'},
            {name:'安徽'},
            {name:'山东'},
            {name:'山西'},
            {name:'广东'},
            {name:'广西'},
            {name:'新疆'},
            {name:'江苏'},
            {name:'江西'},
            {name:'河北'},
            {name:'河南'},
            {name:'浙江'},
            {name:'海南'},
            {name:'湖北'},
            {name:'湖南'},
            {name:'福建'},
            {name:'贵州'},
            {name:'辽宁'},
            {name:'重庆'},
            {name:'陕西'},
            {name:'青海'},
            {name:'黑龙江'}
        ]
    }]
};
myChart.setOption(option);

/*var myChart = echarts.init(document.getElementById('right_top'));
option = {
    title: {
        text: '光伏发电/储能（月）',
        textStyle:{
            color: '#00FFFF'
        }
    },
    tooltip: {
        trigger: 'axis',
        hideDelay: '300',
        formatter: function (params) {
            var htmlStr = '';
            htmlStr += '<div><span style="color:#fff;">' + params[0].name + '</span><br/> ';
            for(var i=0;i<params.length;i++){
                //前面的原点和他的颜色
                htmlStr += '<span style="width: 8px;height: 8px;display:inline-block;border-radius: 50%;background-color:'+params[i].color+'"></span><span style="color:#fff;">' + params[i].seriesName + ':</span>'+
                    '<span style="color:#fff;">' + params[i].value + '&nbsp;KWh</span><br/>';
            }
            htmlStr += '</div>';
            return  htmlStr
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['2020-01-01', '2020-01-02', '2020-01-03', '2020-01-04', '2020-01-05', '2020-01-06', '2020-01-07',
            '2020-01-08','2020-01-09', '2020-01-10', '2020-01-11', '2020-01-12', '2020-01-13', '2020-01-14',
            '2020-01-15','2020-01-16', '2020-01-17', '2020-01-18', '2020-01-19', '2020-01-20', '2020-01-21',
            '2020-01-22','2020-01-23', '2020-01-24', '2020-01-25', '2020-01-26', '2020-01-27', '2020-01-28',
            '2020-01-29','2020-01-30','2020-01-31'],
        axisLabel: {
            margin: 2,
            interval: 1,
            rotate: 45,
            color: '#00FFFF',
        },
        axisLine: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            margin: 2,
            interval: 0,
            rotate: 40,
            color: '#00FFFF',
        },
        axisLine: {
            show: false,
        },
    },
    series: [{
        data: [5257.5, 3707.3, 9986.9, 2133.1, 4321.5, 5983.9, 9093,
            6614, 5572, 13198.5, 13033.1, 17886.6, 17307.8, 14890.3,
            14117.5, 11381.5, 3680.8, 7089.6, 11617.9, 15917.7, 10034,
            5075.3, 3222.3, 3532.9, 1034, 0, 0, 11203.3, 7410.7, 0],
        type: 'line',
        color: '#75D8E9',
        name: '月发电量',
        smooth: true
    }]
};
myChart.setOption(option);*/

$.ajax({
    type : "post",
    async : true,
    url :'http://localhost:8080/SSM_war_exploded/echarts1',
    data : {},
    dataType : "json",
    success : function(result) {
        if(result){
            var date=[];
            var data=[];
            for(var i=0; i < result.length; i++){
                date.push(result[i].date);
            }
            for(var i=0; i < result.length; i++){
                data.push(result[i].data);
            }
            var myChart = echarts.init(document.getElementById('right_top'));
            option = {
                title: {
                    text: '光伏发电/储能（月）',
                    textStyle:{
                        color: '#00FFFF'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    hideDelay: '300',
                    formatter: function (params) {
                        var htmlStr = '';
                        htmlStr += '<div><span style="color:#fff;">' + params[0].name + '</span><br/> ';
                        for(var i=0;i<params.length;i++){
                            //前面的原点和他的颜色
                            htmlStr += '<span style="width: 8px;height: 8px;display:inline-block;border-radius: 50%;background-color:'+params[i].color+'"></span><span style="color:#fff;">' + params[i].seriesName + ':</span>'+
                                '<span style="color:#fff;">' + params[i].value + '&nbsp;KWh</span><br/>';
                        }
                        htmlStr += '</div>';
                        return  htmlStr
                    },
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: date,
                    axisLabel: {
                        margin: 2,
                        interval: 1,
                        rotate: 45,
                        color: '#00FFFF',
                    },
                    axisLine: {
                        show: false,
                    },
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        margin: 2,
                        interval: 0,
                        rotate: 40,
                        color: '#00FFFF',
                    },
                    axisLine: {
                        show: false,
                    },
                },
                series: [{
                    name: '月发电量',
                    data: data,
                    type: 'line',
                    color: '#75D8E9',
                    smooth: true
                }]
            };
            myChart.setOption(option);
        }
    }
})

var myChart = echarts.init(document.getElementById('right_bottom'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: '设备情况',
        textStyle:{
            color: '#00FFFF'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: '80%',
        y: '20%',
        textStyle:{
            fontSize: 12,//字体大小
            color : [ 'red', 'orange', 'yellow', 'blue'],
        },
        data:['优秀','正常','故障','停用'],
    },
    color : [ 'red', 'orange', 'yellow', 'blue'],
    series: [
        {
            name:'能耗状态',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold',
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'优秀'},
                {value:310, name:'正常'},
                {value:234, name:'故障'},
                {value:135, name:'停用'},
            ]
        }
    ]
};
myChart.setOption(option);