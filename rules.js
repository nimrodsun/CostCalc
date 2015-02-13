$(document).ready(function () {
    $('<div/>', {
        'class' : 'extraPerson', html: GetHtml()
    }).appendTo('#container'); //Get the html from template
    $('#addRow').click(function () {
        $('<div/>', {
            'class' : 'extraPerson', html: GetHtml()
        }).hide().appendTo('#container').slideDown('slow');//Get the html from template and hide and slideDown for transtion.

    });
})
function GetHtml() //Get the template and update the input field names
{
    var len = $('.extraPerson').length;
    var $html = $('.extraPersonTemplate').clone();
    $html.find('[name=firstname]')[0].name="firstname" + len;
    $html.find('[name=lastname]')[0].name="lastname" + len;
    $html.find('[name=gender]')[0].name="gender" + len;
    return $html.html();
}/**
 * Created by A400097 on 13/02/2015.
 */
