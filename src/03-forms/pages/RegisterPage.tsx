import "../styles/styles.css"
import { SubmitEvent } from "react"
import { useForm } from "../hooks/useForm"


const RegisterDataInitialValues = {
    name:"",
    email:"",
    password1:"",
    password2:"",
}

export const RegisterPage = () => {
    const { name, email, password1, password2, formData, onChange, handleReset, isValidEmail} = useForm(RegisterDataInitialValues)
    
    const onSubmint = (event:SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmint}>
                <input 
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length<=0&&"has-error"}`}
                />
                {name.trim().length<=0&&<span>Este campo es necesario</span>}
                <input 
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email)&&"has-error"}`}
                />
                {!isValidEmail(email)&&<span>Email no valido</span>}
                <input 
                    name="password1"
                    type="password"
                    placeholder="Password"
                    value={password1}
                    onChange={(e)=>onChange(e)}
                />
                {password1.trim().length<=0&&<span>Este campo es necesario</span>}
                {password1.trim().length<6&& password1.trim().length>0&&<span>Tiene que tener minimo 6 caracteres</span>}
                <input 
                    name="password2"
                    type="password"
                    placeholder="Repeat Password"
                    value={password2}
                    onChange={onChange}
                />
                {password2.trim().length<=0&&<span>Este campo es necesario</span>}
                {password2.trim().length>=1&& password1!==password2 && <span>Las contraseñas deben de ser iguales</span>}
                <button type="submit">Create</button>
                <button type="button" onClick={handleReset}>Reset form</button>
            </form>
        </div>
    )
}
