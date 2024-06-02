
        //Create a time data function
        function currentTime() {
            var d = new Date(); //will get current date
            var hr = d.getHours(); //will get current hours
            var min = d.getMinutes();
            var sec = d.getSeconds();
            var ampm; //this sill declare empty variable to store AM or PM
            var utchr = d.getUTCHours();
            var timeDiff = utchr -6;
            var adjTimeDiff = timeDiff < 0 ? timeDiff + 24 :timeDiff;
            var timeZone = "CST";
            //Adding 0 to single digits for seconds and minutes
           
            if(sec < 10) {
                sec = "0" +sec;
            }

            if(min < 10) {
                min = "0" + min;
            }

            if (hr == 12) {
                ampm = "PM";
                } else if (hr > 12) {
                    hr -= 12;
                    ampm = "PM";
                } else {
                        ampm = "AM";
                }
                var time = hr + ":" + min + ":" +sec + " " + ampm + " " + timeZone;
                document.getElementById("clock").innerText = time;

                setInterval(currentTime, 1000);
        }
        currentTime();
