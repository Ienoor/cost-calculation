import './CostDate.css'

export default function CostDate(props) {
  const date = props.date

  return (
    <div className="cost-date">
      <div className="cost-date__month">
        {date.toLocaleString('ru', { month: 'long' })}
      </div>
      <div className="cost-date__year">
        {date.toLocaleString('ru', { year: 'numeric' })}
      </div>
      <div className="cost-date__day">
        {date.toLocaleString('ru', { day: 'numeric' })}
      </div>
    </div>
  )
}
