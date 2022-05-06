export const chartLabels = (chartData: ChartDataView[]) => chartData.map(i => i.label)

export const chartSeries = (chartData: ChartDataView[]) => chartData.map(i => i.value)

export const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            }
        }
      }
    },
}
