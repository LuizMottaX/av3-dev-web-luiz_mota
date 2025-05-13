import { useState } from "react";

function MediaCalculator() {
  const [values, setValues] = useState(["", "", "", ""]);
  const [media, setMedia] = useState(null);

  const handleChange = (index, newValue) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  const calcularMedia = () => {
    const numeros = values.map((v) => parseFloat(v));
    if (numeros.some(isNaN)) {
      alert("Por favor, insira apenas números válidos.");
      return;
    }
    const soma = numeros.reduce((a, b) => a + b, 0);
    setMedia(soma / numeros.length);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-blue-700 mb-4 text-center">
        Calculadora de Média
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calcularMedia();
        }}
        className="space-y-3"
      >
        {values.map((val, i) => (
          <input
            key={i}
            type="number"
            step="any"
            value={val}
            onChange={(e) => handleChange(i, e.target.value)}
            className="w-full p-2 border border-blue-300 rounded-lg"
            placeholder={`Número ${i + 1}`}
          />
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Calcular Média
        </button>
      </form>

      {media !== null && (
        <div className="mt-4 text-center text-blue-700 text-lg font-medium">
          Média: {media.toFixed(2)}
        </div>
      )}
    </div>
  );
}

export default MediaCalculator;
