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

    else if (influx = 0) {
        document.getElementById("result").innerHTML="Congratulations, your budget is perfectly balanced!"
    }
    else  {
        let budgetweeks = save - influx;
        var budgettext = budgetweeks.toString();
        document.getElementById("result").innerHTML = "Your budget will last you " + budgettext + " weeks"
        
    }

};
