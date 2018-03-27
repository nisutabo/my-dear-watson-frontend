import React from 'react';



const SelectAccount = ({ accounts, setCurrentAccount }) => {


      return (
        <select onChange={setCurrentAccount} defaultValue='all'>
          <option value='all'>All</option>
          {accounts.map(account =>
            <option key={account.id} value={account.id}>{account.handle}</option>
          )}
        </select>
      );

}

SelectAccount.defaultProps = {
  accounts: [],
}

export default SelectAccount;
