function displayTime(){
    var Time = new Date();
    var hrs = Time.getHours();
    var min = Time.getMinutes();
    var sec = Time.getSeconds();

    var session = document.getElementById('ampm');
    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }
    
    if(hrs < 10)
    {
        hrs = "0" + hrs;
    }

    if(min < 10)
    {
        min = "0" + min;
    }

    if(sec < 10)
    {
        sec = "0" + sec;
    }
   
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

setInterval(displayTime, 1000);

//     const set = document.getElementById("setalarm");
//    set.addEventListener("mouseover", ()=>{
//         set.innerHTML = "abc";
//       });

      let text = document.getElementsByClassName('good_wake');
      let img = document.getElementsByTagName('img');
      let grab = document.getElementsByClassName('grab')

      
      function sample()
      {
        
        let t = new Date();
        let hrs = t.getHours();

        let selecttag = document.querySelectorAll('select')
        let fetch1 = document.getElementById("Wake_up_time");
        let fetch2 = document.getElementById("Lunch_Time");
        let fetch3 = document.getElementById("Nap_Time");
        let fetch4 = document.getElementById("Night_Time");
        
            // console.log(selecttag[0]);
            // console.log(fetch1);
            let indexwake = selecttag[0].selectedIndex;
            let indexlunch = selecttag[1].selectedIndex;
            let indexevening = selecttag[2].selectedIndex;
            let indexnight = selecttag[3].selectedIndex;

            let item = selecttag[0].options[indexwake];
            let item2 = selecttag[1].options[indexlunch];
            let item3 = selecttag[2].options[indexevening];
            let item4 = selecttag[3].options[indexnight];

            console.log(item.textContent)
            fetch1.innerHTML = `Wake Up Time : ${item.textContent}`
            fetch2.innerHTML = `Lunch Time   : ${item2.textContent}`
            fetch3.innerHTML = `Nap Time     : ${item3.textContent}`
            fetch4.innerHTML = `Night Time   : ${item4.textContent}`

            console.log(item);
            console.log(item2);
            console.log(item3);
            console.log(item4);


        if(selecttag[0].value === hrs)
        {
            text[0].innerHTML = "GOOD MORNING!! WAKE UP !!"
            img[5].src = './morning.png'
            grab[0].innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!"
        }
        else if(selecttag[1].value === hrs)
        {
            text[0].innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP"
            img[5].src = './lunch.jpg'
            grab[0].innerHTML = "LET'S HAVE SOME LUNCH !!"

        }
        else if(selecttag[2].value === hrs)
        {
            text[0].innerHTML = "GOOD EVENING !!"
            img[5].src = './evening.jpg'
            grab[0].innerHTML = "STOP YAWNING,GET SOME TEA..ITS JUST EVENING!"

        }
        else if(selecttag[3].value === hrs)
        {
            text[0].innerHTML = "GOOD NIGHT !!"
            img[5].src = './night.jpg'
            grab[0].innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
        }
        // else{
        //     return "";
        // }
        

         

    }     

