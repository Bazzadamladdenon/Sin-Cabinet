const log = document.querySelector(".log");
const inner = document.querySelector(".inner");
const indicator = document.querySelector(".indicator");

function setCoords(e) {
  // indicator.innerText=`ON`;
  if (e.offsetX > 199 && e.offsetX < 256 && e.offsetY > 95 && e.offsetY < 155) {
    indicator.innerHTML = "BLACK SWAN<br />IMP // TYPE I<br />D1 // D5 // D8<br /><br /><i>Who or what pushed you into this hole?</i><br />Losing my fiancé.<br /><br /><i>Who or what is keeping you from going over the edge?</i><br />My love for my neighbours.<br /><br /><i>What are you most ashamed of?</i><br />Wasting my own potential.<br /><br />Elizabeth Braband<br />† 2018-10-14";
    }
  else if (e.offsetX > 170 && e.offsetX < 197 && e.offsetY > 95 && e.offsetY < 155) {
    indicator.innerHTML = "C822<br />GEIST // TYPE II<br />D4 // D5 // D8<br /><br /><i>What are you trying to escape?</i><br />The incessant bullying at school.<br /><br /><i>What do you hate most about humanity?</i><br />How quickly they judge others.<br /><br /><i>What do you regret most?</i><br />Confessing to my best friend.<br /><br />Benjamin Herman<br />† 2018-11-02";
    }
  else if (e.offsetX > 445 && e.offsetX < 468 && e.offsetY > 165 && e.offsetY < 224) {
    indicator.innerHTML = "RASHŌMON<br />WRAITH // TYPE II<br />D3 // D4 // D6<br /><br /><i>Who wronged you?</i><br />My employers in the mob.<br /><br /><i>How were you wronged?</i><br />They killed me to tie up a loose end.<br /><br /><i>What are you unwilling to sacrifice?</i><br />My loyalty to the man who saved my life.<br /><br />Davion Ashley<br />† 2018-12-06";
    }
  else {
    indicator.innerText = `SELECT A RELIC`;
    }
  // log.innerText = `
  //   Offset X/Y: ${e.offsetX}, ${e.offsetY}
  //   Viewport X/Y: ${e.clientX}, ${e.clientY}
  //   Page X/Y: ${e.pageX}, ${e.pageY}
  //   Screen X/Y: ${e.screenX}, ${e.screenY}`;
}

inner.addEventListener("mousemove", setCoords);
inner.addEventListener("mouseenter", setCoords);
inner.addEventListener("mouseleave", setCoords);
