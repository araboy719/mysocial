let dialogsData = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Artur' },
    { id: 3, name: 'Ira' },
    { id: 4, name: 'Zohan' },
    { id: 5, name: 'Kolya' },
    { id: 6, name: 'Tima' },
    { id: 7, name: 'Sasha' },
    { id: 8, name: 'Ara' },
];

let DialogItems = dialogsData
    .map( dialog => <Dialog name={dialog.name} id={dialog.id} />);


let ChatData = [
    { id: 1, text:"Hi"},
    { id: 2, text:"HAllo"},
    { id: 3, text:"My Name it is Jony"},
    { id: 4, text:"How are you"},
    { id: 5, text:"Hi"},
    { id: 6, text:"Yo"},
];

let ChatItem = ChatData.map( chat => <Chat text={chat.text} id={chat.id} />)

