import { ChangeEvent } from 'react';
import { projectObject } from '../../@types/project';
import { appStore } from '../../stores/app-store';
import './style.scss';

const Filter = () => {
  const projectsList = appStore.projectsList;
  const allProjectsAmount  = projectsList.length;
  const commercialAmount = projectsList.filter((el: projectObject) => el.type === 3).length;   
  const uncommercialAmount = allProjectsAmount - commercialAmount;

  return (
    <div className="filter">
      <select
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          appStore.order = parseInt(e.target.value);
        }}
        name="filter"
        id="filter"
      >
        <option value="1">All projects - {allProjectsAmount}</option>
        <option value="2">Commercial - {commercialAmount}</option>
        <option value="3">For fun - {uncommercialAmount}</option>
      </select>
    </div>
  );
};

export default Filter;
