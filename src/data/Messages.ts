type message = {
    id:number,
    from:number,
    to:number,
    Date:string,
    content:string
}

type Messages = {
    [key:string]:message
}

export const messages:Messages ={
    "1":{
        id:1,
        from:1,
        to:2,
        Date:"08/03/2022",
        content:"Hey Dhairya!"
    }, "2":{
        id:2,
        from:1,
        to:3,
        Date:"08/03/2022",
        content:"Hey Neel!"
    },"3":{
        id:2,
        from:1,
        to:4,
        Date:"08/03/2022",
        content:"Hey Heet!"
    },"4":{
        id:2,
        from:1,
        to:5,
        Date:"08/03/2022",
        content:"Hey Jay!"
    },"5":{
        id:2,
        from:2,
        to:1,
        Date:"08/03/2022",
        content:"Hey Dwij!"
    },"6":{
        id:2,
        from:1,
        to:2,
        Date:"08/03/2022",
        content:"How are you?"
    },"7":{
        id:2,
        from:2,
        to:1,
        Date:"08/03/2022",
        content:"I am Fine!"
    },"8":{
        id:2,
        from:2,
        to:1,
        Date:"08/03/2022",
        content:"what's up!"
    },"9":{
        id:2,
        from:1,
        to:2,
        Date:"08/03/2022",
        content:"Nothing"
    },"10":{
        id:2,
        from:1,
        to:2,
        Date:"08/03/2022",
        content:"Bye!"
    }
}