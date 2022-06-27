import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddMeetingPage from './pages/AddMeetingPage';
import FreeRoomsPage from './pages/FreeRoomsPage';
import OverviewPage from './pages/OverviewPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<OverviewPage/>}/>
          <Route path='/addMeeting' element={<AddMeetingPage/>}/>
          <Route path='/freeRooms' element={<FreeRoomsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
