async function sendUserDetails(email, password) {
    const url = 'wss://cs261se.containers.uwcs.co.uk'; 
    const details = {"type": "LOGIN_REQUEST", "details":{"email": email, "password": password}}; 
    const socket = new WebSocket(url);

    //Open connection to web socket
    socket.addEventListener('open', (event) => {
        console.log('Socket opened'); 
        socket.send(JSON.stringify(details));
    });

    //Listen for messages
    socket.addEventListener('message', (event) => {
        console.log('Server message: ', event.data);
    });

    socket.onmessage = (event) => {
        const eventData = JSON.parse(event);
        if (eventData.type == "LOGIN_RESPONSE") {
            localStorage.setItem('user', eventData.token)
        }
      };

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

