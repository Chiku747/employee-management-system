import React, { useState,useReducer } from 'react'
import './Signup.css'


const reducer = (state,action) =>{
    switch(action.type){
        case "HANDLE_NAME":
        return {...state,
                name: action.payload
         };
        case "HANDLE_EMAIL":
            return {
                ...state,
                email: action.payload
            };
        case "HANDLE_PASSWORD":
            return {
                ...state,
                password: action.payload
            };
        case "CLEAR_INPUT":
            return{
                name:"",
                email:"",
                password:""
            }
        default:
            return state;
    }   
}

const Signup = () => {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password,setPassword] = useState('');
    const initialState = {
        name:"",
        email:"",
        password:""
    }

    const [ state, dispatch ] = useReducer(reducer, initialState)



    return (
        <>
            <div className="main">
                <h2>New Employee Signup</h2>
                <form 
                method='post'
                onSubmit={(e)=>{
                    e.preventDefault()
                    // setEmail('');
                    // setName('');
                    
                    // setPassword('');
                    // localStorage.clear()


                    dispatch({
                        type:"CLEAR_INPUT"
                    })
                    const users =JSON.parse(localStorage.getItem("users")) || []
                    users.push({name:state.name, email:state.email, password: state.password,completed:0,accepted:0,failed:0})
                    localStorage.setItem("users", JSON.stringify(users))
                }}
                >
                <input 
                onChange={(e)=>{
                   dispatch({
                    payload: e.target.value,
                    type:"HANDLE_NAME"
                   })
                }}
                type="text" name="name" value={state.name} id="name" placeholder="Enter your name" />
                <input
                onChange={(e)=>{
                    dispatch({
                        payload: e.target.value,
                        type:"HANDLE_EMAIL"
                       })
                }}
                 type="email" name="email" value={state.email} id="email" placeholder="Enter your email" />
                <input 
                onChange={(e)=>{
                    dispatch({
                        payload: e.target.value,
                        type:"HANDLE_PASSWORD"
                       })
                }}
                type="password" name="password" value={state.password} id="password" placeholder="Enter your password" />
                <button className="signup-btn">Signup</button>
                </form>
            </div>
        </>
    )
}

export default Signup