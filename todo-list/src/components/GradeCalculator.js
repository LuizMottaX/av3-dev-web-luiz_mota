import { useState } from "react";

function GradeCalculator() {
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");
  const [media, setMedia] = useState(null);

  const calcularMedia = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const n3 = parseFloat(nota3);
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) return;

    const m = ((n1 + n2 + n3) / 3).toFixed(2);
    setMedia(m);
  };

  const resultado = media >= 6 ? "Aprovado ✅" : "Reprovado ❌";
  const imagem =
    media >= 6 ? "/images/aprovado.jpeg" : "/images/reprovado.jpeg";

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
          Verificador de Notas
        </h2>

        <div className="space-y-4">
          <input
            type="number"
            step="0.01"
            value={nota1}
            onChange={(e) => setNota1(e.target.value)}
            placeholder="Nota 1"
            className="w-full p-2 border border-blue-300 rounded-lg"
          />
          <input
            type="number"
            step="0.01"
            value={nota2}
            onChange={(e) => setNota2(e.target.value)}
            placeholder="Nota 2"
            className="w-full p-2 border border-blue-300 rounded-lg"
          />
          <input
            type="number"
            step="0.01"
            value={nota3}
            onChange={(e) => setNota3(e.target.value)}
            placeholder="Nota 3"
            className="w-full p-2 border border-blue-300 rounded-lg"
          />
          <button
            onClick={calcularMedia}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Calcular Média
          </button>
        </div>

        {media && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold">Média: {media}</p>
            <p
              className={`mt-2 font-bold ${
                media >= 6 ? "text-green-600" : "text-red-600"
              }`}
            >
              {resultado}
            </p>
            <img
              src={imagem}
              alt={resultado}
              className="mt-4 mx-auto w-48 h-48 object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default GradeCalculator;
