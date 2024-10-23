import css from './Filter.module.css';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { setFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/filterSelector';
import { setFilter } from '../../redux/filter/filterSlice';
// import { getFilter } from '../../redux/selectors';

export const Filter = () => {// setFilter
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);//getFilter
    const handleFilterChange = e => {
        dispatch(setFilter(e.target.value));
    }
    return(
        <div className={css.container}>
            <p>Find Name</p>
            <input
                type="text"
                name="filter"
                placeholder="Search by name"
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    )
}