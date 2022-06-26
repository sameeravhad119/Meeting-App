import { format } from "date-fns";

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

export const isTimeInBeetween = (startTime,endTime,checkTime)=>{//10.30 , 11 , 10: 30  
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