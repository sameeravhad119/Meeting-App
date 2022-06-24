import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import './App.css';
import { setBuildings } from './slice/building';
import { setMeeting } from './slice/meeting';
import { setMeetingRoom } from './slice/meetingRoom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBuildings(['abc']));
    dispatch(setMeetingRoom(['pqr']));
    dispatch(setMeeting(['xyz']));
  }, [])
  
  return (
    <div className="App">
      Sameer
    </div>
  );
}

export default App;
