import ReactApexChart from 'react-apexcharts'
import { Card, CardHeader } from '@mui/material'
import { chartLabels, chartSeries, chartOptions } from './ChartOptions'


type ApexChartProps = {
  chartData: ChartDataView[]
  title: string
  subheader?: string
}

const ApexChart = ({chartData, title, subheader}: ApexChartProps) => (
    <Card>
      <CardHeader title={title} subheader={subheader} />
      <ReactApexChart
        options={{labels: chartLabels(chartData), ...chartOptions}}
        series={chartSeries(chartData)}
        type="radialBar"
        height={350}
      />
    </Card>
  )

export default ApexChart
