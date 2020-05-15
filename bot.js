const tmi = require('tmi.js');

// Define configuration options
const opts = {
  options: {
    debug: true,
  },
  connection: {
    cluster: 'aws',
    reconnect: true,
  },
  identity: {
    username: 'username here',
    password: 'insert token here'
  },
  channels: ['insert twitch channel here, just need the name, not the whole url'],
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
//client.on('message', onMessageHandler);
//client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

client.on('connected', (address, port) =>{
  client.action('username here', 'message when bot is connected');
})

client.on('chat', (channel, user, message, self) => {
  if (message == '!water'){
      client.action('username here', 'wet');
      var spawn = require("child_process").spawn,child;
      child = spawn("powershell.exe",["D:/path/to/file/here.ps1"]);

      child.stdout.on("data",function(data){
    console.log("Powershell Data: " + data);
  });

child.stderr.on("data",function(data){
    console.log("Powershell Errors: " + data);
});

child.on("exit",function(){
    console.log("Powershell Script finished");
});

child.stdin.end(); //end input
  }
});
