import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');

  console.log('Los usuarios buscan Metas o tareas de ' + searchValue);

  return (
    <input
      placeholder=" Tomar Agua "
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
