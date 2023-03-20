function calculateConsumption(){
    let distance = document.getElementById('distance').value;
    let fuel = document.getElementById('fuel').value;
    let price = document.getElementById('price').value;

    let consumed = (fuel / (distance/100)).toFixed(2);
    let pricePer100km = (consumed * price).toFixed(2);

    document.getElementById('result').innerHTML = 
        "Consumption is " + consumed + 
        " Litres/100km ( $" + pricePer100km + " / 100km ) <br><br>Total Trip cost = " 
        + (fuel * price).toFixed(2);
    }