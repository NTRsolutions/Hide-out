$(document).ready(function() {

var industries;
var i =0;

    $.ajax({
        method:"GET",
        url:"json/industries.json",
        }).done(    function(result){ 
            var data="";
           //result=JSON.parse(result);
           industries = result;
            var keys=[];

            for(var k in result)
                keys.push(k);

            for(i=0;i<keys.length;i++)
                    data +="<option value='"+keys[i]+"'>"+keys[i]+"</option>"; 

            $("#destination").html(data);
            $("#destination1").html(data);
            $("#destination2").html(data);


    var indus = document.getElementById("destination").value;
    var industries_available="";
    for(i=0;i<industries[indus].length;i++)
        industries_available+="<option value='"+industries[indus][i].industry+"'>"+industries[indus][i].industry+"</option>"; 
    $('#industry').html(industries_available);

     var indus = document.getElementById("destination1").value;
    var industries_available="";
    for(i=0;i<industries[indus].length;i++)
        industries_available+="<option value='"+industries[indus][i].industry+"'>"+industries[indus][i].industry+"</option>"; 
    $('#industry1').html(industries_available);

     var indus = document.getElementById("destination2").value;
    var industries_available="";
    for(i=0;i<industries[indus].length;i++)
        industries_available+="<option value='"+industries[indus][i].industry+"'>"+industries[indus][i].industry+"</option>"; 
    $('#industry2').html(industries_available);





    });
        
        $('#destination').change(function(){
        indus = document.getElementById("destination").value;
        industries_available="";
    for(i=0;i<industries[indus].length;i++)
        industries_available+="<option value='"+industries[indus][i].industry+"'>"+industries[indus][i].industry+"</option>"; 
    $('#industry').html(industries_available);


    });


    $('#destination1').change(function(){
        indus = document.getElementById("destination1").value;
        industries_available="";
    for(i=0;i<industries[indus].length;i++)
        industries_available+="<option value='"+industries[indus][i].industry+"'>"+industries[indus][i].industry+"</option>"; 
    $('#industry1').html(industries_available);


    });


    $('#destination2').change(function(){
        indus = document.getElementById("destination2").value;
        industries_available="";
    for(i=0;i<industries[indus].length;i++)
        industries_available+="<option value='"+industries[indus][i].industry+"'>"+industries[indus][i].industry+"</option>"; 
    $('#industry2').html(industries_available);


    });




    });





function validate(){



 $("#inquiryform").validate({
    
        // Specify the validation rules
        rules: {
            
            fname: "required",
            email: "required",
            total: "required",
            address:"required",
            date:"required",
            phone:"required",
            address:"required"
           
        },
        
        // Specify the validation error messages
        messages: {
            fname: "Please enter first name",
            email: "Please enter valid email",
            total:  "Please enter total passengers(approx)",             
            address:"Please enter departure address",
            date:"Please select departure date",
            phone: "Please enter phone number",
            address:"Please enter departure address"
            
        },
        
        submitHandler: function(form) {
          popup();
        }
    });



}






function popup(){

var fname=document.getElementById("fname").value;
var email=document.getElementById("email").value;
var total=document.getElementById("total").value;
var address=document.getElementById("address").value;
var lname=document.getElementById("lname").value;
var phone=document.getElementById("phone").value;
var mention = document.getElementById("mention").value;
var designation = document.getElementById("designation").value;
var days = document.getElementById("days").value;
var destination = document.getElementById("industry").value;
var destination1 = document.getElementById("industry1").value;
var destination2 = document.getElementById("industry2").value;
var dd = document.getElementById("date").value;
    var date = new Date(dd)
    var month = parseInt(date.getMonth())+1

    var actual_date="";
     actual_date = date.getDate()+"\/"+month +"\/"+date.getFullYear()


var type = document.getElementsByName('type');
var type_value;
for(var i = 0; i < type.length; i++){
    if(type[i].checked){
        type_value = type[i].value;
    }
}

var mode = document.getElementsByName('mode');
var mode_value;

    if(mode[0].checked)
        mode_value = mode[0].value;
    else
        mode_value = mode[1].value;


var meal = document.getElementsByName('meal');
var meal_value="";
for(var i = 0; i < meal.length; i++){
    if(meal[i].checked){
        meal_value = meal_value+", "+meal[i].value;
    }
}
meal_value = meal_value.substr(2,meal_value.length);



$('#mfname').html(fname);
$('#mlname').html(lname);
$('#memail').html(email);
$('#mtotal').html(total);
$('#maddress').html(address);
$('#mphone').html(phone);
$('#mmention').html(mention);
$('#mdesignation').html(designation);
$('#mdays').html(days);
$('#mdestination').html(destination);
$('#mdestination1').html(destination1);
$('#mdestination2').html(destination2);
$('#mtype').html(type_value);
$('#mmode').html(mode_value);
$('#mmeal').html(meal_value);
$('#mdate').html(date);


    $('#popup').modal('show');



    $('#booktrip').click(function(){

         $('#close').click();

             $.ajax({
        method:"POST",
        url:"mail/register.php",
        data: { fname:fname,email:email,total:total,
            address:address,lname:lname,phone:phone,
            mention:mention,designation:designation,
            type:type_value,mode:mode_value,
            meal:meal_value,days:days,
            destination:destination,destination1:destination1,
            destination2:destination2,date:actual_date}

        }).done(    function(result){ 
                    if(parseInt(result)){
                        $("#succes").modal('show');
                    $("#success").html("Trip Booked");
                        $("#inquiryform")[0].reset()
                       

                                }else{ 
                                    $("#fail").modal('show');
                                    $("#success").html(result);
                                }
             });



    }); 

}

