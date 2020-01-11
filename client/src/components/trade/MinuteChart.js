import React from 'react'
import Chart from 'react-apexcharts'

const MinuteChart = ({data: {symbol, candles, empty}}) => {
      const chartData = {
            options: {
                  chart: {
                        id: 'apexchart-minute',
                        background: 'black',
                        animations: {
                              enabled: false
                        }
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
