import React from "react"
import style from './FormStyle.module.css'


const FormControl = ({input, meta, child, ...props}) => {
    const hasError =  meta.touched && meta.error
    return (
        <div className={style.formControll +"  " + (hasError ? style.error : "")}>
            {props.children}            
            { hasError && <p>{meta.error}</p>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl  {...props}> <textarea {...input} {...restProps} /> </FormControl>
    
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl  {...props}> <input {...input} {...restProps} /></FormControl>
}