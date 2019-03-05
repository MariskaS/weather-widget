import React from 'react';

const Form = (props) => (
    <form onSubmit={props.weatherMethod}>
        <input className="w-input"
               type="text"
               name="city"
               placeholder="Please type the city..."/>
        <button className="w-btn">Get the weather</button>
    </form>
)

export default Form;