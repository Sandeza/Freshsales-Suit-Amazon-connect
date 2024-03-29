var client;
var wn;
var iParams;
var iFrameWindow;
var messageEvents = []



document.onreadystatechange = function() {
  if (document.readyState === 'interactive') renderApp();

  function renderApp() {
    var onInit = app.initialized();

    onInit.then(getClient).catch(handleErr);

    // function getClient(_client) {
    //   window.client = _client;
    //   client.events.on('app.activated', renderCustomerName);
    // }


    function getClient(_client) {
      client = _client;
      client.events.on('app.activated', renderCustomerName);
    }
  }
};

function renderCustomerName() {
  var textElement = document.getElementById('apptext');
  client.data
    .get('user')
    .then(function(payload) {
      textElement.innerHTML = `Data Method returned with customer name: <mark>${payload
        .user.first_name}</mark>`;
    })
    .catch(handleErr);
}

function handleErr(err = 'None') {
  console.error(`Error occured. Details:`, err);
}




function trigger(){
  onAgentConnected(client)
}

function trigger1(){
  onCreateUser(client)
}
function trigger2(){
  onCreateConversation(client)
}