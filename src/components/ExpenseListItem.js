import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import localization from 'moment/locale/fr'
import numeral from 'numeral'

// load a locale
numeral.register('locale', 'fr', {
  delimiters: {
    thousands: ' ',
    decimal: ','
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal: function (number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: '€'
  }
});

// switch between locales
numeral.locale('fr');


const ExpenseListItem = ({ description, amount, createdAt, id }) => {

  return (
    <div>
      <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
      <p>
        {numeral(amount / 100).format('$0,0.00')}
        -
        {moment(createdAt).locale('fr', localization).format('DD MMMM GGGG')}</p>
    </div>
  )
}

export default ExpenseListItem