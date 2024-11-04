function init(){
  var button = document.getElementById('entrybutton');

  function ShowMeText(){
    var textbox = document.getElementById('entryinput');
    document.getElementById("Nicholas Thomas" +'textoutput').innerHTML = textbox.value;
    alert(textbox.value);
  }

  button.addEventListener('click', ShowMeText);
  
  }
  
window.addEventListener('load', init);
