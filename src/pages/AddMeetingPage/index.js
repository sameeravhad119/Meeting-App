import React, { useState } from "react";
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import AvailableRooms from "../../components/AvailableRooms";
import Button from "../../components/Button";
import DateTimePicker from "../../components/DateTimePicker";
import Heading from "../../components/Heading";
import InputText from "../../components/InputText";
import Select from "../../components/Select";
import { buildingSelector } from "../../slice/building";
import { todaysDate } from "../../utils/helper";
import "./index.css";

const AddMeetingPage = () => {
  const buildings = useSelector(buildingSelector);
  
  const [description, setDescription] = useState('');
  const [selectedBuilding,setSelectedBuilding] = useState('');
  const [selectedMeetingDate, setSelectedMeetingDate] = useState(todaysDate("yyyy-MM-dd"));
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('00:00');

  const buildingOption = buildings.map(({buildingName, buildingId})=>({label: buildingName, value:buildingId}));
  const navigate= useNavigate();

  const handleClick = (e) => {
     navigate('/freeRooms'); 
  }

  const handleChange = (e,fn) => { 
   const {value} = e.target;
   fn(value);
  }

  return (
    <div className="add-meeting-page-container">
      {/* {!showAvailableRooms ? ( */}
        <>
          <Heading title={"Add Meeting"} />
          <InputText 
           id={'Description'}
           label={'Description'}
           value={description}
           required={true} 
           onChange={(e)=> handleChange(e, setDescription)}
          />
          <Select
            id={"building"}
            label={"Select Building"}
            name={"selectedBuilding"}
            options={buildingOption}
            value={selectedBuilding}
            onChange={(e) => handleChange(e, setSelectedBuilding)}
          />
          <DateTimePicker
            id="meetingDate"
            name="meetingDate"
            label={"Meeting Date"}
            type={"date"}
            onChange={(e) => handleChange(e, setSelectedMeetingDate)}
            value={selectedMeetingDate}
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <DateTimePicker
            id="startTime"
            name="startTime"
            label={"Start Time"}
            type={"time"}
            onChange={(e) => handleChange(e, setStartTime)}
            value={startTime}
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />

          <DateTimePicker
            id="endTime"
            name="endTime"
            label={"End Time"}
            type={"time"}
            onChange={(e) => handleChange(e, setEndTime)}
            value={endTime}
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          <Button label={"Next"} onClick={handleClick} />
        </>
      {/* ) : (
        <AvailableRooms />
      )} */}
    </div>
  );
};
export default AddMeetingPage;
