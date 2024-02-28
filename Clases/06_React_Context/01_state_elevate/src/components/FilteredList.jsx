import PropTypes from 'prop-types';

const FilteredList = ({items, filtro}) => {
    return (
        <div className="mt-5">
        { items.map((item, i) => {

                const start = item.indexOf(filtro);
                const end = start + filtro.length; 

                return (
                    <div key={i} className="alert alert-primary">
                        {item.slice(0, start)}
                        <strong><em>{item.slice(start, end)}</em></strong>
                        {item.slice(end)}
                    </div>
                );
            })
        }
        </div>
    )
}

FilteredList.propTypes = {
    items: PropTypes.array.isRequired,
    filtro: PropTypes.string.isRequired,
};

export default FilteredList