function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
$('.ip').bind('keyup', function() {
    $('#form').delay(200).submit();
    //console.log("Running");

    //Cost per Client
    var tcpc = $('#CPC').val();
    var cpc =  parseInt(tcpc);
    //Number of years
    var tny = $('#NY').val();
    var ny =  parseInt(tny);
    //Clients added per year
    var tcpy = $('#CPY').val();
    var cpy =  parseInt(tcpy);
    var tfwt = $('#FWT').val();
    var fwt = parseInt(tfwt);
    var total =  parseInt(0);
    var clients =  parseInt(0);
    var output = "";
    var leftover =  parseInt(0);

    //console.log("CPC: "+cpc);
   // console.log("NY: "+ny);
   // console.log("CPY: "+cpy);


    for (i = 0; i < ny; i++){

        clients = clients + cpy;
        total = (cpc * clients) + total;

}
    // If we made a loss
    if (total < fwt) {
        leftover = fwt - total;
        leftover = numberWithCommas(leftover);
        total = numberWithCommas(total);

        output = "<p> The total cost recovered is £" + total + "<br><br> We made a loss of £"+leftover+
            " <br><br> And brought on a total of "+clients+" clients</p>" ;
    } else {
        //We made a profit
        leftover = total - fwt;
        leftover = numberWithCommas(leftover);
        total = numberWithCommas(total);
        output = "<p> The total cost recovered is £" + total + "<br><br> We made £"+leftover+
            " <br><br> And brought on a total of "+clients+" clients</p>" ;
    }

// output = "<p> The total cost recovered is £" + total + "</p>" ;




$('#update').html(output);


});
