import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Este correo no es válido')
        .required('Esto es requerido'),
    clave: Yup.string()
        .min(8, 'Campo debe tener 8 caracteres')
        .required('NO OLVIDAR!!!'),
});

const Formulario = () => {

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 10);
    };
    

    return <Formik
                initialValues={{ email: '', clave: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-3">
                            <Field type="email" name="email" className="form-control" placeholder="Email" />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>

                        <div className="mb-3">
                            <Field type="password" name="clave" className="form-control" placeholder="Clave" />
                            <ErrorMessage name="clave" component="div" className="text-danger" />
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            Enviar!
                        </button>
                    </Form>
                )}
            </Formik>
}

export default Formulario