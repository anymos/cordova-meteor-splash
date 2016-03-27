/**
 * Created by aerinbkk on 26/3/16.
 */
console.log('Js started...')
function onReady(){
    console.log('On ready')
    navigator.splashscreen.show();
    var cpt = 30;
    var timeOut=setInterval(function(){
        --cpt;
        console.log('cpt:',cpt);
        if (cpt==0){
            navigator.splashscreen.hide();
            clearInterval(timeOut);
        }
    }, 1000);

    console.log('Show up in 30 s')
}




if (Meteor.isCordova)
{

    document.addEventListener('deviceready', onReady, false);
}
else
{
    document.addEventListener('ready',onReady);
}
