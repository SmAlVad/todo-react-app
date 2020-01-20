import React, {useContext} from "react";
import Context from "../context";
import PropTypes from 'prop-types';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '3rem'
    },
    strong: {
        margin: '0 5px'
    },
    input: {
        margin: '0'
    },
    span: {
        display: 'flex',
        alignItems: 'center'
    }
};

function TodoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context);
    const classes = [];

    if (todo.completed) {
        classes.push('done');
    }

    return (
        <li style={styles.li}>
            <span style={styles.span} className={classes.join(' ')}>
                <input type="checkbox"
                       checked={todo.completed}
                       style={styles.input}
                       onChange={() => onChange(todo.id)}
                />
                <strong style={styles.strong}>{index + 1}</strong>
                {todo.title}
            </span>
            <button className="rm" onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    );
}

TodoItem.protoTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
};

export default TodoItem;