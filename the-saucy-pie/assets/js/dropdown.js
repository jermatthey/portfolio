/* global $ */


        // Pizza Image Gallery 
        
            $(document).ready(function(){
              $("#cheese").hover(function(){
                $("#cheese-add").slideDown(1000);
              });
            	
            	$("#pepperoni").hover(function(){
                $("#pep-add").slideDown(1000);
              });
            	
            	$("#veggie").hover(function(){
               $("#veggie-add").slideDown(1000);
              });
            	
            	$("#hog").hover(function(){
                $("#hog-add").slideDown(1000);
              });
        
            	$("#hawaiian").hover(function(){
                $("#hawaiian-add").slideDown(1000);
              });
            	
            	$("#supreme").hover(function(){
                $("#supreme-add").slideDown(1000);
              });
            
            });
            
            // Menu Side Slide Down Description
            
            
            $(document).ready(function(){
                
                $("#hover-breadsticks").hover(function(){
                    $("#breadsticks-description").slideDown(1000); 
                    });
                });
        
            
            $(document).ready(function(){
                
                $("#hover-breadsticks").mouseleave(function(){
                    $("#breadsticks-description").slideUp(1000); 
                    });
                });
            
            
            
            $(document).ready(function(){
                
                $("#hover-salad").hover(function(){
                $("#salad-description").slideDown(1000); 
                });
            });
        
            
             
            $(document).ready(function(){
                
                $("#hover-salad").mouseleave(function(){
                $("#salad-description").slideUp(1000); 
                });
            });
        
            
            
            // Back to top animation
            
            $(document).ready(function(){
                $('#scrollToTop').click(function(){
                $('html, body').animate({scrollTop : 0},800);
                return false;
            });
        });