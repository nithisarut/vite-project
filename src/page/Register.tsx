import { CloseOutlined, CloudUploadOutlined, UploadOutlined } from '@ant-design/icons';
import { Badge, Button, Input, message, Upload } from 'antd';
import type { RcFile, UploadChangeParam, UploadFile, UploadProps, } from 'antd/es/upload';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registerAccount } from '../app/store/accountSlice';
import { useAppDispatch } from '../app/store/configureStore';
import swal from 'sweetalert';
const value = { fullname: "", email: '', password: '', phonenumber: "", filefrom: "" };
function Register() {
    const [imageUrl, setImageUrl] = useState<string>();
    const [loading, setLoading] = useState(false);
    const RemoveImage = () => setImageUrl("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const submitForm = async (data: any) => {
        const result = await dispatch(registerAccount(data)).unwrap();
        if (result.msg==="OK" ) {
          swal({
            title: "สมัครสำเร็จ",
            icon: "success",
            buttons: [false, "ตกลง"],
          }).then(() => navigate("/Login")
          );
        } else {
          swal({
            title: "อีเมล์ซ้ำ",
            icon: "warning",
            buttons: [false, "ตกลง"],
          });
        };
      };

    const getBase64 = (img: RcFile, callback: (url: string) => void) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result as string));
        reader.readAsDataURL(img);
    };

    const beforeUpload = (file: RcFile) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('สามารถอัปโหลดไฟล์ JPG/PNG เท่านั้น!');
        }
        const isLt2M = file.size / 1024 / 1024 < 100;
        if (!isLt2M) {
            message.error('รูปภาพต้องมีขนาดเล็กกว่า 100MB!');
        }
        return isJpgOrPng && isLt2M;
    };
    return (
        <React.Fragment>
            <section className="section-book">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <Formik
                                initialValues={value}
                                onSubmit={async (values) => {
                                    await new Promise((r) => setTimeout(r, 500));
                                    submitForm(values)
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    setFieldValue,
                                }) => {
                                    const handleChangeImaage: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
                                        if (info.file.status === 'uploading') {
                                            setLoading(true);
                                            return;
                                        }
                                        getBase64(info.file.originFileObj as RcFile, (url) => {
                                            setLoading(false);
                                            setImageUrl(url);
                                        });
                                        setFieldValue("filefrom", info.file.originFileObj);
                                    };


                                    return <Form>
                                        <div className="u-margin-bottom-medium">
                                            <h2 className="heading-secondary">
                                                สมัครสมาชิก
                                            </h2>
                                        </div>

                                        <div className="form__group">
                                            <Input
                                                type="text"
                                                size="large"
                                                status={touched.fullname && errors.fullname
                                                    ? "error"
                                                    : ""}
                                                name="fullname"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.fullname} />
                                            <ErrorMessage name="fullname" component="div" className="text-danger" />
                                            <label htmlFor="fullname" className="form__label">ชื่อ-นามสกุล</label>
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
                                        <div className="form__group">
                                            <Input
                                                type="text"
                                                size="large"
                                                status={touched.phonenumber && errors.phonenumber
                                                    ? "error"
                                                    : ""}
                                                name="phonenumber"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phonenumber} />
                                            <ErrorMessage name="phonenumber" component="div" className="text-danger" />
                                            <label htmlFor="phonenumber" className="form__label">เบอร์ติดต่อ</label>
                                        </div>

                                        <Upload
                                            name="avatar"
                                            className="avatar-uploader"
                                            showUploadList={false}
                                            beforeUpload={beforeUpload}
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            onChange={handleChangeImaage}
                                        >
                                            <Button loading={loading} icon={<UploadOutlined />}>
                                                เพิ่มรูปภาพ
                                            </Button>
                                        </Upload>




                                        <div className="form__group u-margin-bottom-medium">
                                            {imageUrl ? <Badge count={<Button
                                                type="primary"
                                                shape="circle"
                                                htmlType='button'
                                                danger icon={<CloseOutlined />}
                                                onClick={RemoveImage}
                                                size="small"
                                                style={{ marginLeft: "5px" }} />}>
                                                <img
                                                    src={imageUrl}
                                                    className='img-thumbnail'
                                                    alt='...'
                                                    style={{ width: '100%', height: "200px" }}
                                                />
                                            </Badge> : <UploadOutlined  className='img-opacity' style={{ fontSize: "120px" }} />}

                                        </div>



                                        <div className="form__group">
                                            <button className="btn btn--green" type='submit'>Next step &rarr;</button>
                                        </div>
                                    </Form>
                                }
                                }
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Register