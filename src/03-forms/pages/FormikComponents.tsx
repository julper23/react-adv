import "../styles/styles.css"
import {Formik, Field, Form, ErrorMessage} from "formik"
import * as Yup from "yup"



export const FormikComponents = () => {

    return(
        <div>
            <h1>Formik Components Tutorial</h1>
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
                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" name="firstName" />
                        <ErrorMessage name="firstName" component="span"/>

                        <label htmlFor="lastName">Last Name</label>
                        <Field type="text" name="lastName" />
                        <ErrorMessage name="lastName" component="span"/>

                        <label htmlFor="email">Email</label>
                        <Field type="text" name="email" />
                        <ErrorMessage name="email" component="span"/>
     
                        <label htmlFor="jobType">Job Type</label>
                        <Field as="select" name="jobType" >
                            <option value="">Selecciona uno</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT JR</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span"/>


                        <label>
                            <Field type="checkBox" name="terms" />
                            Terms and conditions
                        </label>
                        <ErrorMessage name="terms" component="span"/>
                        
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
            
            
        </div>
    )
}