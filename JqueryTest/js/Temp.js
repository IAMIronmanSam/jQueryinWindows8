$(function() {
  
       //Pop Box Starts
    $(toStaticHTML("#dialog-form")).dialog({
            autoOpen: false,
            height: 790,
            width: 900,
            modal: true,
            show: "blind",
            resizable:false,
        });
 
    $(toStaticHTML( "#create-temp" ))
            .button()
            .click(function() {
                $( "#dialog-form" ).dialog( "open" );
            });
        //pop Box Ends

       

    });