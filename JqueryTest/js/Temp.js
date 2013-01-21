$(function() {
  
       //Pop Box Starts
    $(toStaticHTML("#dialog-form")).dialog({
            autoOpen: false,
            height: 390,
            width: 400,
            modal: true,
            resizable:false,
            buttons: {
               
           
            Close: function() {
                $( this ).dialog( "close" );
            }
            },
            close: function() {
            }
        });
 
    $(toStaticHTML( "#create-temp" ))
            .button()
            .click(function() {
                $( "#dialog-form" ).dialog( "open" );
            });
        //pop Box Ends

       

    });