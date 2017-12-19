<?php

$firstname = $_POST["fname"];
$lastname = $_POST["lname"];
$phone = $_POST["phone"];
$total = $_POST["total"];
$address = $_POST["address"];
$email = $_POST["email"];
$mention = $_POST["mention"];
$designation = $_POST["designation"];
$type = $_POST["type"];
$mode = $_POST["mode"];
$meal = $_POST["meal"];
$days = $_POST["days"];
$destination = $_POST["destination"];
$destination1 = $_POST["destination1"];
$destination2 = $_POST["destination2"];
$date = $_POST["date"];

//$port=getenv('s2g_mysql_port');
$hostname="localhost";
$username='bala1994';
$pwd='hideoutdata';
$conn=mysqli_connect($hostname,$username,$pwd)or die("CONNECTION FAILED");
 mysqli_select_db($conn,'hideout');
$qur="insert into inquiry_table(firstname,lastname,email,phone,subject,destination,destination1,destination2,date,passengers,meal,accomodation,transport,departure,mention,days)values('$firstname','$lastname','$email','$phone','$designation','$destination','$destination1','$destination2','$date','$total','$meal','$type','$mode','$address','$mention','$days')";
$result=mysqli_query($conn,$qur);

if($result){
// Create the email and send the message
$to = 'hideouttours16@gmail.com'; // Add your email address inbetween the 'hideouttours16@gmail.com' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Inquiry Form:  $firstname";
$email_body = "You have received a new message from your website Inquiry form.\n\n"."Here are the details:\n\n
First Name: $firstname\n\n
Last Name: $lastname\n\n
Designation: $designation\n\n
E-mail: $email\n\n
Phone: $phone\n\n
Destination 1: $destination\n\n
Destination 2: $destination1\n\n
Destination 3: $destination2\n\n
Departure Date: $date\n\n
Approximate no. of passengers: $total\n\n
No. of days: $days\n\n
Accomodation Type: $type\n\n
Mode of transport: $mode\n\n
Meal Preference: $meal\n\n
$address\n\n
$mention";


$headers = "From: $email\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email";   
mail($to,$email_subject,$email_body,$headers);


	echo "1";
}
else{
	echo "0";
//echo $firstname.$lastname.$phone.$total.$address.$email.$mention.$designation.$type.$mode.$meal.$days.$destination.$industry;

}






?>