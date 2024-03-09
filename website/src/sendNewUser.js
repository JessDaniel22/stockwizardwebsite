import bcrypt from 'bcryptjs'

export async function sendNewUser(email, password, first_name, last_name) {
    const url = 'wss://cs261se.containers.uwcs.co.uk'; 
    const salt = "$2a$10$5AsPeASpu4VrMIdQ6/La1O"
    console.log(salt,"salt")
    const hashedPassword = bcrypt.hashSync(password, salt)
    const details = {"type": "NEW_USER_REQUEST", "data":{"user": email, "password": hashedPassword, "first_name": first_name, "last_name": last_name}}; 
    const socket = new WebSocket(url);

    return new Promise((resolve, reject) => {
    
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
                const eventData = JSON.parse(event.data);
                if (eventData.type === "LOGIN_RESPONSE") {
                    if (eventData.data.success) {
                        // localStorage.setItem('success', eventData.success)
                        localStorage.setItem('user', email)
                        localStorage.setItem('token', eventData.data.token)
                        
                    }

                    resolve(eventData.data.success); // Resolve the Promise with the data

                }
                socket.close();
            };

            //Handle connection closed
            socket.addEventListener('close', (event) => {
                console.log('Server closed connection: ', event.code);

            });



            socket.addEventListener('error', (event) => {
                console.log('WebSocket error: ', event);
                reject(event); // Reject the Promise if there's an error
            });
        }
        connect();
    })
};

