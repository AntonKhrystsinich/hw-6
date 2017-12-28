function addToDo( text ) {
  
  var todoHTML = '<li class="task-item"></li>';
  
  var li = document.createElement("li");
  li.className = "task-item";
  
  var span = document.createElement("span");
  span.className = "task-text";
  span.innerHTML = text;
  
  span.addEventListener( "click", function() {
    toggleDone(this);
  } );
  
  var btn = document.createElement("button");
  btn.className = "delete-btn";
  btn.innerHTML = "X";
  
  btn.addEventListener( "click", function() {
    this.parentNode.parentNode.removeChild(li);
  });
  
  li.appendChild(span);
  li.appendChild(btn);
  
  document.getElementById("task-list").appendChild( li );
  
}

function addClicked() {
  
  var text = document.getElementById("task-text").value;
  addToDo( text );
  document.getElementById("task-text").value = "";
}

function checkEnterHit(event) {
  
  console.log( event.keyCode );
  if( event.keyCode === 13 ) {
    addClicked();
  }
}

function toggleDone( textElement ) {
  
  if( textElement.className.indexOf("complete") === -1 ) {
    textElement.className = "task-text complete";
  } else {
    textElement.className = "task-text";
  }
  
}