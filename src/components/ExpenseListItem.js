import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import localization from 'moment/locale/fr'

const ExpenseListItem = ({ description, amount, createdAt, id }) => {


  return (
    <div>
      <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
      <p>{amount}€ - {moment(createdAt).locale('fr', localization).format('DD MMMM GGGG, LTS')}</p>
    </div>
  )
}

export default ExpenseListItem