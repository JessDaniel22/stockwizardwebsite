export async function requestArticles(start_time, end_time, use_following_companies, companies) {
    const url = 'wss://cs261se.containers.uwcs.co.uk'; 
    const details = {"type": "ARTICLE_REQUEST", "data": {
      "start_time": start_time,
      "end_time": end_time,
      "use_following_companies": use_following_companies,
      "companies": companies
    }};  
    const temp = {
      "type": "LOGIN_REQUEST",
      "data": {
        "user": localStorage.getItem('user'),
        "token": localStorage.getItem('token')
      }
    }
    const socket = new WebSocket(url);

    function connect() {
      socket.addEventListener('open', (event) => {
          socket.send(JSON.stringify(temp));
          socket.send(JSON.stringify(details));
      });

      //Listen for messages
      socket.addEventListener('message', (event) => {
          console.log('Server message: ', event.data);
      });

      //Handle connection closed
      socket.addEventListener('close', (event) => {
          console.log('Server closed connection: ', event.code);
        });

      //Output error message
      socket.addEventListener('error', (event) => {
          console.log('WebSocket error: ', event);
      });
  }
  connect();

}

