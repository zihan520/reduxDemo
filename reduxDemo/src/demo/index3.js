import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class EchartsTest extends Component {
    componentDidMount() {
        let category = ['50-100', '100-200', '200-500', '500-1000', '1000-2000', '2000-5000', '500以上'];
        let barData = [3100, 2142, 1218, 581, 431, 383, 163]
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表

        // var weatherIcons = {
        //     'Sunny': ROOT_PATH + '/data/asset/img/weather/sunny_128.png',
        //     'Cloudy': ROOT_PATH + '/data/asset/img/weather/cloudy_128.png',
        //     'Showers': ROOT_PATH + '/data/asset/img/weather/showers_128.png'
        // };

        var seriesLabel = {
            normal: {
                show: true,
                textBorderColor: '#333',
                textBorderWidth: 2
            }
        }

        let option = {
            title: {
                text: 'Weather Statistics'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['City Alpha', 'City Beta', 'City Gamma']
            },
            grid: {
                left: 100
            },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'value',
                name: 'Days',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            yAxis: {
                type: 'category',
                inverse: true,
                data: category,
                axisLabel: {
                    formatter: function (value,index) {
                        if(value === "500-1000"){
                            return  `${value}\n{a|(当前最多)}`;
                        }
                        return  value;
                    },
                    margin: 20,
                    rich: {
                        a:{
                            color:"red"
                        },
                        b:{
                            color:"blue"
                        }
                    }
                }
            },
            series: [
                {
                    name: 'City Alpha',
                    type: 'bar',
                    data: [165, 170, 30],
                    label: seriesLabel,
                    markPoint: {
                        symbolSize: 1,
                        symbolOffset: [0, '50%'],
                        label: {
                            formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                            backgroundColor: 'rgb(242,242,242)',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            padding: [4, 10],
                            lineHeight: 26,
                            // shadowBlur: 5,
                            // shadowColor: '#000',
                            // shadowOffsetX: 0,
                            // shadowOffsetY: 1,
                            position: 'right',
                            distance: 20,
                            rich: {
                                a: {
                                    align: 'center',
                                    color: '#fff',
                                    fontSize: 18,
                                    textShadowBlur: 2,
                                    textShadowColor: '#000',
                                    textShadowOffsetX: 0,
                                    textShadowOffsetY: 1,
                                    textBorderColor: '#333',
                                    textBorderWidth: 2
                                },
                                b: {
                                    color: '#333'
                                },
                                c: {
                                    color: '#ff8811',
                                    textBorderColor: '#000',
                                    textBorderWidth: 1,
                                    fontSize: 22
                                }
                            }
                        },
                        data: [
                            {type: 'max', name: 'max days: '},
                            {type: 'min', name: 'min days: '}
                        ]
                    }
                },
                {
                    name: 'City Beta',
                    type: 'bar',
                    label: seriesLabel,
                    data: [150, 105, 110]
                },
                {
                    name: 'City Gamma',
                    type: 'bar',
                    label: seriesLabel,
                    data: [220, 82, 63]
                }
            ]
        };

        myChart.setOption(option);
    }
    render() {
        return (
            <div id="main" style={{ width: 300, height: 400 }}></div>
        );
    }
}

export default EchartsTest;