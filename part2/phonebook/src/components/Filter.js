import React from 'react';

const Filter = ({ newFilter, handleFilterChange }) => {
  return (
    <form>
      <div>
        filter shown with a <input value={newFilter} onChange={handleFilterChange} />
      </div>
    </form>
  );
};

export default Filter;
