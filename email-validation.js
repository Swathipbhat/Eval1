function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function display() {
  DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
  message = "<ul><li><b>NAME: </b>" + document.form1.Firstname.value;
  message += "<li><b>EMAILADDRESS: </b>" + document.form1.Email.value;
  message += "<li><b>PHONE: </b>" + document.form1.Phone.value + "</ul>";
  DispWin.document.write(message);
}

function showPreview(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}