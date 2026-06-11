import { Formik } from "formik"
import "../styles/styles.css"
import * as Yup from 'yup';
import { MyTextInput } from "../components";


const InitialValues = {
    name:"",
    email:"",
    password1:"",
    password2:"",
}

export const RegisterFormikPage = () => {




    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={InitialValues}
                onSubmit={(values)=>{
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name:  Yup.string()
                            .min(2, "El nombre debe de ser de 3 caracteres o mas")
                            .required("Requerido"),
                        email:  Yup.string()
                            .email("Revise el formato del correo")
                            .required("Requerido"),
                        password1:  Yup.string()
                            .min(6, "Minimo 6 caracteres")
                            .required("Requerido"),
                        password2:  Yup.string()
                            .oneOf([Yup.ref("password1")], "Las contraseñas no son iguales")
                            .required("Requerido"),
                    })
                }
            >
                {({handleReset})=>(
                    <form>
                        <MyTextInput 
                            label="Nombre"
                            name="name"
                            placeholder="Nombre"
                        />

                        <MyTextInput 
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="john@google.com"
                        />

                        <MyTextInput 
                            label="Password"
                            name="password1"
                            type="password"
                            placeholder="******"
                        />

                        <MyTextInput 
                            label="Confirm password"
                            name="password2"
                            type="password"
                            placeholder="******"
                        />


                        <button type="submit">Create</button>
                        
                        <button type="button" onClick={ handleReset }>Reset Form</button>
                    </form>
                )

                }
            </Formik>
        </div>
    )
}
