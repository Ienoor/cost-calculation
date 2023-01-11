import CostDate from './CostDate'
import './CostItem.css'

function CostItem(props) {
  const { data, description, price } = props

  return (
    <div className="cost-item">
      <CostDate date={data} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${price}</div>
      </div>
    </div>
  )
}

export default CostItem
