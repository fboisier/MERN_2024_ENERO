import { SocketProvider } from "./context/SocketContext";
import { MapaPage } from "./pages/MapaPage";

function MapasApp() {
  return (
    <SocketProvider>
      <MapaPage />
    </SocketProvider>  
  );
}

export default MapasApp;
