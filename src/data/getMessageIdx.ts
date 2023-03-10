import {messages} from "./Messages";

const getMessageIdx = (messageId:number|string):number => {
    return messages.findIndex((message) => message.id===messageId);
}

export default getMessageIdx;
