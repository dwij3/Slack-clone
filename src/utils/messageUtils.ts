//type
import { Message } from "../types/types";

//constants
import {DAYS, MONTHS} from '../constants';

export const getDay = (date = new Date()) => {
  const str =
    DAYS[date.getDay()] +
    ", " +
    date.getDate() +
    " " +
    MONTHS[date.getMonth()];
  return str;
};

export const formatTime = (date = new Date()) => {
  let hours = date.getHours();
  let minutes: number | string = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};



export const groupSameDayMessages = (chat: Message[] | undefined) => {
  if (!chat) return [];

  const dayMap = new Map();
  const dayArr = chat?.map((message: Message, idx: number) => {
    const isFirstMessage = !dayMap.has(message?.day);
    dayMap.set(message?.day, true);
    return isFirstMessage;
  });


  let tempArr: Message[] = [];
  const sameDayMessages = dayArr?.reduce((sameDayMessages: Message[][],ele: boolean, idx: number) => {
    if (ele && idx) {
      if (tempArr) sameDayMessages.push(tempArr);
      tempArr = [];
    }
    tempArr.push(chat?.[idx]);
    if(idx === dayArr.length -1 && tempArr) sameDayMessages.push(tempArr);
    return sameDayMessages;
  },[]);
  return sameDayMessages;
};
