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

    // var options = { "url": "https://sandeza-inc-604283044066011944.myfreshworks.com" }
  
    client.request.invoke('createUser',options={}).then(function(data){
      console.log("User has been created successfully",data);  
      let result= data.message
    //   let result=JSON.parse(data.response)
      console.log("RESULT IS......",result)

    }).catch((err=>{
      console.log(err)
    })
  )} 

// ===============================================================================================================================

function onCreateConversation(client){

    console.log("this is a function for creating new conversation for user....") 

    // var options = { "url": "https://sandeza-inc-604283044066011944.myfreshworks.com" }
  
    client.request.invoke('createConversation',options={}).then(function(data){
      console.log("conversation is created successfully",data);  
    }).catch((err=>{
      console.log(err)
    })
  )} 