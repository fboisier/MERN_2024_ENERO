import React, { useContext, useEffect }  from 'react'
import { SocketContext } from '../context/SocketContext';

import useMapbox from '../hooks/useMapbox'

const puntoInicial = {
    lat: -38.7130629,
    lng: -72.6540746,
    zoom: 15
}

export const MapaPage = () => {

    const { coords, setRef, nuevoMarcador$,movimientoMarcador$, agregarMarcador, actualizarMarcador } = useMapbox(puntoInicial);
    const { socket } = useContext(SocketContext);

    useEffect(() => {
        
        socket.on('marcadores-activos',(marcadores)=>{
            
            for (const key of Object.keys(marcadores)){
                
                agregarMarcador(marcadores[key], key);
            }


        });

    }, [socket, agregarMarcador])

    useEffect(() => {

        nuevoMarcador$.subscribe(marcador=>{
            socket.emit('marcador-nuevo', marcador);
        });
        
    }, [nuevoMarcador$, socket])

    useEffect(() => {

        movimientoMarcador$.subscribe(marcador=>{
            socket.emit('mueve-marcador', marcador);
        });
        
    }, [socket, movimientoMarcador$])

    useEffect(() => {
        
        socket.on('marcador-nuevo', (marcador)=>{
            agregarMarcador(marcador, marcador.id);
        });
        
    }, [socket, agregarMarcador]);

    useEffect(() => {
        
        socket.on('mueve-marcador', (marcador)=>{
            actualizarMarcador(marcador);
        });
        
    }, [socket,actualizarMarcador])

    return (
        <>
            <div className="info">
                Lng: { coords.lng } | Lat: { coords.lat } | Zoom: { coords.zoom}
            </div>

            <div
                ref={setRef}
                className="mapContainer"
            />
        </>
    )
}