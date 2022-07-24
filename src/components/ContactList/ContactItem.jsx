import PropTypes from 'prop-types';

export default function ContactItem({ name, number, deleteContact, id }) {
  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
