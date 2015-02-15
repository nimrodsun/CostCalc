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

    renderHG();
}

function addNG() {
    // Take the New Network Group Form and turn it into an object
    NGAll.push(new NetworkGroup($("#NGName").val(), $("input:radio[name=NGZone]").val(), $("#NGDesc").val()));

}

function renderHG() {
    var output = "<ul>";
    $.map(HGAll, function(HG){
        output += "<li> " + HG.name + "</li>";
        console.log(HG);

    });
    output += "</ul>";
    $("#result").html(output);
}

$(function() {
    //http://css-tricks.com/organic-tabs/
    $("#example-one").organicTabs();
});

