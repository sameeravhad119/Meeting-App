import { useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddMeetingPage from './pages/AddMeetingPage';
import FreeRoomsPage from './pages/FreeRoomsPage';
import OverviewPage from './pages/OverviewPage';
import { setBuildings } from './slice/building';
import { setMeeting } from './slice/meeting';
import { setMeetingRoom } from './slice/meetingRoom';
import craftService from './services/craftService';
import { transformData } from './utils/helper';

function App() {
  const dispatch = useDispatch(); 
  const ref = useRef(null);

  useEffect(() => {
     const fetchInfo = async ()=>{
      let response= await craftService.getAllMeetingInfo().catch(()=>{
      });
      console.log('response', response);
      const { buildings, meetingsRooms, meetings } = transformData(response.Buildings);
      
      dispatch(setBuildings(buildings));
      dispatch(setMeetingRoom(meetingsRooms));
      dispatch(setMeeting(meetings));

     }
    
     if(ref.current === null){
       fetchInfo();
       ref.current = true;
     }
  }, [])
  
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
