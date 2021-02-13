import React from 'react'


class myChatBot extends React.Component {

   componentDidMount(){
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"347f5a65c78dc6748262dbcdfa11e3662","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
   }

   render(){
       return <div></div>
   } 


}


export default myChatBot