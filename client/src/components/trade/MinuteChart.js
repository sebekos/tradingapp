import React from 'react'
import Chart from 'react-apexcharts'

const MinuteChart = ({data: {symbol, candles, empty}}) => {
      const chartData = {
            options: {
                  tooltip: {
                        enabled: false
                  },
                  chart: {
                        id: 'apexchart-minute',
                        background: 'black',
                        animations: {
                              enabled: false
                        },
                        zoom: {
                              autoScaleYaxis: true
                        }
                  },
                  title: {
                        text: `${symbol} - 2 Day 1 Minute`
                  },
                  grid: {
                        position: 'back',
                        borderColor: 'grey',
                        xaxis: {
                              lines: {
                                    show: true
                              }
                        },   
                        yaxis: {
                              lines: {
                                    show: true
                              }
                        },  
                  },
                  xaxis: {
                        labels: {
                              show: true,
                              format: 'h:mm'
                        }
                  }
            },
            series: [{
                  data: candles
            }]   
      }
      return (
            <div className='yearly-chart-container'>
                  <Chart options={chartData.options} series={chartData.series} type="candlestick" width={900} height={520} />
            </div>
      )
}

export default MinuteChart;
