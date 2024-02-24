async function sendUserDetails(email, password) {
    const url = 'wss://cs261se.containers.uwcs.co.uk'; 
    const details = { email: email, password: password}; 
    const socket = new WebSocket(url);

    //Open connection to websocket
    socket.addEventListener('open', (event) => {
        socket.send(JSON.stringify(details));
    });

    //Listen for messages
    socket.addEventListener('message', (event) => {
        console.log('Server message: ', event.data);
    });

    //Handle connection closed
    socket.addEventListener('close', (event) => {
        //sends status code of why connection was closed
        console.log('Server closed connection: ', event.code);                            
    });

    //Output error message
    socket.addEventListener('error', (event) => {
        console.log('WebSocket error: ', event);
    });
}
