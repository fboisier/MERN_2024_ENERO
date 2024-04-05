import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import React, { useContext, useState } from 'react'
import { SocketContext } from '../context/SocketContext';
import { useHideShowMenu } from '../hooks/useHideShowMenu';

const { Title, Text } = Typography;

export const CrearTicket = () => {

    useHideShowMenu(true);

    const { socket } = useContext(SocketContext);

    const [ticket, setTicket] = useState(null);

    const nuevoTicket = () => {
        console.log("nuevo ticket")
        socket.emit('solicitar-ticket', null, (ticket) => {
            console.log(ticket);
            setTicket(ticket);
        });
    }


    return (
        <>
            <Row>
                <Col span={14} offset={6} align="center">
                    <Title level={3}>
                        Presione el botón para un nuevo ticket.
                    </Title>
                    <Button
                        type="primary"
                        shape="round"
                        size="large"
                        icon={<DownloadOutlined />}
                        onClick={nuevoTicket}
                    >
                        Nuevo Ticket
                    </Button>
                </Col>
            </Row>

            {
                ticket &&

                (<Row style={{ marginTop: 100 }}>
                    <Col span={14} offset={6} align="center">
                        <Text level={2}>
                            Su número
                    </Text>
                        <br />
                        <Text type="success" level={2} style={{ fontSize: 55 }}>
                            {ticket.numero}
                        </Text>
                    </Col>
                </Row>)
            }

        </>
    )
}
