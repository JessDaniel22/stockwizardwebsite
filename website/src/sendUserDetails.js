export async function sendUserDetails(email, password) {
    const url = 'wss://cs261se.containers.uwcs.co.uk'; 
    const bcrypt = require('bcrypt');

    async function hashPassword(password) {
        const saltRounds = 10;
        const hashedPassword = await new Promise((resolve, reject) => {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if (err) reject(err);
                resolve(hash);
            });
        });
    
        return hashedPassword; // Return the hashed password
    }

    const hashedPassword = await hashPassword(password);
    const details = {"type": "LOGIN_REQUEST", "details":{"email": email, "password": hashedPassword}}; 
    const socket = new WebSocket(url);
    let attempts = 0;
    let delay = 1000;

    function connect() {

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
            if (eventData.type === "LOGIN_RESPONSE") {
                localStorage.setItem('user', eventData.token)
            }
        };

        //Handle connection closed
        socket.addEventListener('close', (event) => {
            console.log('Server closed connection: ', event.code);

            //Attempt to reconnect:
            if (attempts < 5) {
                setTimeout(() => {
                console.log('Reconnecting...');
                connect();
                attempts++;
                delay = Math.min(delay * 2, 60000); //Double delay up to one minute
                }, delay * (1 + 0.3 * Math.random())); //Jitter to avoid synchronised reconnection attempts
            } else {
                console.log('Failed to reconnect after 5 attempts.');
            }
        });

        //Output error message
        socket.addEventListener('error', (event) => {
            console.log('WebSocket error: ', event);
        });
    }
    connect();
}

