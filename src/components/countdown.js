import React, { useState } from "react";
import "../style.css";
const Timer = () => {
  var countDownDate = new Date("MAY 3, 2022 20:30:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60));
    // var hours = Math.floor(
    //   (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    // );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML =
      days + " hr " + minutes + " min " + seconds + " sec ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

  return (
    <div className="timer-container">
      <p
        style={{
          fontFamily: "boston",
          fontSize: "30px",
          color: "white",
          textShadow: "2px 2px black",
        }}
        // id="demo"
      >
        3 rd of May at (15:00 (UTC))
      </p>
    </div>
  );
};

export { Timer };
