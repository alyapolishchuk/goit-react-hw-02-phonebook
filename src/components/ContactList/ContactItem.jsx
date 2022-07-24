import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export default function ContactItem({ name, number, onDelete, id }) {
  return (
    <li>
      <span className={css.names}>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
