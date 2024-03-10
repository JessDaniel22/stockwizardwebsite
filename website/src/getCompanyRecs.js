export async function getCompanyRecs() {
    const url = 'wss://cs261se.containers.uwcs.co.uk';
    const temp = {
      "type": "LOGIN_REQUEST",
      "data": {
        "user": localStorage.getItem('user'),
        "token": localStorage.getItem('token')
      }
    }
    const details = {"type": "COMPANY_LIST_REQUEST", "data": {}}; 

    return new Promise((resolve, reject) => {
      function connect() {
        let socket = new WebSocket(url);
        socket.onmessage = (event) => {
          const eventData = JSON.parse(event.data);
          if (eventData.type === "COMPANY_LIST_RESPONSE") { 
            let sortedData = Object.keys(eventData.data)
            resolve(sortedData); // Resolve the Promise with the data
            socket.close();
          }
        };
  
        socket.addEventListener('open', (event) => {
          console.log('Connection opened for reponse');
          socket.send(JSON.stringify(temp));
          socket.send(JSON.stringify(details));
        });
  
        socket.addEventListener('close', (event) => {
          console.log('Server closed connection: ', event.code);
  

        });
  
        socket.addEventListener('error', (event) => {
          console.log('WebSocket error: ', event);
          reject(event); // Reject the Promise if there's an error
        });
      }
  
      connect(); //Initial connection
  
    });
  }
  


