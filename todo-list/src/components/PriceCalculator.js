import { useState } from "react";

function PriceCalculator() {
  const [unitPrice, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [finalPrice, setFinalPrice] = useState(null);

  const handlePriceChange = (e) => setUnitPrice(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const handleDiscountChange = (e) => setDiscount(e.target.value);

  const calculateFinalPrice = () => {
    // Convertendo para números
    const price = parseFloat(unitPrice);
    const qty = parseInt(quantity, 10);
    const disc = parseFloat(discount);

    if (isNaN(price) || isNaN(qty) || isNaN(disc)) {
      alert("Por favor, insira valores válidos para todos os campos.");
      return;
    }

    // Calculando o preço final
    const totalPrice = price * qty;
    const final = totalPrice - disc;
    setFinalPrice(final.toFixed(2));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-blue-700 mb-4 text-center">
        Calculadora de Preço de Venda
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateFinalPrice();
        }}
        className="space-y-3"
      >
        <input
          type="number"
          step="any"
          value={unitPrice}
          onChange={handlePriceChange}
          className="w-full p-2 border border-blue-300 rounded-lg"
          placeholder="Preço Unitário (R$)"
        />
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-full p-2 border border-blue-300 rounded-lg"
          placeholder="Quantidade Vendida"
        />
        <input
          type="number"
          step="any"
          value={discount}
          onChange={handleDiscountChange}
          className="w-full p-2 border border-blue-300 rounded-lg"
          placeholder="Desconto (R$)"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Calcular Preço Final
        </button>
      </form>

      {finalPrice !== null && (
        <div className="mt-4 text-center text-blue-700 text-lg font-medium">
          Preço Final: R${finalPrice}
        </div>
      )}
    </div>
  );
}

export default PriceCalculator;
