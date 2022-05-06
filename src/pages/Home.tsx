import ApexChart from 'components/chart/Chart'
import { chartData } from '_mock/dataforChar'

const Home = () => (
  <ApexChart chartData={chartData} title="Summary"/>
)

export default Home
