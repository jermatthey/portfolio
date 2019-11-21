function CreateSurvey() {
    if ($("#RestaurantSurvey").valid()) {
 
        /* URL of the restapi.php script followed by the table (patient) that we want to insert */   
        /* You will need to customize the root of the URL to your Cloud 9 */
        var myURL= "https://jer-space-it-emerald-3610-ginjer.c9users.io/survey/survey.php/survey";
        
        /* POST method means insert a new record */
        var myMethod = "POST";
 
        /* Create the data object and add the values as properties to the object 
        The names of the properties must EXACTLY match the column names in the table  */

        var myData = {};
        
        myData.DateVisited = document.getElementById("DateVisited").value;
        
        if (document.getElementById("DineIn").checked) {
            myData.DineInTakeOut = document.getElementById("DineIn").value;
        }
        
        if (document.getElementById("TakeOut").checked) {
            myData.DineInTakeOut = document.getElementById("TakeOut").value;
        }
        
        if (document.getElementById("FoodExcellent").checked) {
            myData.FoodQuality = document.getElementById("FoodExcellent").value;
        }
        
        if (document.getElementById("FoodGood").checked) {
            myData.FoodQuality = document.getElementById("FoodGood").value;
        }
        
        if (document.getElementById("FoodAverage").checked) {
            myData.FoodQuality = document.getElementById("FoodAverage").value;
        }
        if (document.getElementById("FoodDissatisfied").checked) {
            myData.FoodQuality = document.getElementById("FoodDissatisfied").value;
        }
        
        if (document.getElementById("ServiceExcellent").checked) {
            myData.ServiceQuality = document.getElementById("ServiceExcellent").value;
        }
        
        if (document.getElementById("ServiceGood").checked) {
            myData.ServiceQuality = document.getElementById("ServiceGood").value;
        }
        
         if (document.getElementById("ServiceAverage").checked) {
            myData.ServiceQuality = document.getElementById("ServiceAverage").value;
        }

        if (document.getElementById("ServiceDissatisfied").checked) {
            myData.ServiceQuality = document.getElementById("ServiceDissatisfied").value;
        }
       
        if (document.getElementById("CleanlinessExcellent").checked) {
            myData.Cleanliness = document.getElementById("CleanlinessExcellent").value;
        }
        
         if (document.getElementById("CleanlinessGood").checked) {
            myData.Cleanliness = document.getElementById("CleanlinessGood").value;
        }

        if (document.getElementById("CleanlinessAverage").checked) {
            myData.Cleanliness = document.getElementById("CleanlinessAverage").value;
        }

         if (document.getElementById("CleanlinessDissatisfied").checked) {
            myData.Cleanliness = document.getElementById("CleanlinessDissatisfied").value;
        }
        
         if (document.getElementById("OrderExcellent").checked) {
            myData.OrderAccuracy = document.getElementById("OrderExcellent").value;
        }
        
        if (document.getElementById("OrderGood").checked) {
            myData.OrderAccuracy = document.getElementById("OrderGood").value;
        }

        if (document.getElementById("OrderAverage").checked) {
            myData.OrderAccuracy = document.getElementById("OrderAverage").value;
        }
        
        if (document.getElementById("OrderDissatisfied").checked) {
            myData.OrderAccuracy = document.getElementById("OrderExcellent").value;
        }
        
        if (document.getElementById("SpeedExcellent").checked) {
            myData.SpeedOfService = document.getElementById("SpeedExcellent").value;
        }
        
        if (document.getElementById("SpeedGood").checked) {
            myData.SpeedOfService = document.getElementById("SpeedGood").value;
        }
        
        if (document.getElementById("SpeedAverage").checked) {
            myData.SpeedOfService = document.getElementById("SpeedAverage").value;
        }
        
        if (document.getElementById("SpeedDissatisfied").checked) {
            myData.SpeedOfService = document.getElementById("SpeedDissatisfied").value;
        }
        
        if (document.getElementById("ValueExcellent").checked) {
            myData.Value = document.getElementById("ValueExcellent").value;
        }
        
         if (document.getElementById("ValueGood").checked) {
            myData.Value = document.getElementById("ValueGood").value;
        }
        
         if (document.getElementById("ValueAverage").checked) {
            myData.Value = document.getElementById("ValueAverage").value;
        }
        
         if (document.getElementById("ValueDissatisfied").checked) {
            myData.Value = document.getElementById("ValueDissatisfied").value;
        }

         if (document.getElementById("OverallExcellent").checked) {
            myData.OverallExperience = document.getElementById("OverallExcellent").value;
        }
        
        if (document.getElementById("OverallGood").checked) {
            myData.OverallExperience = document.getElementById("OverallGood").value;
        }
        
        if (document.getElementById("OverallAverage").checked) {
            myData.OverallExperience = document.getElementById("OverallAverage").value;
        }
        
        if (document.getElementById("OverallDissatisfied").checked) {
            myData.OverallExperience = document.getElementById("OverallDissatisfied").value;
        }
        myData.Comments = document.getElementById("Comments").value;
        myData.Name = document.getElementById("Name").value;
        myData.Age = document.getElementById("Age").value;
        myData.Email = document.getElementById("Email").value;


        
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
}function CreateSurvey() {
    if ($("#RestaurantSurvey").valid()) {
 
        /* URL of the restapi.php script followed by the table (patient) that we want to insert */   
        /* You will need to customize the root of the URL to your Cloud 9 */
        var myURL= "https://jer-space-it-emerald-3610-ginjer.c9users.io/survey/survey.php/survey";
        
        /* POST method means insert a new record */
        var myMethod = "POST";
 
        /* Create the data object and add the values as properties to the object 
        The names of the properties must EXACTLY match the column names in the table  */

        var myData = {};
        
        myData.DateVisited = document.getElementById("DateVisited").value;
        
        if (document.getElementById("DineIn").checked) {
            myData.DineInTakeOut = document.getElementById("DineIn").value;
        }
        
        if (document.getElementById("TakeOut").checked) {
            myData.DineInTakeOut = document.getElementById("TakeOut").value;
        }
        
        if (document.getElementById("FoodExcellent").checked) {
            myData.FoodQuality = document.getElementById("FoodExcellent").value;
        }
        
        if (document.getElementById("FoodGood").checked) {
            myData.FoodQuality = document.getElementById("FoodGood").value;
        }
        
        if (document.getElementById("FoodAverage").checked) {
            myData.FoodQuality = document.getElementById("FoodAverage").value;
        }
        if (document.getElementById("FoodDissatisfied").checked) {
            myData.FoodQuality = document.getElementById("FoodDissatisfied").value;
        }
        
        if (document.getElementById("ServiceExcellent").checked) {
            myData.ServiceQuality = document.getElementById("ServiceExcellent").value;
        }
        
        if (document.getElementById("ServiceGood").checked) {
            myData.ServiceQuality = document.getElementById("ServiceGood").value;
        }
        
         if (document.getElementById("ServiceAverage").checked) {
            myData.ServiceQuality = document.getElementById("ServiceAverage").value;
        }

        if (document.getElementById("ServiceDissatisfied").checked) {
            myData.ServiceQuality = document.getElementById("ServiceDissatisfied").value;
        }
       
        if (document.getElementById("CleanlinessExcellent").checked) {
            myData.Cleanliness = document.getElementById("CleanlinessExcellent").value;
        }
        
         if (document.getElementById("CleanlinessGood").checked) {
            myData.Cleanliness = document.getElementById("CleanlinessGood").value;
        }

        if (document.getElementById("CleanlinessAverage").checked) {
            myData.Cleanliness = document.getElementById("CleanlinessAverage").value;
        }

         if (document.getElementById("CleanlinessDissatisfied").checked) {
            myData.Cleanliness = document.getElementById("CleanlinessDissatisfied").value;
        }
        
         if (document.getElementById("OrderExcellent").checked) {
            myData.OrderAccuracy = document.getElementById("OrderExcellent").value;
        }
        
        if (document.getElementById("OrderGood").checked) {
            myData.OrderAccuracy = document.getElementById("OrderGood").value;
        }

        if (document.getElementById("OrderAverage").checked) {
            myData.OrderAccuracy = document.getElementById("OrderAverage").value;
        }
        
        if (document.getElementById("OrderDissatisfied").checked) {
            myData.OrderAccuracy = document.getElementById("OrderExcellent").value;
        }
        
        if (document.getElementById("SpeedExcellent").checked) {
            myData.SpeedOfService = document.getElementById("SpeedExcellent").value;
        }
        
        if (document.getElementById("SpeedGood").checked) {
            myData.SpeedOfService = document.getElementById("SpeedGood").value;
        }
        
        if (document.getElementById("SpeedAverage").checked) {
            myData.SpeedOfService = document.getElementById("SpeedAverage").value;
        }
        
        if (document.getElementById("SpeedDissatisfied").checked) {
            myData.SpeedOfService = document.getElementById("SpeedDissatisfied").value;
        }
        
        if (document.getElementById("ValueExcellent").checked) {
            myData.Value = document.getElementById("ValueExcellent").value;
        }
        
         if (document.getElementById("ValueGood").checked) {
            myData.Value = document.getElementById("ValueGood").value;
        }
        
         if (document.getElementById("ValueAverage").checked) {
            myData.Value = document.getElementById("ValueAverage").value;
        }
        
         if (document.getElementById("ValueDissatisfied").checked) {
            myData.Value = document.getElementById("ValueDissatisfied").value;
        }

         if (document.getElementById("OverallExcellent").checked) {
            myData.OverallExperience = document.getElementById("OverallExcellent").value;
        }
        
        if (document.getElementById("OverallGood").checked) {
            myData.OverallExperience = document.getElementById("OverallGood").value;
        }
        
        if (document.getElementById("OverallAverage").checked) {
            myData.OverallExperience = document.getElementById("OverallAverage").value;
        }
        
        if (document.getElementById("OverallDissatisfied").checked) {
            myData.OverallExperience = document.getElementById("OverallDissatisfied").value;
        }
        myData.Comments = document.getElementById("Comments").value;
        myData.Name = document.getElementById("Name").value;
        myData.Age = document.getElementById("Age").value;
        myData.Email = document.getElementById("Email").value;


        
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