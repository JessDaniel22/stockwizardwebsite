export async function getCompanyData(ticker) {
  const url = 'wss://cs261se.containers.uwcs.co.uk';
  const details = {"type": "COMPANY_REQUEST", "data":{"company":ticker}}; 
  let attempts = 0;
  let delay = 1000;
  const temp = {
    "type": "LOGIN_REQUEST",
    "data": {
      "user": localStorage.getItem('user'),
      "token": localStorage.getItem('token')
    }
  }


  return new Promise((resolve, reject) => {
    function connect() {
      let socket = new WebSocket(url);
      socket.onmessage = (event) => {
        const eventData = JSON.parse(event.data);
        if (eventData.type === "COMPANY_RESPONSE") { 
          resolve(eventData.data); // Resolve the Promise with the data
        }
        
      };

      socket.addEventListener('open', (event) => {
        socket.send(JSON.stringify(temp))
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
