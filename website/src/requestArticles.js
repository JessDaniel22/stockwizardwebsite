async function requestArticles(start_time, end_time, use_following_companies, companies) {
    const url = 'wss://cs261se.containers.uwcs.co.uk'; 
    const details = {"type": "ARTICLES_REQUEST", "data": {
      "start_time": start_time,
      "end_time": end_time,
      "use_following_companies": use_following_companies,
      "companies": companies
    }, "timestamp": null};  //////////////////TO DO
    const socket = new WebSocket(url);
    let attempts = 0;
    let delay = 1000;

    //Open connection to web socket
    socket.addEventListener('open', (event) => {
        console.log('Socket opened'); 
        socket.send(JSON.stringify(details));
    });

    //Listen for messages
    socket.addEventListener('message', (event) => {
        console.log('Server message: ', event.data);
    });

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

