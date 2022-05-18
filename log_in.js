function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
    var names =['adham','osama', 'hany','hossam','ahmed'];
    var passs =['123','456','789','147','258'];
    var colors=["purple", "blue", "yellow","red" ,"orange"];
    var  color='';
if ( names.includes(username)  && passs.includes(password) && passs.indexOf(password)== names.indexOf(username) ){

   color=colors[names.indexOf(username)];
    alert("welcom")
    window.location = "index.html";

}
    else{
        alert("chake password or username")
    }
}
