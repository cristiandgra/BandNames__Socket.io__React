import React, { useEffect, useState } from "react";
import { useSocket } from "./hooks/useSocket";
import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";

function App() {
  const [bands, setBands] = useState([]);
  const { socket, online } = useSocket("http://localhost:8080");

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setBands(bands);
    });
  }, [socket]);

  const votar = (id) => {
    socket.emit("votar-banda", id);
  };

  const deleteBand = (id) => {
    socket.emit("borrar-banda", id);
  };

  const cambiarNombre = (id, nombre) => {
    socket.emit("cambiar-nombre", { id, nombre });
  };

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status:
          {online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </p>
      </div>
      <h1>BandNames</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <BandList
            data={bands}
            votar={votar}
            borrar={deleteBand}
            cambiarNombre={cambiarNombre}
          />
        </div>
        <div className="col-4">
          <BandAdd />
        </div>
      </div>
    </div>
  );
}

export default App;
