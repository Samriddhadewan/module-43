import Chart from "./components/Chart/Chart"
import Navbar from "./components/Navbar/Navbar"
import PriceOptions from "./components/PriceOptions/PriceOptions"
import Headroom from 'react-headroom';


const App = () => {
  return (
    <div>
      <Headroom>
        <header style={{ background: '#6200ea', color: 'white', padding: '10px' }}>
          <h1>Sticky Header</h1>
        </header>
      </Headroom>
      <main style={{ height: '200px', padding: '20px' }}>
        <p>Scroll down to see the header hide, and scroll up to see it reappear!</p>
      </main>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <Chart></Chart>

    </div>
  )
}

export default App