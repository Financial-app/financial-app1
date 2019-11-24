var sp = 0;
var sv = 0;
var incomeg = 0;

function calculatebudget() {
    let spend = Number(document.getElementById("spending").value);
    let save = Number(document.getElementById("savings").value);
    let inc = Number(document.getElementById("income").value);
    sp = Number(spend);
    sv = Number(save);
    incomeg = Number(inc);

    let influx = inc - spend;
    if (influx > 0) {
        influx = influx * 52;
        var influxtext = influx.toString()
        document.getElementById("result").innerHTML="Your savings increase " + influxtext + " dollars each year"
    }

    else if (influx == 0) {
        document.getElementById("result").innerHTML="Congratulations, your budget is perfectly balanced!"
    }
    else  {
        let budgetweeks = save / Math.abs(influx);
        var budgettext = budgetweeks.toString();
        document.getElementById("result").innerHTML = "Your budget will last you " + budgettext + " weeks"
        
    }


};

function budgetgraph(){
    var starting = sv + 4*incomeg - 4*sp
    var d = [starting, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (i = 1; i < 12; i++){
        d[i] = d[i-1] + 4*income - 4*sp
    }




    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        width: 1225,
        height: 970,

        title:{
            text: "Your Savings over the Next Year"
        },
        axisY:{
            includeZero: false

        },
        axisX:{
            title: "Month"
        },
        data: [{
              		type: "line",
              		dataPoints: Object.assign({}, d)
              	}]
    });
    chart.render();

};
