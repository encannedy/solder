// everything is inside the document.ready function so that nothing runs until the program is loaded
$(document).ready(function(){
    //Allows the use of moment.JS for input of month, day, year 
    var now = moment().format('MMMM Do YYYY');
    console.log(now);
    $("#currentDay").text(now);
// setting new variables to ID's identified in html
//will allow for local stroage t obe called
    var TextArea9= $("#myTextArea9");
    var TextArea10= $("#myTextArea10");
    var TextArea11= $("#myTextArea11");
    var TextArea12= $("#myTextArea12");
    var TextArea1= $("#myTextArea1");
    var TextArea2= $("#myTextArea2");
    var TextArea3= $("#myTextArea3");
    var TextArea4= $("#myTextArea4");
    var TextArea5= $("#myTextArea5");
//calling all button tags and creating listening event for save buttons
    $("button").on("click", function(){
        localStorage.setItem('hour-9', (TextArea9.val()));
        localStorage.setItem('hour-10', (TextArea10.val()));
        localStorage.setItem('hour-11', (TextArea11.val()));
        localStorage.setItem('hour-12', (TextArea12.val()));
        localStorage.setItem('hour-1', (TextArea1.val()));
        localStorage.setItem('hour-2', (TextArea2.val()));
        localStorage.setItem('hour-3', (TextArea3.val()));
        localStorage.setItem('hour-4', (TextArea4.val()));
        localStorage.setItem('hour-5', (TextArea5.val()));

    })
//setting local storage for each independent hour blcok
    TextArea9.append(localStorage.getItem("hour-9"));
    TextArea10.append(localStorage.getItem("hour-10"));
    TextArea11.append(localStorage.getItem("hour-11"));
    TextArea12.append(localStorage.getItem("hour-12"));
    TextArea1.append(localStorage.getItem("hour-1"));
    TextArea2.append(localStorage.getItem("hour-2"));
    TextArea3.append(localStorage.getItem("hour-3"));
    TextArea4.append(localStorage.getItem("hour-4"));
    TextArea5.append(localStorage.getItem("hour-5"));

    //turn time into an integer and set format to military time to call on "name" attribute set in html
    //set if statements to call on classes to set color coordinator for past, present and future.
    var currentHour= parseInt(moment().format('HH'));
    $("textarea").each(function(){
        var now= parseInt($(this).attr("name"));

        if (now< currentHour){
            $(this).addClass("past");
        }
        if(now > currentHour){
            $(this).addClass("future");
        }
        if(now === currentHour){
            $(this).addClass("present");
        }
    });
});
