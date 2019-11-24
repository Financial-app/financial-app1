

function calculatebudget() {
    let spend = Number(document.getElementById("spending").value);
    let save = Number(document.getElementById("savings").value);
    let inc = Number(document.getElementById("income").value);


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

function budgetgraph() {
    
    var sp = Number(document.getElementById("spending").value);;
    var sv = Number(document.getElementById("savings").value);
    var income = Number(document.getElementById("income").value);

    var starting = sv;
    var d = [starting, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (i = 1; i < 13; i++){
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
            includeZero: false,
            title: "Budget",
            labelFontSize: 50,
            titleFontSize: 70,

        },
        axisX:{
            title: "Month",
            labelFontSize: 50,
            titleFontSize: 70,
        },
        data: [{
              		type: "line",
              		dataPoints: [
                        { label: "0", y: d[0] },
                        { label: "1", y: d[1] },
                        { label: "2", y: d[2] },
              		    { label: "3", y: d[3] },
                        { label: "4", y: d[4] },
              		    { label: "5", y: d[5] },
                        { label: "6", y: d[6] },
              		    { label: "7", y: d[7] },
                        { label: "8", y: d[8] },
              		    { label: "9", y: d[9] },
                        { label: "10", y: d[10] },
              		    { label: "11", y: d[11] },
                        { label: "12", y: d[12] }
              		            ]
              	}]
    });
    chart.render();

};
