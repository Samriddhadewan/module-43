import Chart from "./components/Chart/Chart"
import Navbar from "./components/Navbar/Navbar"
import PriceOptions from "./components/PriceOptions/PriceOptions"

const App = () => {
  return (
    <div>

      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <Chart></Chart>

    </div>
  )
}

export default App