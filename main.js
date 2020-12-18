var product = {};
var  productArray = [];
function validateForm() {
  var category = $("#category").val();
  var code =  $("#code").val();
  var name =  $("#name").val();
  var hscode =  $("#hscode").val();
  var threshold = $("#threshold").val();
  var initial =  $("#initial").val();
  var purchase = $("#purchase").val();
  var sales =  $("#sales").val();
  var description =  $("#description").val();
  var status ;
  if (document.getElementById("radio1").checked) {
  status = document.getElementById("radio1").value;
  } else if (document.getElementById("radio2").checked) {
  status = document.getElementById("radio2").value;
  }else{
    status = document.getElementById("radio3").value;
  }

  product["category"] = category;
  product["code"] = code;
  product["name"] = name;
  product["hscode"] = hscode;
  product["threshold"] = threshold;
  product["initial"] = initial;
  product["purchase"] = purchase;
  product["sales"] = sales;
  product["status"] = status;
  product["description"] = description;


  if(product.id){
    product.id=product.id;
    var myJSON = JSON.stringify(product);
    $.ajax({
        url: ' https://5fd6ee409dd0db0017ee8a2e.mockapi.io/PRODUCT/'+ product.id,
        type: 'PUT',
        async: false,
        dataType: "json",
        data: myJSON,
        contentType: 'application/json',
        success: function (response) {
          window.location.replace("index.html");
        }
      });
  }
else{
  var myJSON = JSON.stringify(product);
  $.ajax({
    url: ' https://5fd6ee409dd0db0017ee8a2e.mockapi.io/PRODUCT',
    type: 'POST',
    async: false,
    dataType: "json",
    data: myJSON,
    contentType: 'application/json',
    success: function (response) {
      window.location.replace("index.html");

    }
  });
console.log(product);

}
}
$(document).ready(function () {
    var url_string = (window.location.href).toLowerCase();
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    $.ajax({
      url: ' https://5fd6ee409dd0db0017ee8a2e.mockapi.io/PRODUCT/' + id,
      type: 'GET',
      async: false,
      dataType: "json",
      contentType: 'application/json',
      success: function (response) {
        product = response;
        console.log(product);
        $("#category").val(product.category);
         $("#code").val(product.code);
        $("#name").val(product.name);
        $("#hscode").val(product.hscode);
        $("#threshold").val(product.threshold);
        $("#initial").val(product.initial);
        $("#purchase").val(product.purchase);
        $("#sales").val(product.sales);
        $("#description").val(product.description);



        if(product.status == "option1"){
          $("#radio1").prop("checked", "true");
        }
        else if (product.status == "option2"){
          $("#radio2").prop("checked", "true");
      
        }
        else {
          $("#radio3").prop("checked","true");
        }
       
      }
  
    });
  });
