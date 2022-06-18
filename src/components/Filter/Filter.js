import { PropTypes } from 'prop-types';

import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <label htmlFor="filter" className={s.label}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      ></input>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
