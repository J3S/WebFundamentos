$(document).ready(function() {
    var lineLabel;
    var lineData;
    var knobData;
    var knobColors;
    var knobLabels;
    $.getJSON("../../../data/estudiantes_sandbox/estadistica.json", function(data) {
        lineLabel = data.linechart.labels;
        lineData = data.linechart.data;
        knobData = data.knobChart.data;
        knobColors = data.knobChart.color;
        knobLabels = data.knobChart.labels;
        dibujarLineChart(lineLabel, lineData);
        dibujarKnobChart(knobData, knobColors, knobLabels);
        $(".dial").knob();
    });
})

function dibujarLineChart(labelsL, dataL) {
    var areaChartOptions = {
        //Boolean - If we should show the scale at all
        showScale: true,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: false,
        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",
        //Number - Width of the grid lines
        scaleGridLineWidth: 1,
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        //Boolean - Whether the line is curved between points
        bezierCurve: true,
        //Number - Tension of the bezier curve between points
        bezierCurveTension: 0.3,
        //Boolean - Whether to show a dot for each point
        pointDot: true,
        //Number - Radius of each point dot in pixels
        pointDotRadius: 4,
        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,
        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,
        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,
        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,
        //Boolean - Whether to fill the dataset with a color
        datasetFill: true,
        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
        //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: true,
        //Boolean - whether to make the chart responsive to window resizing
        responsive: true
    };
    var areaChartData = {
        labels: labelsL,
        datasets: [
            {
                fillColor: "rgba(60,141,188,0.9)",
                strokeColor: "rgba(60,141,188,0.8)",
                pointColor: "#3b8bba",
                pointStrokeColor: "rgba(60,141,188,1)",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(60,141,188,1)",
                data: dataL
            }
        ]
    };
    var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas);
    var lineChartOptions = areaChartOptions;
    lineChartOptions.datasetFill = false;
    lineChart.Line(areaChartData, lineChartOptions);
}


function dibujarKnobChart(values, colors, labels) {
    for (var i = 0; i < values.length; i++) {
        if (i < 3) {
            var div = $('<div class="col-xs-6 col-md-4 text-center"></div>');
        } else {
            var div = $('<div class="col-xs-6 col-md-6 text-center"></div>');
        }
        var input = $('<input type="text" class="dial" data-readonly="true" value="' + values[i] + '" data-width="120" data-height="120" data-fgColor="' + colors[i] + '">');
        var label = $('<div class="knob-label">' + labels[i] + '</div>');
        div.append(input);
        div.append(label);
        $("#nivel").append(div);
    }
    
}
