import { useCallback, useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { v4 } from 'uuid';
import { Subject } from 'rxjs';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VwaGl0b3IiLCJhIjoiY2ttaWoyOHhiMGhoNjJ1bXE3eHF4ZnJkbSJ9.nJTE5lNdAeiDvfkXtiE3Aw';



const useMapbox = (puntoInicial) => {
    const mymap = useRef();
    const mapa = useRef();
    const marcadores = useRef({});

    const nuevoMarcador = useRef(new Subject());
    const movimientoMarcador = useRef(new Subject());

    const setRef = useCallback((node) => {
        mymap.current = node
    },
        [],
    )

    const actualizarMarcador = useCallback(({lat, lng, id}) => {
        marcadores.current[id].setLngLat([lng, lat]);
    }, [])


    const agregarMarcador = useCallback((ev, id) => {

        const { lng, lat } = ev.lngLat || ev;

        const marker = new mapboxgl.Marker();
        marker.id = id ?? v4();

        marker
            .setLngLat([lng, lat])
            .addTo(mapa.current)
            .setDraggable(true)
            .on("drag", ({ target }) => {
                const { id } = target;
                const { lat, lng } = target.getLngLat();

                movimientoMarcador.current.next({
                    id,
                    lat,
                    lng
                })

            });


        marcadores.current[marker.id] = marker;
        if (!id) {

            nuevoMarcador.current.next({
                id: marker.id,
                lng,
                lat
            });
        }


    }, [])

    const [coords, setCoords] = useState({
        lat: puntoInicial.lat.toFixed(4),
        lng: puntoInicial.lng.toFixed(4),
        zoom: puntoInicial.zoom.toFixed(2)
    });

    useEffect(() => {

        const map = new mapboxgl.Map({
            container: mymap.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [puntoInicial.lng, puntoInicial.lat],
            zoom: puntoInicial.zoom
        });

        mapa.current = map;

    }, [puntoInicial])

    useEffect(() => {

        mapa.current?.on('move', () => {
            const { lat, lng } = mapa.current.getCenter();
            const zoom = mapa.current.getZoom();

            setCoords({
                lat: lat.toFixed(4),
                lng: lng.toFixed(4),
                zoom: zoom.toFixed(2)
            });

        });

    }, [])

    useEffect(() => {

        mapa.current?.on('click', agregarMarcador);

    }, [agregarMarcador])

    return {
        setRef,
        coords,
        actualizarMarcador,
        agregarMarcador,
        nuevoMarcador$: nuevoMarcador.current,
        movimientoMarcador$: movimientoMarcador.current
    };
}

export default useMapbox