//hooks
// import { useUserId } from "./UserContext";

//type
import {User} from '../types/types';
import {useQuery} from "./useQuery";

type UseUser = {userInfo:User , loading:boolean , error:boolean}

export const useUser = (id:(string | number)):UseUser => {

  const {data , loading , error} = useQuery(`http://localhost:3000/getCurrentUserInfo/${id}`);
  const userInfo = data;
  return {userInfo , loading ,error};
};


