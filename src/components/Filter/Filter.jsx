import PropTypes from 'prop-types';

export default function Filter({ filter, handlerFilter }){
  return (
    <label>
      Find contacts by name or phone-number
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handlerFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handlerFilter: PropTypes.func.isRequired,
};
