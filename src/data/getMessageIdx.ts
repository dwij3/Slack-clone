import {messages} from "./Messages";

const getMessageIdx = (messageId:number):number => {
    return messages.findIndex((message) => message.id===messageId);
}

export default getMessageIdx;
