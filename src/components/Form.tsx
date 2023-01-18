import React, { useState } from "react";
import {Sub} from '../types';

interface FormState{
    inputValues: Sub
}

interface FormProps{
    onNewSub:(newSubs: Sub) => void
}

const Form = ({onNewSub}: FormProps)=>{
    const [inputValues, setinputValues] = useState<FormState["inputValues"]>({
        nick:'',
        subMonths: 0,
        avatar: '',
        description:''
    })

    const handleSUbmit = (evt: React.FormEvent<HTMLInputElement | HTMLFormElement>) =>{
        evt.preventDefault()
        onNewSub(inputValues) 
    }

    const handleChange = (evt: React.ChangeEvent <HTMLInputElement | HTMLTextAreaElement>) =>{
        setinputValues(
            {
                ...inputValues,
                [evt.target.name]: evt.target.value
            }
        )
        
    }
    const handleClear = () => {
        setinputValues(
            {
                nick:'',
                subMonths: 0,
                avatar: '',
                description:''
            }

        )

    }

    return(
        <div>
            <form onSubmit={handleSUbmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick"/>
                <input onChange={handleChange} value={inputValues.subMonths} type="number" name="subMonths" placeholder="subMonths"/>
                <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar"/>
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description"/>
                <button onClick={handleClear} type='button'>Clear the form</button>
                
                <button type='submit'> save new sub!</button>
            </form>
        </div>
    )
}

export default Form