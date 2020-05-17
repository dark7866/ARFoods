const userAction = async () => {
    const response = await fetch('https://console.echoar.xyz/get?key=tiny-breeze-8604&entry=39633c66-ea33-41ea-a966-81059a1f91a9&data=usageByDate');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    document.write(myJson);
  }