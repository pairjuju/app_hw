function greet(){
  console.log("YO~");
}
greet();

function logGreeting(fn){
  fn();
}
logGreeting(greet);

var greetMe =function(){
  console.log("hahahaha");
}
greetMe();
logGreeting(greetMe);