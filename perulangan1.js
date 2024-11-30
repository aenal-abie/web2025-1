for (i = 1; i <= 10; i++) {
    document.write("<p>Tutorial Javascript!</p>");
}

i = 1;
while (i <= 10) {
    document.write("<p>Tutorial Javascript!</p>");
    i++;
}

i = 202;
while (i % 4 == 1) {
    document.write("<p>Tutorial Javascript!</p>");
    i++;
}

i = 204;
do {
    document.write("<p>Tutorial Javascript!</p>");
    i++;
}
while (i % 4 == 1)


var languages = ["Javascript", "HTML", "CSS", "Typescript"];

for(i in languages){
    document.write(i+". "+ languages[i] + "<br/>");
}

var days = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];

days.forEach(function(day){
    document.write("<p>" + day + "</p>");
});

document.write("Ulangi kalimat ini! ".repeat(100));