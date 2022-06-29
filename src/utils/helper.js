import { areIntervalsOverlapping, format, isEqual } from "date-fns";

export const getTodaysDate = (dateFormat = "MM-dd-yyyy") => {
  const date = format(new Date(), dateFormat);
  return date;
};

export const getCurrentTime = () => {
  let hour = format(new Date(), "k");
  let min = format(new Date(), "m");
  hour = (hour === "24") ? "00" : hour;
  hour= hour.length=== 1 ? '0'+ hour : hour;
  min= min.length=== 1 ? '0'+ min : min;
  return hour+':'+min;
};

export const areDatesEqual = (date1, date2)=>{
  const [d1, m1, y1] = date1.split('/');
  const [d2, m2, y2] = date2.split('/');
  return isEqual(new Date(d1, m1, y1), new Date(d2, m2, y2))
}

// 10 11  10
export const isTimeInBeetween = (startTime,endTime,checkTime,ending=false)=>{//10.30 , 11 , 10: 30  
  const [sH,sM]= startTime.split(':').map(t=>Number(t));
  const [eH,eM]= endTime.split(':').map(t=>Number(t));
  const [cH,cM]= checkTime.split(':').map(t=>Number(t));

 

  //23.00 00:00   00.15 
  if(cH < sH){//10.30 , 11 , 9: 30
    if(cH === 0){
      if(sH > 0 && eH > 0 && cH < eH){ // 1:00 2:00 00:50
        return false;
      }

      if(cH < eH){//23.00 1:00  00.15
        return true;
      }
      if(cH === eH){//23.00 00:00  00.15
        if(cM < eM){//23.00 00:20  00.15
          return true;
        }
        if(cM == eM){//23.00 00:00  00.00
          return true;
        }
        if(cM > eM){//23.00 00:12  00.15
          return false;
        }
      }
      if(cH > eH){//not possible ch=0, eh -ve not possible

      }
    } 
    return false;
  }
  if(cH === sH){
    if(cM >= sM){//10.30 , 11 , 10: 30
      return true;
    }else{//10.30 , 11 , 10: 25
      return false;
    }
  }
  if(cH > sH){//10.30 , 12 , 11:30/12
    if(cH < eH){//10.30 , 12 , 11:30
      return true;
    }
    if(cH === eH){//10.30 , 12 , 12/12:30
       if(cM < eM){//     12.30   12.25
         return true;
       }
       if(cM === eM){//     12.30   12.30
        return true;
       }
       if(cM > eM){//     12.30   12.45
        return false;
       }
    }
    if(cH > eH){//      12.30   13.45
       return false;
    }
  }
}

export const transformData = (response) => {
  let buildings = [];
  let meetingsRooms = [];
  let meetings = [];
  
  response.forEach((building) => {
    const {
      name: buildingName,
      id: buildingId,
      meetingRooms: mRooms,
    } = building;
    buildings.push({ buildingId, buildingName });
    mRooms.forEach((meetingRoom) => {
      const {
        name: meetingRoomName,
        id: meetingRoomId,
        floor,
        meetings: mtings,
      } = meetingRoom;
      meetingsRooms.push({ meetingRoomName, meetingRoomId, buildingId, floor });
      mtings.forEach((meeting) => {
        const { id: meetingId, title, date, startTime, endTime } = meeting;
        meetings.push({
          meetingId,
          title,
          date,
          startTime,
          endTime,
          buildingId,
          floor,
          meetingRoomId,
        });
      });
    });
  });
  return { buildings, meetingsRooms, meetings };
};

export const getUniqueId = ()=>{
  var max32 = Math.pow(2, 32) - 1
  var uuid = Math.floor(Math.random() * max32);
  return uuid;
}

export const isIntervalsOverlapping = (firstInterval,secondInterval)=>{
  const [date1,month1,year1] = firstInterval.start.date.split('/');
  const [hour1, min1]= firstInterval.start.time.split(':');

  const [date2,month2,year2] = firstInterval.end.date.split('/');
  const [hour2, min2]= firstInterval.end.time.split(':');

  const [date3,month3,year3] = secondInterval.start.date.split('/');
  const [hour3, min3]= secondInterval.start.time.split(':');

  const [date4,month4,year4] = secondInterval.end.date.split('/');
  const [hour4, min4]= secondInterval.end.time.split(':');

  let fStart= new Date(year1, month1-1, date1, hour1, min1)
  let fEnd=  new Date(year2, month2-1, date2, hour2, min2)
  
  let sStart= new Date(year3, month3-1, date3, hour3, min3);
  let sEnd=  new Date(year4, month4-1, date4, hour4, min4);
  
  console.log('fStart', fStart);
  console.log('fEnd', fEnd);

  console.log('sStart', sStart);
  console.log('sEnd', sEnd);

  let isOverlap= areIntervalsOverlapping(
    { start: fStart, end: fEnd},
    { start: sStart, end: sEnd},
  );
  return isOverlap;

}