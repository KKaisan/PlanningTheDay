var today = moment();
$("#currentDay").text(today.format("dddd MMM DD, YYYY"));

var button = $(".saveBtn")
    function currentTime() {
        var current = moment().hours()
        var timeblock = $(".time-block");


 timeblock.each(function () {
    var hour = parseInt($(this).attr("id"))


    if (hour === current) {
    $(this).children('.col-10').attr("class", "present col-10 description")

}
    else if (current > hour) {
    $(this).children('.col-10').attr("class", "past col-10 description")
}
    else {
    $(this).children('.col-10').attr("class", "future col-10 description")
}
})
}
currentTime()
