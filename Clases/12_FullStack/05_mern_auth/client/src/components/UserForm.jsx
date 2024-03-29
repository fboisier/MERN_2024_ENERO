import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { useContext } from 'react';

const UserForm = ({formType}) => {
    const { setUser } = useContext(UserContext);

    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Este correo no es válido')
            .required('Esto es requerido'),
        password: Yup.string()
            .min(8, 'Campo debe tener 8 caracteres')
            .required('NO OLVIDAR!!!'),
        ...(formType === 'registro' && {
            firstName: Yup.string().required('Nombre es requerido'),
            lastName: Yup.string().required('Apellido es requerido'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
                .required('Confirmar contraseña es requerido'),
        }),
    });

    const handleSubmit = (values, { setSubmitting, resetForm, setErrors }) => {
        if (formType === "registro") {
            registerUser(values, setErrors);
        } else {
            loginUser(values, setErrors);
        }
        setSubmitting(false);
        resetForm();
    };

    
    const registerUser = async (values, setErrors) => {
        try {
            await axios.post(
                "http://localhost:8000/api/auth/register",
                values,
                { withCredentials: true }
            );
            loginUser(values, setErrors);
        } catch (err) {
            console.log("Error: ", err.response.data);
            setErrors({general: err.response.data.msg});
        }
    };

    const loginUser = async (values, setErrors) => {
        try {
            let res = await axios.post(
                "http://localhost:8000/api/auth/login",
                values,
                { withCredentials: true }
            );
            setUser(res.data.user);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate("/");
        } catch (err) {
            console.log("Error: ", err.response);
            setErrors({general: err.response.data.msg});
        }
    };

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                ...(formType === 'registro' && { firstName: '', lastName: '', confirmPassword: '' }),
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, isSubmitting }) => (
                <Form>

                    <h2>{formType === 'login' ? 'Iniciar Sesion' : 'Registrarse'}</h2>
                    {errors?.general && (
                        <div className="alert alert-danger" role="alert">
                            {errors.general}
                        </div>
                    )}

                    {formType === 'registro' && (
                        <>
                            <div className="mb-3">
                                <Field type="text" name="firstName" className="form-control" placeholder="Nombre" />
                                <ErrorMessage name="firstName" component="div" className="text-danger" />
                            </div>
                            <div className="mb-3">
                                <Field type="text" name="lastName" className="form-control" placeholder="Apellido" />
                                <ErrorMessage name="lastName" component="div" className="text-danger" />
                            </div>
                        </>
                    )}
                    <div className="mb-3">
                        <Field type="email" name="email" className="form-control" placeholder="Email" />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <Field type="password" name="password" className="form-control" placeholder="password" />
                        <ErrorMessage name="password" component="div" className="text-danger" />
                    </div>
                    {formType === 'registro' && (
                        <div className="mb-3">
                            <Field type="password" name="confirmPassword" className="form-control" placeholder="Confirmar password" />
                            <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                        </div>
                    )}
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        Enviar!
                    </button>
                </Form>
            )}
        </Formik>
    );
}

UserForm.propTypes = {
    formType: PropTypes.string.isRequired
}

export default UserForm