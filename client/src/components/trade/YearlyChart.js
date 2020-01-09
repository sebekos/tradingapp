import React from 'react'
import Chart from 'react-apexcharts'

const YearlyChart = ({data}) => {
      const chartData = {
            options: {
            chart: {
                  id: 'apexchart-example'
            },
            xaxis: {
                  categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            }
            },
            series: [{
                  name: 'series-1',
                  data: [30, 40, 45, 50, 49, 60, 70, 91]
            }]   
      }
      return (
            <div className='yearly-chart-container'>
                  <Chart options={chartData.options} series={chartData.series} type="bar" width={500} height={320} />
            </div>
      )
}

export default YearlyChart;
