import CostItem from './CostItem'
import './Costs.css'

export default function Costs(props) {
  return (
    <div className="costs">
      <CostItem props />
      <CostItem props />
      <CostItem props />
    </div>
  )
}
