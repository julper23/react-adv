import "../styles/styles.css"
import {Formik, Form} from "formik"
import * as Yup from "yup"
import { MyTextInput, MySelect, MyCheckbox } from "../components"



export const FormikAbstraction = () => {

    return(
        <div>
            <h1>Formik Abstraction</h1>
            <Formik
                initialValues={{
                    firstName:"",
                    lastName:"",
                    email:"",
                    terms: false,
                    jobType: "",
                }}
                onSubmit={ (values) => {
                    console.log(values)
                }}
                validationSchema={ Yup.object({
                    firstName:  Yup.string()
                        .max(15, "Debe de tener 15 caracteres o menos")
                        .required("Requerido"),
                    lastName:  Yup.string()
                        .max(15, "Debe de tener 15 caracteres o menos")
                        .required("Requerido"),
                    email:  Yup.string()
                        .email("Tiene que ser un email valido")
                        .required("Requerido"),
                    terms:  Yup.boolean()
                        .isTrue("Debe de aceptar las condiciones")
                        .required(),
                    jobType:  Yup.string()
                        .notOneOf(["it-jr"], "Esta opción no es permitida.")
                        .required("Requerido"),
                })}
            >
                {(formik) => (
                    <Form>
                        <MyTextInput label="First Name" name="firstName" placeholder="First name" />
                        <br/>
                        <MyTextInput label="Last Name" name="lastName" placeholder="Last name" />
                        <br/>
                        <MyTextInput label="Email" name="email" placeholder="Email" type="email" />
                        <br/>
                        <MySelect label="Job Type" name="jobType">
                            <option value="">Selecciona uno</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT JR</option>
                        </MySelect>
                        <br/>
                        <MyCheckbox label="Termns & Conditions" name="terms" />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
            
            
        </div>
    )
}