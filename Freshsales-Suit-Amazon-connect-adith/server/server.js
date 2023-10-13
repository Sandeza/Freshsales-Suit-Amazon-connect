exports = {

    searchContactByPhoneNumber: async function (options) {
        try{
            var requestUrl = `${options.iparams.freshchat_domain}/users?phone_no=${encodeURIComponent("+918825483777")}`
            var headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${options.iparams.freshchat_api_key}`
            }
            var options = { headers:headers};
            var result = await $request.get(requestUrl,options)
            result = result.response;
            renderData({status:200,message:JSON.stringify(result)})
        }catch(error){
            console.log("This is the error from contact",error)
            renderData({"status":400,message:JSON.stringify(error)})
        }
    },

// ==============================================================================================================================================

    createContactInFreshchat : async function(options){

        try{

            var requestUrl = `${options.iparams.freshchat_domain}/users`
            var headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${options.iparams.freshchat_api_key}`
            }
            let { first_name,last_name,phone } = options;

            var data = {
                'first_name':first_name,
                'last_name':last_name,
                'phone':phone
            }

            var options = { headers:headers,body:JSON.stringify(data)};
            var result = await $request.post(requestUrl,options)
            result = result.response;
            console.log("RESULT.........",result)
            renderData({status:200,message:JSON.stringify(result)})

        }catch(error){
            console.log("This is the error from contact",error)
            renderData({"status":400,message:JSON.stringify(error)})
        }
    },

// ===============================================================================================================================================

    createConversationInFreshchat : async function(options){

        try
        {
            console.log("this is a function to create a new conversation for user...")

            let requestUrl = `${options.iparams.freshchat_domain}/conversations`

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${options.iparams.freshchat_api_key}`
                }


            data = {
                "status":"new",
                "messages":[
                   {
                      "message_parts":[
                         {
                            "text":{
                               "content": "Hii! Need help in receiving the refund."
                            //    "<pre>----------------incoming chat from-----------------------</pre>"
                            }
                         }
                      ],
                      "channel_id":"757d03e7-4555-4d27-8987-37db637b9ff3",
                      "message_type":"normal",
                      "actor_type": "user",
                      "actor_id":"f9f2a57d-f891-4a0e-8bf8-3a061b832204"
                   }
                ],
                "channel_id":"757d03e7-4555-4d27-8987-37db637b9ff3",
                "properties":{
                   "priority":"Low",
                   "cf_type":"General Query",
                   "cf_rating":"3",
                   "cf_supported_products":[
                      "Freshchat",
                      "Freshdesk"
                   ]
                },
                "users":[
                   {
                      "id":"f9f2a57d-f891-4a0e-8bf8-3a061b832204"
                   }
                ]
             }

            var options = { headers:headers,body:JSON.stringify(data)};

            console.log("OPTIONS.......",options)

            var result = await $request.post(requestUrl,options)
            console.log("this is the result....",result)
            renderData({ status: 200, message: result})


        }catch(error){
            console.log("This is the error from createconversation function",error)
            renderData({"status":400,message:JSON.stringify(error)})
        }
    },

}