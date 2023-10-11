exports = {

    searchContactByPhoneNumber: async function (options) {

        try{

            console.log("this is a search contact function in server file......")

            // let requestUrl = `${options.iparams.freshchat_domain}/v2/users?phone_no=+16425829625`
            // let requestUrl = `https://sandeza-inc-604283044066011944.myfreshworks.com//v2/users${encodeURIComponent()}`
            let requestUrl = `https://sandeza-inc-604283044066011944.myfreshworks.com//v2/users?phone_no=19266529503`
            console.log("request url......",requestUrl)
        
            var headers = {
            'Content-Type': 'application/json',
            //   Authorization: 'Bearer <%= iparam.freshchat_api_key %>',
            Authorization: 'Bearer eyJraWQiOiJjdXN0b20tb2F1dGgta2V5aWQiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmcmVzaGNoYXQiLCJzdWIiOiI5YzNkNGI0My1jODFlLTRiMzUtOGZmNC1mYzc4MWVlMTk1NTciLCJjbGllbnRJZCI6ImZjLThjMWY3ZTE1LWY1ZjctNDlhOC05NjQ1LWE2MGRiNDFhMDZmYSIsInNjb3BlIjoiYWdlbnQ6cmVhZCBhZ2VudDpjcmVhdGUgYWdlbnQ6dXBkYXRlIGFnZW50OmRlbGV0ZSBjb252ZXJzYXRpb246Y3JlYXRlIGNvbnZlcnNhdGlvbjpyZWFkIGNvbnZlcnNhdGlvbjp1cGRhdGUgbWVzc2FnZTpjcmVhdGUgbWVzc2FnZTpnZXQgYmlsbGluZzp1cGRhdGUgcmVwb3J0czpmZXRjaCByZXBvcnRzOmV4dHJhY3QgcmVwb3J0czpyZWFkIHJlcG9ydHM6ZXh0cmFjdDpyZWFkIGFjY291bnQ6cmVhZCBkYXNoYm9hcmQ6cmVhZCB1c2VyOnJlYWQgdXNlcjpjcmVhdGUgdXNlcjp1cGRhdGUgdXNlcjpkZWxldGUgb3V0Ym91bmRtZXNzYWdlOnNlbmQgb3V0Ym91bmRtZXNzYWdlOmdldCBtZXNzYWdpbmctY2hhbm5lbHM6bWVzc2FnZTpzZW5kIG1lc3NhZ2luZy1jaGFubmVsczptZXNzYWdlOmdldCBtZXNzYWdpbmctY2hhbm5lbHM6dGVtcGxhdGU6Y3JlYXRlIG1lc3NhZ2luZy1jaGFubmVsczp0ZW1wbGF0ZTpnZXQgZmlsdGVyaW5ib3g6cmVhZCBmaWx0ZXJpbmJveDpjb3VudDpyZWFkIHJvbGU6cmVhZCBpbWFnZTp1cGxvYWQiLCJpc3MiOiJmcmVzaGNoYXQiLCJ0eXAiOiJCZWFyZXIiLCJleHAiOjIwMDU5OTI4NTcsImlhdCI6MTY5MDM3MzY1NywianRpIjoiZWE5Nzk3MjMtMzYzMC00NDJjLWFjZWYtODQzZDJjYWViMzg4In0.be1eePagu6CnQg7e5Kikljia8C0ABzxMYpye1iLTGNA'
            }
            var options = { headers: headers }
            var result= await $request.get(requestUrl, options)
            console.log("this is the result....",result)
            //    let var1=result.message.data
            renderData({ status: 200, message: JSON.stringify(result)})
            // console.log('FILTERCONTACT', contact)
        }catch(error){
            console.log("This is the error from contact",error)
            renderData({"status":400,message:JSON.stringify(error)})
        }
    },

// ==============================================================================================================================================

    createUser : async function(options){

        try{
            console.log("this is the function to create a user using phone number...")

            // let requestUrl = `https://sandeza-inc-604283044066011944.myfreshworks.com/v2/users`
            let requestUrl='https://sandeza-inc-604283044066011944-862d83a4cf0436916903753.freshchat.com/v2/users'

            console.log("REQUESTURL.........",requestUrl)

            // data = {
            //      'email': 'milt.doe@mail.com', 
            //      'first_name': 'Milt', 
            //      'last_name': 'Doe',
            //      'phone': '235689714', 
            //      'properties': [ { 'name': 'orderId', 'value': '#1242' } ], 
            //      'reference_id': 'milton@doe' 
            //     }


            data = {
                'email': '235689714', 
                'first_name': '235689714', 
                'last_name': '-------------',
                'phone': '235689714', 
                'properties': [ { 'name': 'orderId', 'value': '#1242' } ], 
                'reference_id': '--------------' 
                }
            

            var headers = {
                'Content-Type': 'application/json',
                //   Authorization: 'Bearer <%= iparam.freshchat_api_key %>',
                Authorization: 'Bearer eyJraWQiOiJjdXN0b20tb2F1dGgta2V5aWQiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmcmVzaGNoYXQiLCJzdWIiOiI5YzNkNGI0My1jODFlLTRiMzUtOGZmNC1mYzc4MWVlMTk1NTciLCJjbGllbnRJZCI6ImZjLThjMWY3ZTE1LWY1ZjctNDlhOC05NjQ1LWE2MGRiNDFhMDZmYSIsInNjb3BlIjoiYWdlbnQ6cmVhZCBhZ2VudDpjcmVhdGUgYWdlbnQ6dXBkYXRlIGFnZW50OmRlbGV0ZSBjb252ZXJzYXRpb246Y3JlYXRlIGNvbnZlcnNhdGlvbjpyZWFkIGNvbnZlcnNhdGlvbjp1cGRhdGUgbWVzc2FnZTpjcmVhdGUgbWVzc2FnZTpnZXQgYmlsbGluZzp1cGRhdGUgcmVwb3J0czpmZXRjaCByZXBvcnRzOmV4dHJhY3QgcmVwb3J0czpyZWFkIHJlcG9ydHM6ZXh0cmFjdDpyZWFkIGFjY291bnQ6cmVhZCBkYXNoYm9hcmQ6cmVhZCB1c2VyOnJlYWQgdXNlcjpjcmVhdGUgdXNlcjp1cGRhdGUgdXNlcjpkZWxldGUgb3V0Ym91bmRtZXNzYWdlOnNlbmQgb3V0Ym91bmRtZXNzYWdlOmdldCBtZXNzYWdpbmctY2hhbm5lbHM6bWVzc2FnZTpzZW5kIG1lc3NhZ2luZy1jaGFubmVsczptZXNzYWdlOmdldCBtZXNzYWdpbmctY2hhbm5lbHM6dGVtcGxhdGU6Y3JlYXRlIG1lc3NhZ2luZy1jaGFubmVsczp0ZW1wbGF0ZTpnZXQgZmlsdGVyaW5ib3g6cmVhZCBmaWx0ZXJpbmJveDpjb3VudDpyZWFkIHJvbGU6cmVhZCBpbWFnZTp1cGxvYWQiLCJpc3MiOiJmcmVzaGNoYXQiLCJ0eXAiOiJCZWFyZXIiLCJleHAiOjIwMDU5OTI4NTcsImlhdCI6MTY5MDM3MzY1NywianRpIjoiZWE5Nzk3MjMtMzYzMC00NDJjLWFjZWYtODQzZDJjYWViMzg4In0.be1eePagu6CnQg7e5Kikljia8C0ABzxMYpye1iLTGNA'
                }

            var options = { headers:headers,body:JSON.stringify(data)};

            console.log("OPTIONS.......",options)

            var result = await $request.post(requestUrl,options)
            console.log("this is the result....",result)
            renderData({ status: 200, message: JSON.stringify(result)})

        }catch(error){
            console.log("This is the error from contact",error)
            renderData({"status":400,message:JSON.stringify(error)})
        }
    },

// ===============================================================================================================================================

    createConversation : async function(options){

        try
        {
            console.log("this is a function to create a new conversation for user...")

            let requestUrl='https://sandeza-inc-604283044066011944-862d83a4cf0436916903753.freshchat.com/v2/conversations'

            console.log("REQUESTURL.........",requestUrl)


            data = {
                "status": "new",
                "messages": [
                { 
                "message_parts": [{
                "text": {
                "content": "Hii! Need help in receiving the refund."
                }
                }],
                "channel_id": "58f07385-02b6-4f75-8746-98a72d810f68", 
                }],
                "users": [{ 
                    "id": "fb243a3e-1827-4638-a8cc-a39983f8554d"
                  }]
            }

            var headers = {
                'Content-Type': 'application/json',
                //   Authorization: 'Bearer <%= iparam.freshchat_api_key %>',
                Authorization: 'Bearer eyJraWQiOiJjdXN0b20tb2F1dGgta2V5aWQiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmcmVzaGNoYXQiLCJzdWIiOiI5YzNkNGI0My1jODFlLTRiMzUtOGZmNC1mYzc4MWVlMTk1NTciLCJjbGllbnRJZCI6ImZjLThjMWY3ZTE1LWY1ZjctNDlhOC05NjQ1LWE2MGRiNDFhMDZmYSIsInNjb3BlIjoiYWdlbnQ6cmVhZCBhZ2VudDpjcmVhdGUgYWdlbnQ6dXBkYXRlIGFnZW50OmRlbGV0ZSBjb252ZXJzYXRpb246Y3JlYXRlIGNvbnZlcnNhdGlvbjpyZWFkIGNvbnZlcnNhdGlvbjp1cGRhdGUgbWVzc2FnZTpjcmVhdGUgbWVzc2FnZTpnZXQgYmlsbGluZzp1cGRhdGUgcmVwb3J0czpmZXRjaCByZXBvcnRzOmV4dHJhY3QgcmVwb3J0czpyZWFkIHJlcG9ydHM6ZXh0cmFjdDpyZWFkIGFjY291bnQ6cmVhZCBkYXNoYm9hcmQ6cmVhZCB1c2VyOnJlYWQgdXNlcjpjcmVhdGUgdXNlcjp1cGRhdGUgdXNlcjpkZWxldGUgb3V0Ym91bmRtZXNzYWdlOnNlbmQgb3V0Ym91bmRtZXNzYWdlOmdldCBtZXNzYWdpbmctY2hhbm5lbHM6bWVzc2FnZTpzZW5kIG1lc3NhZ2luZy1jaGFubmVsczptZXNzYWdlOmdldCBtZXNzYWdpbmctY2hhbm5lbHM6dGVtcGxhdGU6Y3JlYXRlIG1lc3NhZ2luZy1jaGFubmVsczp0ZW1wbGF0ZTpnZXQgZmlsdGVyaW5ib3g6cmVhZCBmaWx0ZXJpbmJveDpjb3VudDpyZWFkIHJvbGU6cmVhZCBpbWFnZTp1cGxvYWQiLCJpc3MiOiJmcmVzaGNoYXQiLCJ0eXAiOiJCZWFyZXIiLCJleHAiOjIwMDU5OTI4NTcsImlhdCI6MTY5MDM3MzY1NywianRpIjoiZWE5Nzk3MjMtMzYzMC00NDJjLWFjZWYtODQzZDJjYWViMzg4In0.be1eePagu6CnQg7e5Kikljia8C0ABzxMYpye1iLTGNA'
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
    

// ==============================================================================================================================================================================


// exports = {

//     searchContactByPhoneNumber: function (options) {

//         try{

//             console.log("this is a search contact function in server file......")

//             // let requestUrl = `${options.iparams.freshchat_domain}/v2/users?phone_no=+16425829625`
//             // let requestUrl = `https://sandeza-inc-604283044066011944.myfreshworks.com//v2/users${encodeURIComponent()}`
//             let requestUrl = `https://sandeza-inc-604283044066011944.myfreshworks.com//v2/users?phone_no=19266529503`
//             console.log("request url......",requestUrl)
        
//             var headers = {
//             'Content-Type': 'application/json',
//             //   Authorization: 'Bearer <%= iparam.freshchat_api_key %>',
//             Authorization: 'Bearer eyJraWQiOiJjdXN0b20tb2F1dGgta2V5aWQiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmcmVzaGNoYXQiLCJzdWIiOiI5YzNkNGI0My1jODFlLTRiMzUtOGZmNC1mYzc4MWVlMTk1NTciLCJjbGllbnRJZCI6ImZjLThjMWY3ZTE1LWY1ZjctNDlhOC05NjQ1LWE2MGRiNDFhMDZmYSIsInNjb3BlIjoiYWdlbnQ6cmVhZCBhZ2VudDpjcmVhdGUgYWdlbnQ6dXBkYXRlIGFnZW50OmRlbGV0ZSBjb252ZXJzYXRpb246Y3JlYXRlIGNvbnZlcnNhdGlvbjpyZWFkIGNvbnZlcnNhdGlvbjp1cGRhdGUgbWVzc2FnZTpjcmVhdGUgbWVzc2FnZTpnZXQgYmlsbGluZzp1cGRhdGUgcmVwb3J0czpmZXRjaCByZXBvcnRzOmV4dHJhY3QgcmVwb3J0czpyZWFkIHJlcG9ydHM6ZXh0cmFjdDpyZWFkIGFjY291bnQ6cmVhZCBkYXNoYm9hcmQ6cmVhZCB1c2VyOnJlYWQgdXNlcjpjcmVhdGUgdXNlcjp1cGRhdGUgdXNlcjpkZWxldGUgb3V0Ym91bmRtZXNzYWdlOnNlbmQgb3V0Ym91bmRtZXNzYWdlOmdldCBtZXNzYWdpbmctY2hhbm5lbHM6bWVzc2FnZTpzZW5kIG1lc3NhZ2luZy1jaGFubmVsczptZXNzYWdlOmdldCBtZXNzYWdpbmctY2hhbm5lbHM6dGVtcGxhdGU6Y3JlYXRlIG1lc3NhZ2luZy1jaGFubmVsczp0ZW1wbGF0ZTpnZXQgZmlsdGVyaW5ib3g6cmVhZCBmaWx0ZXJpbmJveDpjb3VudDpyZWFkIHJvbGU6cmVhZCBpbWFnZTp1cGxvYWQiLCJpc3MiOiJmcmVzaGNoYXQiLCJ0eXAiOiJCZWFyZXIiLCJleHAiOjIwMDU5OTI4NTcsImlhdCI6MTY5MDM3MzY1NywianRpIjoiZWE5Nzk3MjMtMzYzMC00NDJjLWFjZWYtODQzZDJjYWViMzg4In0.be1eePagu6CnQg7e5Kikljia8C0ABzxMYpye1iLTGNA'
//             }
//             var options = { headers: headers }
//             $request.get(requestUrl, options).then(function(data){
//                 console.log("this is the result....",data)
//                 let contacts = JSON.parse(data.response);
//                 console.log("CONTACTS........",contacts)
//                 renderData({ status: 200, message: JSON.stringify(data)})

//             })
//             // console.log("this is the result....",result)
//             //    let var1=result.message.data
//             // renderData({ status: 200, message: JSON.stringify(result)})
//             // console.log('FILTERCONTACT', contact)
//         }catch(error){
//             console.log("This is the error from contact",error)
//             renderData({"status":400,message:JSON.stringify(error)})
//         }
// }
// }
