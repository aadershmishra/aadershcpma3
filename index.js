document.getElementById("findlocation").addEventListener("click",findlocation);
function findlocation(){
    var watchID=
        navigator.geolocation.getCurrentPosition(onSuccess,onError);
    function onSuccess(position){
      alert('Latitude:'       +
           position.coords.latitude      +'\n'+
           'Longitude:'   +
           position.coords.longitude   +'\n'
           ); 
        
    }
    function onError(error){
      alert('code:'    + error.code    +'\n'+
           'message:' + error.message +'\n');  
        
    }
        
        
    }
    
    
    
