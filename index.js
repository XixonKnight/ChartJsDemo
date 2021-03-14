var data = [12, 19, 3, 5, 10, 3]
var option = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}

var scalesLine = {
    yAxes: [{
        ticks: {
            beginAtZero: true
        }
    }]
}

var bgdColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
]
var borderColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
]


/// chartLine

var ctx = document.getElementById('chartLine').getContext('2d');
var chartLine = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Line Chart',
            data: data,
            backgroundColor: bgdColor,
            borderColor: borderColor,
            borderWidth: 1
        }]
    },
    options: {
        scales: scalesLine,
        y: {
            stacked: true
        }
    }
});
// ChartBar
var ctx = document.getElementById('chartBar').getContext('2d');
var chartBar = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Bar Chart',
            data: data,
            backgroundColor: bgdColor,
            borderColor: borderColor,
            borderWidth: 1,
            barPercentage: 2.5,
            barThickness: 8,
            maxBarThickness: 20,
            minBarLength: 2,
        }]
    },
    options: option
});

//Chart radar
var ctx = document.getElementById('chartRadar').getContext('2d');
var chartRadar = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Radar Chart',
            data: data,
            backgroundColor: bgdColor,
            borderColor: borderColor,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 50,
                suggestedMax: 100
            }
        }
    }
});

//polarArea

var ctx = document.getElementById('polarArea').getContext('2d');
var polarArea = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Bar Chart',
            data: data,
            backgroundColor: bgdColor,
            borderColor: borderColor,
            borderWidth: 1,
        }]
    },
    options: option
});


///propagate
// var ctx = document.getElementById('propagate').getContext('2d');
// var propagate = new Chart(ctx, {
//     type: 'polarArea',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             datasets: [
//                 { fill: 'origin' }, // 0: fill to 'origin'
//                 { fill: '-1' }, // 1: fill to dataset 0
//                 { fill: 1 }, // 2: fill to dataset 1
//                 { fill: false }, // 3: no fill
//                 { fill: '-2' } // 4: fill to dataset 2
//             ]
//         }]
//     },
//     options: {
//         scales:s
//         plugins: {
//             filler: {
//                 propagate: true
//             }
//         }
//     }
// });