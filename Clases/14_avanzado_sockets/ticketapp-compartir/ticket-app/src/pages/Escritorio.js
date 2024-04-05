import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd'
import React, { useContext, useState } from 'react'
import { Redirect, useHistory } from 'react-router';
import { SocketContext } from '../context/SocketContext';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { useHideShowMenu } from '../hooks/useHideShowMenu';

const { Title, Text } = Typography;

export const Escritorio = () => {
    useHideShowMenu(false);

    const { socket } = useContext(SocketContext);
    const [ticket, setTicket] = useState(null);

    const [usuario] = useState(getUsuarioStorage())
    const history = useHistory();

    const salir = () => {
        localStorage.clear();
        history.replace('/ingresar');
    }


    const siguienteTicket = () => {

        console.log("siguiente ticket")
        socket.emit('siguiente-ticket', usuario, (ticket) => {
            setTicket(ticket);
        });

    }

    if (!usuario.agente || !usuario.escritorio) {
        return <Redirect to="/ingresar" />
    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>{usuario.agente}</Title>
                    <Text>Usted está ocupando el escritorio: </Text>
                    <Text type="success">{usuario.escritorio}</Text>
                </Col>
                <Col span={4} align="right">
                    <Button
                        shape="round"
                        type="danger"
                        onClick={salir}
                    >
                        <CloseCircleOutlined />
                        Salir
                    </Button>
                </Col>
            </Row>

            <Divider />

            {
                ticket &&
                (
                    <Row>
                        <Col>
                            <Text>Esta atendiendo el ticket número: </Text>
                            <Text
                                style={{ fontSize: 30 }}
                                type="danger"
                            >
                                {ticket.numero}</Text>
                        </Col>
                    </Row>

                )
            }


            <Row>
                <Col offset={18} span={6} align="right">
                    <Button
                        onClick={siguienteTicket}
                        type="primary"
                        shape="round"
                    >
                        <RightOutlined />
                        Siguiente
                    </Button>
                </Col>
            </Row>



        </>
    )
}
