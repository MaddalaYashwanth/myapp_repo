


const Greeting=()=>{
    var GrettingText="";
        const Greet1 = (a) =>{
            // var GrettingText="";
            if(a.getHours()>=16 || a.getHours()<6){
              GrettingText=`Good night user, today date was ${a.getDate()}, ${a.getMonth()+1}, ${a.getFullYear()}.`;
            }
            else if(a.getHours()>=13 && a.getHours()<16){
                GrettingText=`Good evening user, today date was ${a.getDate()}, ${a.getMonth()+1}, ${a.getFullYear()}.`;
            }
            else if(a.getHours()>=12 && a.getHours()<13){
                GrettingText=`Good afternoon user, today date was ${a.getDate()}, ${a.getMonth()+1}, ${a.getFullYear()}.`;
            }
             else{
                GrettingText=`Good morning user, today date was ${a.getDate()}, ${a.getMonth()+1}, ${a.getFullYear()}.`;
            }
          }
        Greet1(new Date());  
        return  GrettingText;
}

export default Greeting;