//Citations are in References&Citations sheet

    var sheet_style = document.getElementById("styling_sheet"); 
    var style_list = ["css/style.css", "css/dark_style.css"]; //array created with 2 css styling sheets

    //function that retrieves the default style sheet or the one last opened on the site

    window.onload = function(){ //function that executes as soon as page is loaded

    //the last saved styling_sheet is linked from local storage
        if(localStorage && localStorage.getItem("styling_sheet"))
            sheet_style.href = localStorage.getItem("styling_sheet");
    };

    function change_style(){ //function to change between sheets

        //sets the css sheet loaded before pressing the button as the current sheet
        var style_pre_change = sheet_style.href;

        //sheet_style.href is updated with the alternate styling sheet 
        //if sheet_style was css, it is updated to dark_style

        var style_post_change;

        if(style_pre_change.endsWith(style_list[0]))
            style_post_change = style_list[1];

        //else if sheet_style was dark_style, it is updated to css

        else if(style_pre_change.endsWith(style_list[1]))
            style_post_change = style_list[0];

        //the sheet style linked is updated
        sheet_style.href = style_post_change;

        //localstorage is updated to store the last selected styling sheet
        if(localStorage)
            localStorage.setItem("styling_sheet", style_post_change);
    }