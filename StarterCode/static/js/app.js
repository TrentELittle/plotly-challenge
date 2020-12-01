// Creating function for Data plotting (Bar, gauge, bubble)
function getPlot(id) {
    // getting data from the json file
    d3.json("Data/samples.json").then((data)=> {
        console.log(data)