import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { transactions } = useContext(GlobalContext);

  // Get sign
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <div>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transactions.text}{' '}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button className="delete-btn">x</button>
      </li>
    </div>
  );
};
