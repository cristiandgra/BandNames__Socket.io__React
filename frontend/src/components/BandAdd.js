import React, { useState } from "react";

export const BandAdd = ({ nuevaBanda }) => {
  const [valor, setValor] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (valor.trim().length > 0) {
      nuevaBanda(valor);
      setValor("");
    }
  };
  return (
    <>
      <h3>Agregar banda</h3>

      <form onSubmit={onSubmit}>
        <input
          className="form-control"
          placeholder="Nuevo nombre de banda"
          value={valor}
          onChange={(event) => setValor(event.target.value)}
        />
      </form>
    </>
  );
};
