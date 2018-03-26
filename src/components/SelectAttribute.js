import React from 'react'


const SelectAttribute = ({ attributes, setCurrentAttribute }) => {


      return (
        <select onChange={setCurrentAttribute} defaultValue='all'>
          <option value='all'>All</option>
          {attributes.map(attribute =>
            <option key={attribute} value={attribute}>{attribute}</option>
          )}
        </select>
      );

}

SelectAttribute.defaultProps = {
  attributes: [],
  handleChange: function () {}
}

export default SelectAttribute;
