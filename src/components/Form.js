import React, {useState, useEffect} from 'react'
import axios from "axios";
import * as yup from "yup";
import schema from '../validation/Schema';
import './Form.css';

const initialValues = {
    name: '',
    text: '',
    pizzaSize: '',
    sausage: false,
    bacon: false,
    ham: false,
    cheese: false,
    olives: false,
    mushrooms: false,
    bellpepper: false
}

const initialErrors = {
    name: '',
    text: '',
    pizzaSize: ''
}

export  const Form = () => {

    const [orders, setOrders] = useState([])
    const [form, setForm] = useState(initialValues)
    const [formErrors, setFormErrors] = useState(initialErrors)
    const [disabled, setDisabled] = useState(true)
    
        const formSubmit = () => {
            const newPizza = {
                name: form.name.trim(),
                text:form.text.trim(),
                pizzaSize: form.pizzaSize,
                toppings: ['sausage', 'bacon', 'ham','cheese','olives','mushrooms','bellpepper'].filter(item => form[item])
            }
            postNewOrder(newPizza)
        }

    const postNewOrder = newPizza => {
        axios.post('https://reqres.in/api/users', newPizza)
        .then(res => {
            setOrders([res.data, ...orders])
            setForm(initialValues)
        })
    }

    const inputChange = (name, value) => {
        yup.reach(schema,name)
        .validate(value)
        .then(() => {
            setFormErrors({
                ...formErrors,[name]: ''
            })
        })
        .catch((err) => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0],
            })
          })

        setForm({...form, [name]: value})
    }

    
    useEffect(() => {
        schema.isValid(form).then((valid) => {
          setDisabled(!valid);
        });
      }, [form]);

    const onSubmit = e => {
        e.preventDefault()
        formSubmit()
    }

    const onChange = e => {
        const {name, value, type, checked} = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        inputChange(name, valueToUse)
    }
    
    return (
        <div className = 'box'>
            <form onSubmit={onSubmit}>

            <div>
                <div>{formErrors.name}</div>
                <div>{formErrors.pizzaSize}</div>
            </div>

            <div className = 'info'>
                <label>
                Name:
                <input 
                value={form.name}
                onChange={onChange}
                name='name'
                type='text'
                />
            </label>
            </div>
            
            <div className = 'dropdown'>
            <label>
                Pizza Size:
                <select id='size' onChange={onChange} value={form.pizzaSize} name='pizzaSize'>
                    <option value=''>Select a size</option>
                    <option value='large'>Large</option>
                    <option value='medium'>Medium</option>
                    <option value='small'>Small</option>
                </select>
            </label>
            </div>

            <div className = 'checkbox'>
            <label>
            Sausage
                <input
                    type="checkbox"
                    name="sausage"
                    checked={form.sausage}
                    onChange={onChange}
                />
            </label>
            </div>

            <div className = 'checkbox'>
            <label>
            Bacon
                <input
                    type="checkbox"
                    name="bacon"
                    checked={form.bacon}
                    onChange={onChange}
                />
            </label>
            </div>

            <div className = 'checkbox'>
            <label>
                Ham
                <input
                    type="checkbox"
                    name="ham"
                    checked={form.ham}
                    onChange={onChange}
                />
            </label>
            </div>

            <div className = 'checkbox'>
            <label>
                Cheese
                <input
                    type="checkbox"
                    name="cheese"
                    checked={form.cheese}
                    onChange={onChange}
                />
            </label>
            </div>

            <div className = 'checkbox'>
            <label>
                Olives
                <input
                    type="checkbox"
                    name="olives"
                    checked={form.olives}
                    onChange={onChange}
                />
            </label>
            </div>

            <div className = 'checkbox'>
            <label>
                Mushrooms
                <input
                    type="checkbox"
                    name="mushrooms"
                    checked={form.mushrooms}
                    onChange={onChange}
                />
            </label>
            </div>

            <div className = 'checkbox'>
            <label>
                Bellpepper
                <input
                    type="checkbox"
                    name="bellpepper"
                    checked={form.bellpepper}
                    onChange={onChange}
                />
            </label>
            </div>

            <div className = 'info'>
            <label>
                Special Instructions:
                <input 
                value={form.text}
                onChange={onChange}
                name='text'
                type='text'
                />
            </label>
            </div>

            <button id='submit-btn' disabled={disabled}>Click To Order</button>
            </form>

            <div>
                {orders.map(item => 
                 <div key={item.id}>
                    <h1>Name: {item.name}</h1>
                    <p>Special Instructions: {item.text}</p>
                    <p>Size: {item.pizzaSize}</p>
                    <p>Toppings: {item.toppings}</p>
                    <p>Order Date: {item.createdAt}</p>
                 </div>)}
            </div>
        </div>
    )
};

export default Form;
