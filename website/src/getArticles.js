async function displayArticles() {
  const url = 'wss://cs261se.containers.uwcs.co.uk';
  let attempts = 0;
  let delay = 1000;

  function connect() {
    let socket = new WebSocket(url);


    socket.onmessage = (event) => {
      const eventType = JSON.parse(event.data);
      if (eventType == "ARTICLE_RESPONSE" || eventType == "ARTICLE_PUSH") {
        articleProcessing(articles);  
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

  function articleProcessing(articles) {
    var cleanedArticles = cleanArticles(articles);
    toContainer(cleanedArticles);
  }
}

function cleanArticles(articles) {

  var cleanedArticles = [];
  for (let i = 0; i < articles.length; i++) {
    //Get components needed for container
    var article = {
      logo: "temp",
      companyName: "temp",
      followStatus: "temp",
      title: articles[i].title,
      content: articles[i].summary,
      prediction: "temp", // The prediction for the company
      date: new Date(articles[i].time_published) // The date of the news article
    }
    cleanedArticles.push[article];
  }
  return cleanedArticles;
}

function toContainer(cleanedArticles){
  for (let i = 0; i < cleanedArticles.length; i++) {
    container.prepend(cleanedArticles[i]);  //Not sure if will work - need container name too
  }
}

