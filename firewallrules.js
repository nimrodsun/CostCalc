// Create a Global array to hold Host Groups
var HGAll=[];
var NGAll=[];


// A function to add new Host Groups to the Global Host Group Array
function addHG() {

    // Take the New Host Group Form and turn it into JSON.
    var HGObj = { "HGName":$("#HGName").val(), "HGZone":$("input:radio[name=HGZone]").val(), "HGDesc":$("#HGDesc").val(), "HGAddresses":[]};
    HGAll.push(HGObj);

    //Output to console and screen for debugging
    console.log(HGAll);
    var output = JSON.stringify(HGAll) + JSON.stringify(NGAll);
    $("#update").html(output);
}

function addNG() {

    var NGObj = {"NGName":$("#NGName").val(), "NGZone":$("input:radio[name=NGZone]").val(), "NGDesc":$("#NGDesc").val(), "NGNetworks":{}};
    NGAll.push(NGObj);


    //Output to console and screen for debugging
    console.log(NGAll);
    var output = JSON.stringify(HGAll) + JSON.stringify(NGAll);
    $("#update").html(output);
}

$(function() {
    //http://css-tricks.com/organic-tabs/
    $("#example-one").organicTabs();
});





