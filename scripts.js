 //this function is for the forecast options
 let tabLinks = document.getElementsByClassName("tab-links");

 function openTab() {
     for (tabLink of tabLinks) {
         tabLink.classList.remove("active-tab");
     }

     event.currentTarget.classList.add("active-tab");

     //document.getElementById(tabName).classList.add("active-tab");
 }

 //this function is for the map options
 function openMapTab() {
     for (tabLink of tabLinks) {
         tabLink.classList.remove("active-map-tab");
     }

     event.currentTarget.classList.add("active-map-tab");
 }

 //these functions are for the news dots

 let newsDots = document.getElementsByClassName("circle");
 let newsTitles = document.getElementsByClassName("news-title");
 let newsImages = document.getElementsByClassName("news-img");

 //clicking the forward arrow
 function activeNewsCircleForward() {
     let currDotIndex;
     for (let i = 0; i < newsDots.length; i++) {
         if (newsDots[i].className.includes("active-news")) {
             currDotIndex = i;
             break;
         }
     }
     newsDots[currDotIndex].classList.remove("active-news");
     newsTitles[currDotIndex].classList.remove("active-dot");
     newsImages[currDotIndex].classList.remove("active-dot");

     if (currDotIndex === newsDots.length - 1) {
         newsDots[0].classList.add("active-news");
         newsTitles[0].classList.add("active-dot");
         newsImages[0].classList.add("active-dot");
     } else {
         newsDots[currDotIndex + 1].classList.add("active-news");
         newsTitles[currDotIndex + 1].classList.add("active-dot");
         newsImages[currDotIndex + 1].classList.add("active-dot");
     }
 }

 //clicking the back arrow
 function activeNewsCircleBackward() {
     console.log(newsDots);
     let currDotIndex;
     for (let i = newsDots.length - 1; i >= 0; i--) {
         if (newsDots[i].className.includes("active-news")) {
             currDotIndex = i;
             break;
         }
     }

     newsDots[currDotIndex].classList.remove("active-news");
     newsTitles[currDotIndex].classList.remove("active-dot");
     newsImages[currDotIndex].classList.remove("active-dot");

     if (currDotIndex === 0) {
         newsDots[newsDots.length-1].classList.add("active-news");
         newsTitles[newsTitles.length-1].classList.add("active-dot");
         newsImages[newsImages.length-1].classList.add("active-dot");
     } else {
         newsDots[currDotIndex - 1].classList.add("active-news");
         newsTitles[currDotIndex - 1].classList.add("active-dot");
         newsImages[currDotIndex - 1].classList.add("active-dot");
     }
 }

 //clicking one of the dots

 function clickDot(dotnum) {
     for (let i=0; i< newsDots.length; i++) {
         newsDots[i].classList.remove("active-news");
         newsTitles[i].classList.remove("active-dot");
         newsImages[i].classList.remove("active-dot");
     }

     newsDots[dotnum].classList.add("active-news");
     newsTitles[dotnum].classList.add("active-dot");
     newsImages[dotnum].classList.add("active-dot");
 }

 function updateTime() {
     const now = new Date();
     const currDateTime = now.toLocaleString();

     document.querySelector('#current-time').textContent = currDateTime;
 }
 updateTime()
 setInterval(updateTime, 10000);
