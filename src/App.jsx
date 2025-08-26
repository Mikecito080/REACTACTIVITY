import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [type, setType] = useState("kmToMiles");

  // Valor fijo del dólar en pesos (puedes cambiarlo)
  const USD_TO_COP = 4000;

  const convert = () => {
    let value = parseFloat(input);
    if (isNaN(value)) {
      setResult("❌ Ingresa un número válido");
      return;
    }

    switch (type) {
      case "kmToMiles":
        setResult(`${(value * 0.621371).toFixed(2)} millas`);
        break;
      case "milesToKm":
        setResult(`${(value / 0.621371).toFixed(2)} km`);
        break;
      case "cToF":
        setResult(`${((value * 9) / 5 + 32).toFixed(2)} °F`);
        break;
      case "fToC":
        setResult(`${(((value - 32) * 5) / 9).toFixed(2)} °C`);
        break;
      case "usdToCop":
        setResult(`${(value * USD_TO_COP).toFixed(2)} COP`);
        break;
      case "copToUsd":
        setResult(`$${(value / USD_TO_COP).toFixed(2)} USD`);
        break;
      default:
        setResult("⚠️ Selecciona un tipo de conversión");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>Conversor de Unidades 🔄</h1>

        <input
          type="number"
          placeholder="Ingresa un valor"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={styles.select}
        >
          <option value="kmToMiles">Kilómetros → Millas</option>
          <option value="milesToKm">Millas → Kilómetros</option>
          <option value="cToF">Celsius → Fahrenheit</option>
          <option value="fToC">Fahrenheit → Celsius</option>
          <option value="usdToCop">USD → COP</option>
          <option value="copToUsd">COP → USD</option>
        </select>

        <button onClick={convert} style={styles.button}>
          Convertir
        </button>

        <h2 style={styles.result}>{result}</h2>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: "20px",
  },
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: "20px",
    padding: "30px",
    width: "90%",
    maxWidth: "400px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },
  title: {
    fontSize: "22px",
    marginBottom: "10px",
    textAlign: "center",
    color: "#007bff",
  },
  input: {
    padding: "12px",
    fontSize: "18px",
    width: "100%",
    borderRadius: "12px",
    border: "1px solid #ccc",
    outline: "none",
  },
  select: {
    padding: "12px",
    fontSize: "18px",
    width: "100%",
    color: "#000",
    borderRadius: "12px",
    border: "1px solid #ccc",
    outline: "none",
    backgroundColor: "white",
  },
  button: {
    padding: "14px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    width: "100%",
    transition: "0.2s",
  },
  result: {
    marginTop: "10px",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
  },
};
