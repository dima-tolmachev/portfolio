import { ChangeEvent } from 'react';
import { appStore } from '../../stores/app-store';
import './style.scss';

const Filter = () => {
  return (
    <div className="filter">
      <h2>Here are some of my projects</h2>
      
      <select
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          appStore.order = parseInt(e.target.value);
        }}
        name="filter"
        id="filter"
      >
        <option value="1">All</option>
        <option value="2">Commercial</option>
        <option value="3">For fun</option>
      </select>
    </div>
  );
};

export default Filter;
