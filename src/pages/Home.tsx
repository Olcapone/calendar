import { subjects, windData, chartColors } from '_mock/dataforChar'
import { Chart as ReactWindRoseChart } from '@eunchurn/windrose-chart'

const Home = () => (
  <>
    <ReactWindRoseChart
      chartData={windData}
      angles={windData.map((d) => d.coreCompetency)}
      columns={subjects}
      columnsColor={chartColors}
      legendGap={10}
      dataKeys={["survey"]}
    />
  </>
  
)

export default Home
