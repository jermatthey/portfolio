//var small = "10.99";
//var medium = "12.99";
//var large = "15.99";

//var thick = "1.99";



 function CreateCustOrder() {
    if ($("#CustomerOrder").valid()) {
        /* URL of the restapi.php script followed by the table that we want to insert */   
        /* You will need to customize the root of the URL to your Cloud 9 */
        var myURL= "https://the-insurgents-bellaval95.c9users.io/the-saucy-pie/restapi.php/CustOrder";
        
        /* POST method means insert a new record */
        var myMethod = "POST";
 
        /* Create the data object and add the values as properties to the object 
        The names of the properties must EXACTLY match the column names in the table  */

        var myData = {};
        myData.FirstName = document.getElementById("FirstName").value;
        myData.LastName = document.getElementById("LastName").value;
        myData.Email = document.getElementById("Email").value;
        myData.PhoneNumber = document.getElementById("PhoneNumber").value;
        myData.Salad = document.getElementById("Salad").value + document.getElementById("SaladQuan").value;
        
        if (document.getElementsByClassName("Breadsticks")[0].checked) {
        myData.Breadsticks = document.getElementsByClassName("CheesePizza")[0].value;
        }
        myData.Breadsticks = document.getElementById("BreadStyle").value + document.getElementById("BreadQuan").value;
        
        myData.Coke = document.getElementById("Coke").value;
        myData.DietCoke = document.getElementById("DietCoke").value;
        myData.DrPepper = document.getElementById("DrPepper").value;
        myData.Sprite = document.getElementById("Sprite").value;
        myData.SwtTea = document.getElementById("SwtTea").value;
        myData.UnswtTea = document.getElementById("UnswtTea").value;
        myData.Comments = document.getElementById("Comments").value;
        
        
        
        if (document.getElementsByClassName("CheesePizza")[0].checked) {
        myData.CheesePizza = document.getElementsByClassName("CheesePizza")[0].value;
        }
        myData.CheesePizza = document.getElementById("Cheese").value + document.getElementById("ChCrust").value + document.getElementById("ChSize").value + document.getElementById("ChQuan").value;
        
        
        if (document.getElementsByClassName("PepperoniPizza")[0].checked) {
        myData.PepperoniPizza = document.getElementsByClassName("PepperoniPizza")[0].value;
        }
        myData.PepperoniPizza = document.getElementById("Pepperoni").value + document.getElementById("PepCrust").value + document.getElementById("PepSize").value + document.getElementById("PepQuan").value;
        
        
        if (document.getElementsByClassName("HogPizza")[0].checked) {
        myData.HogPizza = document.getElementsByClassName("HogPizza").value;
        }
        myData.HogPizza = document.getElementById("Hog").value + document.getElementById("HogCrust").value + document.getElementById("HogSize").value + document.getElementById("HogQuan").value;
        
        
        if (document.getElementsByClassName("HawaiianPizza")[0].checked) {
        myData.HawaiianPizza = document.getElementsByClassName("HawaiianPizza").value;
        }
        myData.HawaiianPizza = document.getElementById("Hawaiian").value + document.getElementById("HawCrust").value + document.getElementById("HawSize").value + document.getElementById("HawQuan").value;
        
        
        if (document.getElementsByClassName("SupremePizza")[0].checked) {
        myData.SupremePizza = document.getElementsByClassName("SupremePizza").value;
        }
        myData.SupremePizza = document.getElementById("Supreme").value + document.getElementById("SupCrust").value + document.getElementById("SupSize").value + document.getElementById("SupQuan").value;
        
        if (document.getElementsByClassName("VeggiePizza")[0].checked) {
        myData.VeggiePizza = document.getElementsByClassName("VeggiePizza").value;
        }
        myData.VeggiePizza = document.getElementById("Veggie").value + document.getElementById("VegCrust").value + document.getElementById("VegSize").value + document.getElementById("VegQuan").value;
        
        
       
        $.ajax({
          method: myMethod,
          data: myData,
          url: myURL,
          async: false
        })
        
        /* AJAX complete - display the result in msg */
        
        .done(function( msg ) {
            alert(msg);
        });
    }
}