function SubForm (){
    $.ajax({
    url:"https://api.apispreadsheets.com/data/g3j6CSyf9UsdT8aJ/",
    type:"POST",
    data:$("#myForm").serializeArray(),
    success: function(){
        alert("Form Data Submitted :)")
    },
    error: function(){
        alert("There was an error :(")
    }
    });
    }