
function formValidation()
{
var uid = document.getElementById("userid");
var passid = document.getElementById("password");

   var uid_len = uid.value.length;
   if (uid_len == 0)
   {
      alert("User Id should not be empty");
      uid.focus();
      return false;
   }
   var uidv=uid.value;
   var letters=/^[A-Za-z]+$/;
   mx = 5, my=12;
   if(!letters.test(uidv))
   {
      alert("UserID must contain alphabets only");
      uid.focus();
      return false;
   }
   if(uid_len >= my || uid_len < mx)
   {
      alert("UserID length should be between "+mx+" to "+my);
      uid.focus();
      return false;
   }
   

   var passid_len = passid.value.length;
   if (passid_len == 0)
   {
      alert("Password should not be empty");
      passid.focus();
      return false;
   }
   if(passid_len >= my || passid_len < mx)
   {
      alert("Password length should be between "+mx+" to "+my);
      passid.focus();
      return false;
   }
   alert("LOGIN SUCCESSFUL");
  

 return true;
}
