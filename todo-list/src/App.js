import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ToDoApp from "./components/ToDoApp";
import MediaCalculator from "./components/MediaCalculator";
import PriceCalculator from "./components/PriceCalculator";
import OhmCalculator from "./components/OhmCalculator";
import DateTimeDisplay from "./components/DateTimeDisplay";
import GradeCalculator from "./components/GradeCalculator";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50">
        {/* Barra de navegação */}
        <nav className="bg-blue-600 text-white p-4 flex flex-wrap space-x-4">
          <Link to="/" className="hover:underline">
            Lista de Tarefas
          </Link>
          <Link to="/media" className="hover:underline">
            Média
          </Link>
          <Link to="/venda" className="hover:underline">
            Preço de Venda
          </Link>
          <Link to="/resistencia" className="hover:underline">
            Resistência
          </Link>
          <Link to="/datahora" className="hover:underline">
            Data e Hora
          </Link>
          <Link to="/grade" className="hover:underline">
            Média do Aluno
          </Link>
        </nav>

        {/* Conteúdo dinâmico */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<ToDoApp />} />
            <Route path="/media" element={<MediaCalculator />} />
            <Route path="/venda" element={<PriceCalculator />} />
            <Route path="/resistencia" element={<OhmCalculator />} />
            <Route path="/datahora" element={<DateTimeDisplay />} />
            <Route path="/grade" element={<GradeCalculator />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
