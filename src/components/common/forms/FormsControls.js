import React from "react"
import style from './FormStyle.module.css'

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={style.formControll +" "+ style.error}>
            <textarea {...props} {...input}  />
            
            { meta.touched && meta.error && <p>some console.error();</p>}
        </div>
    )
}