// Create a Global array to hold Host Groups
var HGAll=[];
var NGAll=[];

function HostGroup(Name, Zone, Desc) {
    this.name = Name;
    this.zone = Zone;
    this.desc = Desc;
    this.addresses = [];
}

function NetworkGroup(Name, Zone, Desc) {
    this.name = Name;
    this.zone = Zone;
    this.desc = Desc;
    this.networks = [];
}

function Network(Net, Subnet){
    this.network = Net;
    this.subnet = Subnet;
}

// A function to add new Host Groups to the Global Host Group Array
function addHG() {

    // Take the New Host Group Form and turn it into an object
    HGAll.push(new HostGroup($("#HGName").val(),$("input:radio[name=HGZone]").val(), $("#HGDesc").val() ));

    //var HGObj = { "HGName":$("#HGName").val(), "HGZone":$("input:radio[name=HGZone]").val(), "HGDesc":$("#HGDesc").val(), "HGAddresses":[]};
    // HGAll.push(HGObj);

    //Output to console and screen for debugging
    // console.log(HGAll);
    //var output = JSON.stringify(HGAll) + JSON.stringify(NGAll);
    //$("#update").html(output);
    renderHG();
}

function addNG() {

    NGAll.push(new NetworkGroup($("#NGName").val(), $("input:radio[name=NGZone]").val(), $("#NGDesc").val()));
    //var NGObj = {"NGName":$("#NGName").val(), "NGZone":$("input:radio[name=NGZone]").val(), "NGDesc":$("#NGDesc").val(), "NGNetworks":{}};
    //NGAll.push(NGObj);


    //Output to console and screen for debugging
    console.log(NGAll);
    var output = JSON.stringify(HGAll) + JSON.stringify(NGAll);
    $("#update").html(output);
}

function renderHG() {
    var output = "<ul>";
    $.each(HGAll, function(O, HG){
        output += "<li> " + HG.name + "</li>";
        console.log(HG);
        /**$.each(HG, function(Object, Value){
            output += "<li> Object: " + Object + " And Value: "+ Value + "</li>";
        }); **/

    });
    output += "</ul>";
    $("#result").html(output);
}

$(function() {
    //http://css-tricks.com/organic-tabs/
    $("#example-one").organicTabs();
});

