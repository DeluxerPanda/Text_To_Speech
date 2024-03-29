console.log("laddar background.js");
    chrome.runtime.onInstalled.addListener(() => {
      let contextMenuItem = {
          "id": "DeluxTextToSpeak",
          "title":"Delux TTS",
          "contexts": ["selection"]
      }
  
      chrome.contextMenus.create(contextMenuItem);
    });
      chrome.contextMenus.onClicked.addListener(function(info, tab){

      // Remove items under a certain key
      chrome.storage.local.remove(['key'], (result) => {
        console.log('Removed items for the key');
      });
         let word = info.selectionText;
         
        chrome.notifications.create(
          "Delux-notification",
          {
            type: "basic",
            iconUrl: "icon.png",
            title: "Delux TTS",
            message: "Hello there! click on the Delux TTS logo in the top corner"
          });
        chrome.notifications.clear(
          "Delux-notification"
        );
        console.log('Avisering klar!');
        if (info.selectionText == null){
          chrome.notifications.create(
            "Delux-notification",
            {
              type: "basic",
              iconUrl: "icon.png",
              title: "Delux TTS",
              message: "something went wrong",
            });
            chrome.notifications.clear(
              "Delux-notification"
            );
            
        }else{
          
          chrome.storage.local.set({key: word}, function() {
           

          });
       

        }

      })
