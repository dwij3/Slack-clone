type userDetail = {
    id:number,
    name:string,
    photo:string,
    teamMateId:number[]
}

type Users = userDetail[];
export const users:Users = [
    {
        id:1,
        name:"Dwij Bhanderi",
        photo:"https://randomuser.me/api/portraits/men/22.jpg",
        teamMateId: [1,2,3,4,5]
    },{
        id:2,
        name:"Dhairya Rupala",
        photo:"https://randomuser.me/api/portraits/men/1.jpg",
        teamMateId: [1,2]

    },{
        id:3,
        name:"Neel Patel",
        photo:"https://randomuser.me/api/portraits/men/2.jpg",
        teamMateId: [3]
    },{
        id:4,
        name:"Heet Mistry",
        photo:"https://randomuser.me/api/portraits/men/3.jpg",
        teamMateId: [4]
    },{
        id:5,
        name:"Jay Patel",
        photo:"https://randomuser.me/api/portraits/men/4.jpg",
        teamMateId: [5]
    }
];

