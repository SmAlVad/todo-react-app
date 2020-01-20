import React, {useState} from "react";
import PropTypes from 'prop-types';

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    return {
        bind: {
            value,
            onChange: e => setValue(e.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({onCreate}) {
    const input = useInputValue('');

    function submitHandler(e) {
        e.preventDefault();

        if (input.value().trim()) {
            onCreate(input.value());
            input.clear();
        }
    }
    
    return (
        <form action="" onSubmit={submitHandler}>
            <input type="text" {...input.bind}/>
            <input className="ml-1" type="submit" value="Add Todo"/>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
};

export default AddTodo;