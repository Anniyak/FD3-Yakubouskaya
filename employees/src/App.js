
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { PagesRouter } from "./routes/PagesRouter";
import { PageLinks } from "./components/PageLinks.tsx";
import { Calendar } from "./components/Calendar.tsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Calendar/>
        <h1>Маршрутизация</h1>
        <PageLinks/>
        <PagesRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
