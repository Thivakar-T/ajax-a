var productArray=[];
$(document ).ready(function(){
    $.ajax({
      url: ' https://5fd6ee409dd0db0017ee8a2e.mockapi.io/PRODUCT',
      type: 'GET',
      async: false,
      dataType: "json",
      //data:"",
      contentType:'application/json',
      success: function (response) { 
        $.each(response,function(i,object){
            productArray.push(object);
        });
       console.log(productArray);
  }
  });
  addTable();
  });
  var sNo = 1;
  function addTable() {
   var table = "";
    //editText = undefined;
    for (i = 0; i < productArray.length; i++) {
        table += "<tr id='list_"+sNo+"'>";
        table += "<td>" + productArray[i].name + "</td>";
        table += "<td>" + productArray[i].hscode + "</td>";
        table += "<td>" + productArray[i].code + "</td>";

    table += '<td><button class="btn btn-primary mr-3" style="" onclick="Edit(' +productArray[i].id + ')">Edit</button><button class="btn btn-danger"  onclick="Delete(' +productArray[i].id + ')">Delete</button></td>';
      sNo++;
    }
    $("#displayTable").html(table);
  }
  function Edit(id){
    window.location.href="list.html?id="+id;
}
function Delete(id){
    $.ajax({
    url: ' https://5fd6ee409dd0db0017ee8a2e.mockapi.io/PRODUCT/'+id,
    type: 'DELETE',
    async: false,
    dataType: "json",
    data: "",
    contentType:'application/json',
    success: function (response) {
      $("#list_"+id).remove();
    }
    });
    }
