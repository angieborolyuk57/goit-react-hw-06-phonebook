import React, { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from "../../store/slice/filterSlice";
import { selectFilter } from "../../store/selectors/selectors";
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filterNameId = useId();

  const onChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <div className={css.filter}>
        <label htmlFor={filterNameId}>Find contacts by name</label>
        <input
          type="text"
          value={filter}
          name="name"
          placeholder="Enter name"
          id={filterNameId}
          onChange={onChangeFilter}
          required
        />
      </div>
    </div>
  );
};

export default Filter;