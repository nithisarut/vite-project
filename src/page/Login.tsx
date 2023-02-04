import { Input } from 'antd';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { loginAccount } from '../app/store/accountSlice';
import { useAppDispatch } from '../app/store/configureStore';
import { LoginValidate } from '../validate/AccountValidate';

const value = { email: '', password: '' };



function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const submitForm = async (data: any) => {
        const result = await dispatch(loginAccount(data)).unwrap();
        if (result.msg==="OK" ) {
          swal({
            title: "เข้าสู่ระบบสำเร็จ",
            icon: "success",
            buttons: [false, "ตกลง"],
          }).then(() => navigate("/Trip")
          );
        } else {
          swal({
            title: result.msg,
            icon: "warning",
            buttons: [false, "ตกลง"],
          });
        };
      };

      

    return (
        <React.Fragment>

            <section className="section-book">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <Formik
                                initialValues={value}
                                validationSchema={LoginValidate}
                                onSubmit={async (values) => {
                                    await new Promise((r) => setTimeout(r, 500));
                                    submitForm(values);

                                }}
                            >{({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            }) =>
                                <Form onSubmit={handleSubmit}>
                                    <div className="u-margin-bottom-medium">
                                        <h2 className="heading-secondary">
                                            เริ่มจองทันที
                                        </h2>
                                    </div>


                                    <div className="form__group">
                                        <Input
                                            type="text"
                                            size="large"
                                            status={touched.email && errors.email
                                                ? "error"
                                                : ""}
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email} />
                                        <ErrorMessage name="email" component="div" className="text-danger" />
                                        <label htmlFor="email" className="form__label">อีเมล์</label>
                                    </div>

                                    <div className="form__group">
                                    <Input.Password
                                            type="text"
                                            size="large"
                                            status={touched.password && errors.password
                                                ? "error"
                                                : ""}
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password} />
                                        <ErrorMessage name="password" component="div" className="text-danger" />
                                        <label htmlFor="password" className="form__label">รหัสผ่าน</label>
                                    </div>

                                    <div className="form__group u-margin-bottom-medium">
                                        <div className="form__radio-group">
                                            <input type="radio" className="form__radio-input" id="small" name="size" />
                                            <label htmlFor="small" className="form__radio-label">
                                                <span className="form__radio-button"></span>
                                                Small tour group
                                            </label>
                                        </div>

                                        <div className="form__radio-group">
                                            <input type="radio" className="form__radio-input" id="large" name="size" />
                                            <label htmlFor="large" className="form__radio-label">
                                                <span className="form__radio-button"></span>
                                                Large tour group
                                            </label>
                                        </div>
                                    </div>

                                    <div className="form__group">
                                        <button className="btn btn--green" type='submit'>Next step &rarr;</button>
                                    </div>
                                </Form>
                                }
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>

    )
}

export default Login