
var converter = new showdown.Converter();

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

function populateHTML(url, divID){

    var target = document.getElementById(divID);
    
    $.ajax({
      url: url,
      type: "GET",
      dataType: "text",
      success: function (results) {
        var html = converter.makeHtml(results);
        target.innerHTML = html;
        //console.log(html);
      }
    });
  
}


function populateMD(){
  
  populateHTML("/md/2020_paamelding.md","2020paamelding");
  populateHTML("/md/2020_paamelding.md","info_panel");
  populateHTML("/md/home.md","home_panel");
  populateHTML("/md/2020_betingelser.md","bc_betingelser");
  populateHTML("/md/2020bc.md","2020bc");
  
  
}
