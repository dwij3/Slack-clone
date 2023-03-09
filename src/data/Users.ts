type Users = {
    [key:string]:{
        id:number,
        name:string,
        photo:string,
        directMessages:number[]
    }
}

export const users:Users = {
    1:{
        id:1,
        name:"Dwij Bhanderi",
        photo:"https://randomuser.me/api/portraits/men/22.jpg",
        directMessages: [1,2,3,4,6,9,10]
    },2:{
        id:2,
        name:"Dhairya Rupala",
        photo:"https://randomuser.me/api/portraits/men/1.jpg",
        directMessages: [5,7,8]

    },3:{
        id:3,
        name:"Neel Patel",
        photo:"https://randomuser.me/api/portraits/men/2.jpg",
        directMessages: []
    },4:{
        id:4,
        name:"Heet Mistry",
        photo:"https://randomuser.me/api/portraits/men/3.jpg",
        directMessages: []
    },5:{
        id:5,
        name:"Jay Patel",
        photo:"https://randomuser.me/api/portraits/men/3.jpg",
        directMessages: []
    }
};

