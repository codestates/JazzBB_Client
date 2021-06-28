import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


 export function SignupPage () {
    const [inputs, setInputs] = useState({
        name : '',
        nickName : ''
    });

    const {name, nickName} = inputs;

    const onChange = (e) => {
        const {value, name } = e.target;
        console.log(e.target)
        console.log(inputs)
        setInputs({
            ...inputs,
            [name] : value
        });
    };

    const onReset = () =>{
        setInputs({
            name : '',
            nickName:''
        })
    };
    return (
    <div>
        <input
        name = "name"
        onChange={onChange}/>
        <input 
        name = "nickName"
        onChange={onChange}/>

    </div>

    )
}

export default SignupPage;