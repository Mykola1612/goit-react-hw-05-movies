import React from 'react';

const Search = ({ handleSubmit }) => {
  const handleSubmitForm = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.inputParams.value;
    handleSubmit(value);
  };
  return (
    <form action="submit" onSubmit={handleSubmitForm}>
      <input type="text" name="inputParams" />
      <button>Search</button>
    </form>
  );
};

export default Search;
