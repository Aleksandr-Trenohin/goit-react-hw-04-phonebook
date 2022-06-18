import { PropTypes } from 'prop-types';

import s from './ContactList.module.css';

const ContactList = ({ contacts, filter, delContact }) => {
  return (
    <>
      <ul>
        {contacts.map(
          ({ id, name, number }) =>
            name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 && (
              <li key={id} className={s.list}>
                <span className={s.name}>{name}</span>: {number}
                <button
                  type="button"
                  onClick={() => delContact(id)}
                  title={name}
                  className={s.btn}
                >
                  Delete
                </button>
              </li>
            )
        )}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  delContact: PropTypes.func.isRequired,
};

export default ContactList;
