import React from 'react';



const Select = ({ accounts, setCurrentAccount }) => {


      return (
        <select onChange={setCurrentAccount} defaultValue='all'>
          <option value='all'>All</option>
          {accounts.map(account =>
            <option key={account.id} value={account.id}>{account.handle}</option>
          )}
        </select>
      );

}

Select.defaultProps = {
  accounts: [],
  handleChange: function () {}
}

export default Select;
