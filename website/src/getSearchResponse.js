async function getSearchResponse() {
    const url = 'wss://cs261se.containers.uwcs.co.uk';
    let attempts = 0;
    let delay = 1000;
  
    return new Promise((resolve, reject) => {
      function connect() {
        let socket = new WebSocket(url);
  
        socket.onmessage = (event) => {
          const eventData = JSON.parse(event);
          if (eventData.type === "SEARCH_RESPONSE") { 
            sortedData = sortData(eventData.data);
            resolve(sortedData); // Resolve the Promise with the data
          }
        };
  
        socket.addEventListener('open', (event) => {
          console.log('Connection opened');
          attempts = 0; //Reset reconnect attempts
          delay = 1000; //Reset delay to 1s
        });
  
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
  
        socket.addEventListener('error', (event) => {
          console.log('WebSocket error: ', event);
          reject(event); // Reject the Promise if there's an error
        });
      }
  
      connect(); //Initial connection
      
      function sortData(data) {
        // WHAT DATA NEEDED HERE?
        sortedData = [];
        return sortedData
      }
  
    });
  }
  