
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { PagesRouter } from "./routes/PagesRouter";
import { PageLinks } from "./components/PageLinks.tsx";
import { Calendar } from "./components/Calendar.tsx";
import { withDataLoad } from './components/withDataLoad.tsx';

  // Константы - методы & операции
import { SERVER_URL_EMPLOYEES} from './scripts/constants.ts';
const CalendarWithData=withDataLoad("calendarData",SERVER_URL_EMPLOYEES)(Calendar);

function App() {
  return (
    <BrowserRouter>
      <div>
        <CalendarWithData/>
        <h1>Маршрутизация</h1>
        <PageLinks/>
        <PagesRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
