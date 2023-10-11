function onAgentConnected(client){

    console.log("this is a function for getcontactlist.....") 

    // var options = { "url": "https://sandeza-inc-604283044066011944.myfreshworks.com" }
  
    client.request.invoke('searchContactByPhoneNumber',options={}).then(function(data){
      console.log("THIS IS THE REQUIRED CONTACT",data);  
    }).catch((err=>{
      console.log(err)
    })
  )} 
//============================================================================================================================


function onCreateUser(client){
    console.log("this is a function for creating new conversation for user....") 
    var options = { "first_name": "Bala", "last_name": "Sandeza", "phone": "+918825483777" }
    client.request.invoke('createContactInFreshchat',options).then(function(data){
      let result= JSON.parse(data.message)
      console.log("User has been created successfully",result);  
    }).catch((err=>{
      console.log(err)
    })
  )} 

// ===============================================================================================================================

function onCreateConversation(client){

    console.log("this is a function for creating new conversation for user....") 

    // var options = { "url": "https://sandeza-inc-604283044066011944.myfreshworks.com" }
  
    client.request.invoke('createConversationInFreshchat',options={}).then(function(data){
      console.log("conversation is created successfully",data);  
    }).catch((err=>{
      console.log(err)
    })
  )} 