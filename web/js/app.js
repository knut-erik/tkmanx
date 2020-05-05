

//showdown - used to convert .md files to HTML
var converter = new showdown.Converter();
converter.setOption('tables', 'true');

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
  //populateHTML("/md/2020_paamelding.md","main-content",false);
  populateHTML("/md/home.md","main-content",false);
}

function populateLinks() {
  populateHTML("/md/links.md","main-content", false);
}

function populateBC() {
  populateHTML("/md/2020_paamelding.md","main-content", false);
  populateHTML("/md/2020bc.md","main-content", true);
  populateHTML("/md/2020_betingelser.md","main-content",true);
  

}


