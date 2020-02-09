// battery Navigator

navigator.getBattery().then(status => {
    console.table(status);
    BatteryLevel(status.level);

    status.onlevelchange = () => BatteryLevel(status.level);
} )

 // id selectors declaration

 let level = document.querySelector('.level');
 let text = document.getElementById('text')

 // Adding style to level by percentage of battery

 function BatteryLevel(value) {
     level.style.height = value * 100 + '%';
     text.innerHTML = value * 100 + '%'

   
    
 }


