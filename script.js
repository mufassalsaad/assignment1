var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
function refresh(){
  if ( localStorage != null ){
    // console.log (localStorage.length);
    var commentkey='';
    var comment='';
    for (var i = 0; i < localStorage.length; i++){
      // console.log(localStorage.key(i));
      commentkey = localStorage.key(i);
      comment = JSON.parse(localStorage.getItem(commentkey));
      // console.log(comment.value.length);
      console.log(comment);
      add(comment);
  } 
  }
}
refresh();

// var txt = document.getElementsByTagName('input');
function store(ele) {
  if(event.key === 'Enter') {
      // alert(ele.value); 
      storeComment(ele);
      add(ele);  
      ele.value = '';


  }
}
// window.addEventListener('keypress', function (e) {
//     if (e.keyCode === 13) {
//       storeComment();
//       add();
//     }
// }, false);
var i=0;
function storeComment(comment) {
    while (comment.value != ''){
      var storeName = comment.id + [i] ;
      // alert(storeName);
      // alert(JSON.parse(localStorage.getItem(storeName)));
      if (JSON.parse(localStorage.getItem(storeName)) != null )
      {i++;
        storeName = comment.id + [i] ;
      }
      else {
        i=0;
        storeName = comment.id + [i] ;
      }
      
      localStorage.setItem(storeName, JSON.stringify({value: comment.value,id:comment.id }));
      return comment.value;
      // comment.value='';
    }
  }
  function add(comment) {
    //Create an input type dynamically.
    var element = document.createElement("input");
  
    //Assign different attributes to the element.
    element.setAttribute("type", "text");
    element.setAttribute("value", comment.value);
    // element.value = value;
    element.setAttribute("name", comment.id);
    element.classList.add('comment');
    element.readOnly = true;
  
    var foo = document.getElementById(comment.id);
  
    //Append the element in page (in span).
    foo.appendChild(element);
  }

  
  // var storedNames = JSON.parse(localStorage.getItem("names"));

  // save comment-------------------------------------------------------------------------------
  
  

  // save comment------------------------------------------------------