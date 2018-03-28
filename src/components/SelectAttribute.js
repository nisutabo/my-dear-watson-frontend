import React from 'react'


const SelectAttribute = ({ attributes, setCurrentAttribute }) => {


      return (
        <select onChange={setCurrentAttribute} defaultValue='all'>
          <option value='all'>All</option>
          {['personality', 'value', 'need', 'consumer_preference'].map(attribute =>
            <option key={attribute} value={attribute}>{attribute}</option>
          )}
        </select>
      );

}

SelectAttribute.defaultProps = {
  attributes: []
}

export default SelectAttribute;
