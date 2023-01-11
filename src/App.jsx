import CostItem from './commponents/CostItem'
import Costs from './commponents/Costs'

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Холодильник',
      price: 999.99,
    },
    {
      date: new Date(2021, 11, 22),
      description: 'MacBook',
      price: 1299.99,
    },
    {
      date: new Date(2021, 1, 17),
      description: 'Джинсы',
      price: 49.99,
    },
  ]

  return (
    <div>
      <h1>Начнём изучение React!</h1>
      <Costs
        props={costs}
      />
    </div>
  )
}

export default App
