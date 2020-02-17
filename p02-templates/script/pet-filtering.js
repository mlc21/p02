function openPage(pageName) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer .tabPanel button");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function(node){
    node.style.backgroundColor="";
    node.style.color="";
  });
  tabButtons[panelIndex].styls.backgroundColor=colorCode;
  tabButtons[panelIndex].styls.color="white";
  tabPanels.forEach(function(node){
    node.style.display="";
  });
  tabPanels[panelIndex].style.display="block";
  tabPanels[panelIndex].style.backgroundColor="colorCode";
}
