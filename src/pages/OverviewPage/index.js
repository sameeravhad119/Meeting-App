import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useNavigate } from 'react-router-dom';
import { buildingSelector } from "../../slice/building";
import { getCurrentTime, getTodaysDate, isTimeInBeetween } from "../../utils/helper";
import { isEqual } from 'date-fns';
import { setAvailbleRooms } from "../../slice/availbleRooms";

const OverviewPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buildings = useSelector(buildingSelector);
  const meetingRooms = useSelector(state=> state.meetingRooms.all);
  const meetings = useSelector(state=> state.meetings.all);

  const totalBuildings= buildings.length;
  const totalRooms= meetingRooms.length;
  const totalMeetings= meetings.length;
  //to do
  const today= getTodaysDate('dd/MM/yyyy');
  const todaysMeetings= meetings.filter(meeting=> {
    const [d1, m1, y1] = today.split('/');
    const [d2, m2, y2] = meeting.date.split('/');
    return isEqual(new Date(d1, m1, y1), new Date(d2, m2, y2))
  });
  const otherDaysMeetings= meetings.filter(meeting=> {
    const [d1, m1, y1] = today.split('/');
    const [d2, m2, y2] = meeting.date.split('/');
    return !isEqual(new Date(d1, m1, y1), new Date(d2, m2, y2))
  });
  console.log('todaysMeetings.length', todaysMeetings);
  console.log('otherDaysMeetings.length', otherDaysMeetings);

  const currentTime= getCurrentTime();
  console.log('currentTime', currentTime);
  const currentMeetings = todaysMeetings.filter(({startTime,endTime})=>{
    console.log('startTime,endTime', startTime,endTime);
    return isTimeInBeetween(startTime,endTime,currentTime)
  });
  // const notCurrentMeetings = todaysMeetings.filter(({startTime,endTime})=>!isTimeInBeetween(startTime,endTime,currentTime));
  console.log('currentMeetings', currentMeetings);

  
  let notAvailableRooms= [];
  const availableRooms= meetingRooms.filter(meetingRoom=>{
    const {meetingRoomId, buildingId, floor} = meetingRoom;
    let filter= true;
    for(let i=0;i<currentMeetings.length;i++){
      let currentMeeting = currentMeetings[i];  
      if(currentMeeting.meetingRoomId === meetingRoomId && 
        currentMeeting.buildingId === buildingId && 
        currentMeeting.floor === floor ){
          filter= false;
          break;
        }
    }
    if(!filter){
      notAvailableRooms.push(meetingRoom);
    }
    return filter;
  });

  console.log('AvailableRooms', availableRooms);
  console.log('notAvailableRooms', notAvailableRooms);

  const handleClick = (e) => { 
     dispatch(setAvailbleRooms(availableRooms));
     navigate('/addMeeting');
  }

  return (
  <div>
    <Card title={'Buildings'} subTitle1={`Total ${totalBuildings}`} />
    <Card title={'Rooms'} subTitle1={`Total ${totalRooms}`}
    subTitle2={`Free Now ${availableRooms.length}`}/>
    <Card title={'Meetings'} subTitle1={`Total ${todaysMeetings.length} today`} 
    subTitle2={`Total ${currentMeetings.length} Going on now`}/>
    <Button label={'Add a meeting'} onClick={handleClick} />
  </div>);
};
export default OverviewPage;
