console.log(data);

// Create Trace1 for the Greek Data

var pairs = data.map(god => god.pair);
var greekResults = data.map(god => god.greekSearchResults);
var romanResults = data.map(god => god.romanSearchResults);
    
var trace1 = 
{
    x: pairs,
    y: greekResults,
    type: "bar",
    name: "Greek"
};



// Create Trace 2 for the Roman Data
var trace2 = 
{
    x: pairs,
    y: romanResults,
    type: "bar",
    name: "Roman"
};



// Combine both traces into an array
var plot_data = [trace1,trace2];



// Create layout
var layout = 
{
    title: "Greek vs. Roman gods search results",
    yaxis: { title: "Search Results"},
    xaxis: {automargin: true}
};



// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", plot_data, layout);