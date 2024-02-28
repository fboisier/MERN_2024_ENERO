import FilteredList from './FilteredList'
import Input from './Input'
import PropTypes from 'prop-types';
import { useState } from "react"


const ElevacionEstado = ({ items }) => {

    const [filtro, setFiltro] = useState('')

    return (
        <>
            <Input filtro={filtro} setFiltro={setFiltro}/>
            <FilteredList filtro={filtro} items={
                items.filter((item)=> item.indexOf(filtro) > -1)
            } />
        </>
    )
}


ElevacionEstado.propTypes = {
    items: PropTypes.array.isRequired,
};

export default ElevacionEstado