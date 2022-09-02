import { appStore } from '../../stores/app-store';

const Filter = () => {
  return (
    <div className="filter" style={{ width: '100%', display: 'flex' }}>
      <label style={{ flex: 5, marginTop: '1.5%' }}>
        Here are my projects ({appStore.projectsList.length} total)
      </label>

      <select
        onChange={(event) => {
          appStore.order = parseInt(event.target.value);
        }}
        name="filter"
        id="filter"
        style={{
          flex: 1,
          minWidth: '30%',
          height: '20px',
          backgroundColor: '#494161',
          borderRadius: '5px',
          border: '0px',
          color: 'white',
          marginTop: '1.5%',
        }}
      >
        <option value="1">All</option>
        <option value="2">Commercial</option>
        <option value="3">For fun</option>
      </select>
    </div>
  );
};

export default Filter;
