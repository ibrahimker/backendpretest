# Send and Get Message API (Rest and MQTT)
---
## Project Description
This is a simple project built in ExpressJS to demonstrate send and get API through Rest and MQTT. There are 2 endpoint in this projects:
  - /sendmessage
  - /getmessage
 
# Hot to Test
1. Clone this library and install the dependencies. After that run the project
    ```
    git clone https://github.com/ibrahimker/backendpretest.git
    npm install
    npm run start
    ```
   After running apps, Your terminal should look like this
    ![start message](https://raw.githubusercontent.com/ibrahimker/backendpretest/master/img/startapp.png "start message")
2. Download [Postman](https://www.getpostman.com/), install, after that import ```Warung Pintar Backend Pretest.postman_collection.json``` to your postman
3. Let's first test the send message API. This API will send message through http and mqtt protocol. Open sendmessage in postman then hit send. Your postman should be getting response like this
    ![send message](https://raw.githubusercontent.com/ibrahimker/backendpretest/master/img/sendmessage.png "send message")

    Check also your terminal console to see that you can get the message in realtime through MQTT protocol
    ![mqtt message](https://raw.githubusercontent.com/ibrahimker/backendpretest/master/img/mqttmessage.png "mqtt message")
4.  Now let's test get message. Open /getmessage in postman then hit it. You should get response like this
    ![get message](https://raw.githubusercontent.com/ibrahimker/backendpretest/master/img/getmessageresult.png "get message")