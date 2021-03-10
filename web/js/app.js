//Showdown - used to convert .md files to HTML
var converter = new showdown.Converter();
converter.setOption('tables', 'true');
converter.setOption('openLinksInNewWindow', 'true');

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}


function populateHTML(url, divID, append){

  var target = document.getElementById(divID);
  
    $.ajax({
      url: url,
      type: "GET",
      dataType: "text",
      success: function (results) {

          //Convert the MD file which is the result, to HTML
          var html = converter.makeHtml(results);

          if(append){
            target.innerHTML = target.innerHTML + html;
          }else {
            target.innerHTML = html;
          }
          //console.log(html);
      },
      async: false
    });


}


function populateHome() {
  //populateHTML("/md/2021_paamelding.md","main-content",false);
  //populateHTML("/md/home.md","main-content",false);
  populateHR();
}

function populateLinks() {
  populateHTML("/md/links.md","main-content", false);
}

function populateHR() {
  //populateHTML("/md/2021_paamelding.md","main-content", false);
  populateHTML("/md/2021_hr.md","main-content", false);
  //populateHTML("/md/2021_betingelser.md","main-content",true);
  

}
