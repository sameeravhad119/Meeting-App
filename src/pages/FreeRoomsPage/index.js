import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { availbleRoomsSelector } from '../../slice/availbleRooms';
import { meetingSelector } from '../../slice/meeting';
import { meetingRoomSelector } from '../../slice/meetingRoom';
import { selectedMeetingRoomSelector, setSelectedMeetingRoom } from '../../slice/selectedMeetingRoom';
import {format} from 'date-fns';
import { areDatesEqual, getUniqueId } from '../../utils/helper';
import Card from '../../components/Card';
import { buildingSelector } from '../../slice/building';
import Heading from '../../components/Heading';
import cls from 'classnames';
import Button from '../../components/Button';
import craftService from '../../services/craftService';
import { useNavigate } from 'react-router-dom';
import './index.css';


const FreeRoomsPage = () => {
  const dispatch= useDispatch();
  const navigate= useNavigate();
  const buildings= useSelector(buildingSelector);//all buildings
  const rooms= useSelector(meetingRoomSelector);//all rooms
  const meetings= useSelector(meetingSelector);//all meeting
  const selectedMeetingRoom= useSelector(selectedMeetingRoomSelector);//from 2nd page

  const [selectedFreeRoom, setSelectedFreeRoom]= useState({});

  const roomsFilterByBuildingId= rooms.filter(room=>{
   const {selectedBuilding, selectedMeetingDate, startTime, endTime}= selectedMeetingRoom;
   return selectedBuilding === room.buildingId
  })

  const scheduledMeetingsInThatBuilding= meetings.filter(meeting=>{
    const {selectedBuilding, selectedMeetingDate}= selectedMeetingRoom;
    const formattedDate= format(new Date(selectedMeetingDate),'dd/MM/yyyy');
    const buildingCondition= selectedBuilding === meeting.buildingId;
    const dateCondition= areDatesEqual(formattedDate, meeting.date);
    return buildingCondition && dateCondition;
  })

  const handleClick = (r) => { 
    const {meetingRoomName, buildingId, floor, meetingRoomId} = r;
    setSelectedFreeRoom({
      meetingRoomName, buildingId, floor, meetingRoomId
    })
  }

  const addMeeting = () => { 
    let date = format(new Date(selectedMeetingRoom.selectedMeetingDate),"dd/MM/yyyy");
    
    let obj={
      "id": getUniqueId(),
      "title": selectedMeetingRoom.description,
      "date": date,//"1/07/2022",
      "startTime": selectedMeetingRoom.startTime,
      "endTime": selectedMeetingRoom.endTime,
      "meetingRoomId": 1//selectedFreeRoom.meetingRoomId
    };
    console.log('obj', obj);
    craftService.addMeeting(obj).then(res=>{
      navigate("/");
    })
   }

  const handleNext = () => { 
       dispatch(setSelectedMeetingRoom({
        meetingRoomId : selectedFreeRoom.meetingRoomId,
        floor : selectedFreeRoom.floor
       }))
       addMeeting();    
  }

  console.log('scheduledMeetingsInThatBuilding', scheduledMeetingsInThatBuilding);

  //to do
  const availbleRooms= roomsFilterByBuildingId;

  return (
    <div className='free-room-page-container'>
      <Heading title={"Please select one of the Free Rooms"} />
      {
        availbleRooms.map(room=>{
          const {meetingRoomName, buildingId, floor, meetingRoomId} = room;
          const {buildingName}= buildings.find(building=>building.buildingId === buildingId) || {};
          return(
            <Card
              key={meetingRoomName}
              title={meetingRoomName}
              subTitle1={buildingName}
              subTitle2={`floor ${floor}`}
              className={ cls({'active' :buildingId === selectedFreeRoom.buildingId && 
                meetingRoomId === selectedFreeRoom.meetingRoomId &&
                floor === selectedFreeRoom.floor})
              }
              onClick={e=> handleClick(room)}
            />
          )
        })
      }
      <Button label={'Next'} onClick={handleNext} />
    </div>
  )
}

export default FreeRoomsPage;