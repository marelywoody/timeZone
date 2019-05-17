const mexico = (offset) => {
 const update = () => {
    timeZone = new Date();
    utc = timeZone.getTime() + (timeZone.getTimezoneOffset() * 60000);
    const date = new Date(utc + (3600000*offset));
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10 ) {
      seconds = "0" + seconds;
    }
    document.getElementById('mexicoHour').textContent = hours;
    document.getElementById('minuteMexico').textContent = minutes;
    document.getElementById('secondsMexico').textContent = seconds;
  }
  update();
  let interval = setInterval(update,1000);
}

const estocolmo = (offset) => {
  const update = () => {
    timeZone = new Date();
    utc = timeZone.getTime() + (timeZone.getTimezoneOffset() * 60000);
    const date = new Date(utc + (3600000*offset));
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10 ) {
      seconds = "0" + seconds;
    }
    document.getElementById('hoursEstocolmo').textContent = hours;
    document.getElementById('minutesEstocolmo').textContent = minutes;
    document.getElementById('secondsEstocolmo').textContent = seconds;
  }
  update();
  let interval = setInterval(update,1000);
}

const bali = (offset) => {
  const update = () => {
    timeZone = new Date();
    utc = timeZone.getTime() + (timeZone.getTimezoneOffset() * 60000);
    const date = new Date(utc + (3600000*offset));
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10 ) {
      seconds = "0" + seconds;
    }
    document.getElementById('hoursBali').textContent = hours;
    document.getElementById('minutesBali').textContent = minutes;
    document.getElementById('secondsBali').textContent = seconds;
  }
  update();
  let interval = setInterval(update,1000);
}

const tokio = (offset) => {
  const update = () => {
    timeZone = new Date();
    utc = timeZone.getTime() + (timeZone.getTimezoneOffset() * 60000);
    const date = new Date(utc + (3600000*offset));
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10 ) {
      seconds = "0" + seconds;
    }
    document.getElementById('hoursTokio').textContent = hours;
    document.getElementById('minutesTokio').textContent = minutes;
    document.getElementById('secondsTokio').textContent = seconds;
  }
  update();
  let interval = setInterval(update,1000);
}

tokio('+9.0');
mexico('-5.0');
estocolmo('+2.0');
bali('+8.0');