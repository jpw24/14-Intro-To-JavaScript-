// from data.js
var tableData = data;

var tbody=d3.select("tbody");

// YOUR CODE HERE!
//Step 1
tableData.forEach((sighting)=>{
    var row=tbody.append("tr");
    Object.entries(sighting).forEach(function([key,value]){
        var cell=tbody.append("td");
        cell.text(value);
    });
});
//Step 2
var filter=d3.select("#filter-btn");


filter.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var dateElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var dateValue = dateElement.property("value");
    //filter by the date
    if (dateValue.toString().length>0){
        var filtered_data=tableData.filter(sighting=>sighting.datetime===dateValue);
    }
    else{
        var filtered_data=tableData;
    }
    //city element
    var cityElement=d3.select("#city");
    //city value
    var cityValue=cityElement.property("value");
    //filter by the city
    if (cityValue.length>0){
        filtered_data=filtered_data.filter(sighting=>sighting.city===cityValue);
    }

    // state element
    var stateElement=d3.select("#state");
    //state value
    var stateValue=stateElement.property("value");
    //filter by the state
    if (stateValue.length>0){
        filtered_data=filtered_data.filter(sighting=>sighting.state===stateValue);
    }

    // country element
    var countryElement=d3.select("#country");
    //country value
    var countryValue=countryElement.property("value");
    //filter by the country
    if (countryValue.length>0){
        filtered_data=filtered_data.filter(sighting=>sighting.country===countryValue);
    }
    // shape element
    var shapeElement=d3.select("#shape");
    //shape value
    var shapeValue=shapeElement.property("value");
    //filter by the shape
    if (shapeValue.length>0){
        filtered_data=filtered_data.filter(sighting=>sighting.shape===shapeValue);
    }

    d3.select("tbody").html("");
    filtered_data.forEach((sighting)=>{
        var row=tbody.append("tr");
        Object.entries(sighting).forEach(function([key,value]){
            var cell=tbody.append("td");
            cell.text(value);
        });
    });
  });