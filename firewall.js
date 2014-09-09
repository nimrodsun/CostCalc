function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
$('.ip').bind('keyup', function() {
    $('#form').delay(200).submit();

    //Cost per Client
    var cpc =  parseInt($('#CPC').val());
    //Number of years
    var ny =  parseInt($('#NY').val());
    //Clients added per year
    var cpy =  parseInt($('#CPY').val());
    //Firewall total cost
    var fwt = parseInt($('#FWT').val()) ||parseInt(0);
    var total =  parseInt(0);
    var clients =  parseInt(0);
    var output = "";
    var leftover =  parseInt(0);

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
