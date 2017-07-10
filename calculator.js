$("document").ready(function() {


  $('button').on("click", function() {
      let value = $(this).text();
      console.log(value);
      let calculation;
      if(value === "AC") {
       $('#input').val(" ");

     } else if("CE" === value) {
       $('#input').val(parseInt("0"));
     } else {
       let currentValue = $('#input').val();
       if (0 === parseInt(currentValue)) {
        $('#input').val(value);
     } else if ("=" === value) {
        let result = eval(currentValue);
        $('#input').val(result);
      } else {
        $('#input').val(currentValue + value);
      }
    }
  });


});
