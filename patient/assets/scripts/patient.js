function CreatePatient() {
    if ($("#NewPatientRegistration").valid()) {
 
        /* URL of the restapi.php script followed by the table (patient) that we want to insert */   
        /* You will need to customize the root of the URL to your Cloud 9 */
        var myURL= "https://jer-space-it-emerald-3610-ginjer.c9users.io/itech-3650/patient/restapi.php/patient";
        
        /* POST method means insert a new record */
        var myMethod = "POST";
 
        /* Create the data object and add the values as properties to the object 
        The names of the properties must EXACTLY match the column names in the table  */

        var myData = {};
        myData.FirstName = document.getElementById("FirstName").value;
        myData.LastName  = document.getElementById("LastName").value;
        myData.Email = document.getElementById("Email").value;
        
        if (document.getElementById("Male").checked) {
        myData.Gender = document.getElementById("Male").value;
        }
        
         if (document.getElementById("Female").checked) {
        myData.Gender = document.getElementById("Female").value;
        }
        
    
        if (document.getElementById("NA").checked) {
            myData.Gender = document.getElementById("NA").value;
        }
        myData.Birthday = document.getElementById("Birthday").value;
        myData.Height = document.getElementById("Height").value;
        myData.Weight = document.getElementById("Weight").value;
        myData.PhoneNumber = document.getElementById("PhoneNumber").value;
        myData.MaritalStatus = document.getElementById("MaritalStatus").value;
        myData.Address = document.getElementById("Address").value;
        myData.City = document.getElementById("City").value;
        myData.State = document.getElementById("State").value;
        myData.Zip = document.getElementById("Zip").value;
         
         if (document.getElementById("Yes").checked) {
        myData.Medications = document.getElementById("Yes").value;
        }
        
        if (document.getElementById("No").checked) {
        myData.Medications = document.getElementById("No").value;
        }
        
        myData.MedicationsList = document.getElementById("MedicationsList").value;
        
        

        /* Perform AJAX call to process data 
        You have to supply the method, data, and url
        Also set the asynchronous flag to false, it seems to run better with the database */
        
        $.ajax({
          method: myMethod,
          data: myData,
          url: myURL,
          asynch: false
        })
        
        /* AJAX complete - display the result in msg */
        
        .done(function( msg ) {
            alert(msg);
        });
    }
}