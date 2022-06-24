import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddMeetingPage from './pages/AddMeetingPage';
import FreeRoomsPage from './pages/FreeRoomsPage';
import OverviewPage from './pages/OverviewPage';
import { setBuildings } from './slice/building';
import { setMeeting } from './slice/meeting';
import { setMeetingRoom } from './slice/meetingRoom';
import { useQuery , gql} from '@apollo/client'

const GET_ALL_MEETING_INFO = gql`
query GetAllMeetingInfoQuery {
    Buildings {
      name
      id
    }
}
`;

function App() {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_ALL_MEETING_INFO);

  if(loading){
    console.log('Loading...');
  }
  if(error){
    console.log('Error...');
  }
  if(data){
    console.log('data...',data);
  }


  useEffect(() => {
    // dispatch(setBuildings(['abc']));
    // dispatch(setMeetingRoom(['pqr']));
    // dispatch(setMeeting(['xyz']));
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
