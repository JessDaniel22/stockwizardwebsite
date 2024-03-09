export async function getCompanyRecs() {
    const url = 'wss://cs261se.containers.uwcs.co.uk';
    let attempts = 0;
    let delay = 1000;
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
          console.log("received response");
          console.log(eventData)
          if (eventData.type === "COMPANY_LIST_RESPONSE") { 
            console.log("resolving")
            let sortedData = Object.keys(eventData.data)
            resolve(sortedData); // Resolve the Promise with the data
            console.log("resolved")
            // socket.close()
          }
        };
  
        socket.addEventListener('open', (event) => {
          console.log('Connection opened for reponse');
          attempts = 0; //Reset reconnect attempts
          delay = 1000; //Reset delay to 1s
          socket.send(JSON.stringify(temp));
          console.log("send temp");
          
          socket.send(JSON.stringify(details));
          console.log("details sent");
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
  


