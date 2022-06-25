import React from "react";
import { useSelector } from 'react-redux';
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useNavigate } from 'react-router-dom';
import { buildingSelector } from "../../slice/building";

const OverviewPage = () => {
  const navigate = useNavigate();
  const buildings = useSelector(buildingSelector);
  const meetingRooms = useSelector(state=> state.meetingRooms.all);
  const meetings = useSelector(state=> state.buildings.all);

  const totalBuildings= buildings.length;
  const totalRooms= meetingRooms.length;
  const totalMeetings= meetings.length;
  //to do
  // const today= getTodaysDate();
  const todaysMeetings= [1,2,3,4,];//meetings.filter(meeting=> new Date(meeting.date) == new Date(today));
  const otherDaysMeetings= [1,2,3];//meetings.filter(meeting=>new Date(meeting.date) !== new Date(today));
  const currentMeetings = [1,2,3,4,5];

  const availableRooms= [1,2];
  const notAvailableRooms= [1,2,3,4];

  const handleClick = (e) => { 
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
