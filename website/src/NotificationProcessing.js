async function notifications() {
  const url = 'wss://cs261se.containers.uwcs.co.uk';
  let attempts = 0;
  let delay = 1000;

  function connect() {
    let socket = new WebSocket(url);


    socket.onmessage = (event) => {
      const eventData = JSON.parse(event);
      if (eventData.type === "NOTIFICATION_PUSH") {
        notificationProcessing(eventData.data);  
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
    });
  }

  connect(); //Initial connection


  
  function notificationProcessing(notificationData) {
   // Check if the browser supports notifications
    if ('Notification' in window) {
      // Request permission (if not already granted)
      Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
              // Create a notification
              const notification = new Notification('Hello', {
                title: notificationData.title,
                body: notificationData.body
              });

              // Show the notification
              notification.show();
              setTimeout(() => notification.close(), 10*1000);  //Displays notification for 10s
              
          } else {
              console.log('Notifications are not allowed by the user.');
          }
      });
    } else {
      console.log('Notifications are not supported in this browser.');
    }
  };
}

