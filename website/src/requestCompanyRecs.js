export async function requestCompanyRecs() {
    const url = 'wss://cs261se.containers.uwcs.co.uk'; 
    const temp = {
      "type": "LOGIN_REQUEST",
      "data": {
        // Temp data for testing
        "user": "bob@gmail.com",
        "token": "2fdaafd2ec85c14976b6e80d184bf82df01b6e4835565f7a232efafc21b57657"
      }
    }
    const details = {"type": "COMPANY_LIST_REQUEST", "data": {}}; 
    const socket = new WebSocket(url);
    let attempts = 0;
    let delay = 1000;


    function connect() {
      //Open connection to web socket
      socket.addEventListener('open', (event) => {
          console.log('Socket opened'); 
          socket.send(JSON.stringify(temp));

          socket.send(JSON.stringify(details));
          console.log("details sent");
      });

      // //Listen for messages
      // socket.addEventListener('message', (event) => {
      //     console.log('Server message: ', event.data);
      // });

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

