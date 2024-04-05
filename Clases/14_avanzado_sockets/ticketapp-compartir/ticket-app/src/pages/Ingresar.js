import React, { useState } from 'react'

import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { Redirect, useHistory } from 'react-router';
import { useHideShowMenu } from '../hooks/useHideShowMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
};

const { Title, Text } = Typography;

export const Ingresar = () => {

    useHideShowMenu(false);

    const history = useHistory();

    const [usuario] = useState(getUsuarioStorage())

    const onFinish = ({agente,escritorio}) => {
        console.log('Success:', {agente, escritorio});

        localStorage.setItem('agente',agente);
        localStorage.setItem('escritorio',escritorio);

        history.push("/escritorio")
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if(usuario.agente && usuario.escritorio){
        return <Redirect to="/escritorio" />
    }


    return (
        <>
            <Title level={2}>Ingresar</Title>
            <Text>Ingrese su nombre y número de escritorio</Text>
            <Divider />

            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Nombre"
                    name="agente"
                    rules={[{ required: true, message: 'Ingrese su nombre' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Escritorio"
                    name="escritorio"
                    rules={[{ required: true, message: 'Ingrese el escritorio' }]}
                >
                    <InputNumber min={1} max={99} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        shape="round"
                    >
                        <SaveOutlined />
                    Ingresar
                </Button>
                </Form.Item>
            </Form>
        </>
    )
}
