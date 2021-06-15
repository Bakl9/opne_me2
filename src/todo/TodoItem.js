import React from 'react'
import PropTypes from 'prop-types'


const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4 px ',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
};

function Todoitem({ todo,i }) {
return (
    <li style={styles.li}>
        <span>

            
            <input type="checkbox" style={styles.input} />
            <strong>{i + 1}</strong>
            {todo.title}
        </span>
        <button className='rm'>&times;</button>
     </li>



)
} 

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default Todoitem 