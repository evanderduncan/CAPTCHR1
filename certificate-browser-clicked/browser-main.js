window.onload = function() {
    const form = document.getElementById('theform');
    console.log('Form:', form);
    const input = document.getElementById('google-search');
    const submit = document.getElementById('search');
    const error = document.getElementById('error');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submit behavior
      console.log('Form submitted');
      
      if (input.value.includes('captchr') || input.value.includes('CAPTCHR')) {
        console.log('Redirecting to ../browser-searched/browser-searched.html'); // Log a message to the console
        window.location.href = '../certificate-browser-searched/browser-searched.html'; // Redirect to the specified URL
      } else {
        console.log('Input does not contain captchr or CAPTCHR'); // Log a message to the console
        error.classList.remove('hidden');
        
      }
    });
  };

  function display_ct7() {
    var x = new Date()
    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    hours = x.getHours( ) % 12;
    hours = hours ? hours : 12;
    hours=hours.toString().length==1? 0+hours.toString() : hours;
    
    var minutes=x.getMinutes().toString()
    minutes=minutes.length==1 ? 0+minutes : minutes;
    
    var seconds=x.getSeconds().toString()
    seconds=seconds.length==1 ? 0+seconds : seconds;
    
    var month=(x.getMonth() +1).toString();
    month=month.length==1 ? 0+month : month;
    
    var dt=x.getDate().toString();
    dt=dt.length==1 ? 0+dt : dt;
    
    var x1=month + "/" + dt + "/" + x.getFullYear(); 
    x1 = x1 + " - " +  hours + ":" +  minutes + ":" +  seconds + " " + ampm;
    document.getElementById('ct7').innerHTML = x1;
    display_c7();
     }
     function display_c7(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct7()',refresh)
    }
    display_c7()
  