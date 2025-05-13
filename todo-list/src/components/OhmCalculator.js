import { useState } from "react";

function OhmCalculator() {
  const [tension, setTension] = useState(""); // Tensão (V)
  const [current, setCurrent] = useState(""); // Corrente (A)
  const [resistance, setResistance] = useState(null); // Resultado da resistência (R)

  const handleTensionChange = (e) => setTension(e.target.value);
  const handleCurrentChange = (e) => setCurrent(e.target.value);

  const calculateResistance = () => {
    // Convertendo para números
    const v = parseFloat(tension);
    const i = parseFloat(current);

    // Validando se os inputs são números válidos
    if (isNaN(v) || isNaN(i) || i === 0) {
      alert(
        "Por favor, insira valores válidos para tensão e corrente. A corrente não pode ser zero."
      );
      return;
    }

    // Calculando a resistência (R = V / I)
    const r = v / i;
    setResistance(r.toFixed(2));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-blue-700 mb-4 text-center">
        Calculadora de Resistência (Lei de Ohm)
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateResistance();
        }}
        className="space-y-3"
      >
        <input
          type="number"
          step="any"
          value={tension}
          onChange={handleTensionChange}
          className="w-full p-2 border border-blue-300 rounded-lg"
          placeholder="Tensão (V)"
        />
        <input
          type="number"
          step="any"
          value={current}
          onChange={handleCurrentChange}
          className="w-full p-2 border border-blue-300 rounded-lg"
          placeholder="Corrente (A)"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Calcular Resistência
        </button>
      </form>

      {resistance !== null && (
        <div className="mt-4 text-center text-blue-700 text-lg font-medium">
          Resistência: {resistance} Ω
        </div>
      )}
    </div>
  );
}

export default OhmCalculator;
