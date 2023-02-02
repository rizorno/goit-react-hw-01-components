import React from 'react';
import PropTypes from 'prop-types';
import css from './transaction-history.module.scss';

function TransactionHistory({ items = [] }) {
  let elements = items.map(element => {
    const { id, type, amount, currency } = element;

    //? Separation

    function separation(data) {
      let sP = data.split('');
      let qP = sP.filter(element => element !== ' ');
      let sS = qP.join('');
      let qS = String(sS);
      let indexP = qS.length - 1;
      let wP = Math.floor(indexP / 3);
      for (let i = 1; i <= wP; i += 1) {
        indexP = indexP - 1 - i;
        qP.splice(indexP, 0, ', ');
        let rP = qP.join('');
        data = rP;
      }
      return data;
    }

    return (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{separation(currency)}</td>
      </tr>
    );
  });

  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
