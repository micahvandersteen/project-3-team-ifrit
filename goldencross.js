d3.csv("Data/5DowCompanies_DJIA.csv").then(function(data) {
    console.log(data);
    var selector = [];
    for (i=0; i < data.length; i++) {
        var symbol = data[i]["Symbol"];
        if (selector.includes(symbol) == false) {
            selector.push(symbol);
        }
    }
    console.log(selector);
    
    var select = document.getElementById("symbolselect");
    for (var i = 0; i<selector.length; i++) {
        var opt = selector[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
    
    var dates = [];
    var closes = [];
    var SMA30 = [];
    var SMA100 = [];
    var buysig = [];
    var sellsig = [];
    var initial_selected = d3.select("#symbolselect").property("value");
    console.log(initial_selected);
    
    for (var i = 0; i<data.length; i++) {
        if (initial_selected == data[i]["Symbol"]) {
            dates.push(data[i]["Date"]);
            closes.push(data[i]["Close"]);
            SMA30.push(data[i]["SMA30"]);
            SMA100.push(data[i]["SMA100"]);
            buysig.push(data[i]["Buy_Signal_Price"]);
            sellsig.push(data[i]["Sell_Signal_Price"]);
        }
    }
    console.log(dates);
    console.log(closes);
    console.log(SMA30);
    console.log(SMA100);
    
    
    var trace1 = {
        x: dates,
        y: closes,
        mode: 'lines',
        name: 'Close Prices',
        opacity: .3,
        marker: {
            color: 'rgb(0, 0, 0)'
        }
    };
    var trace2 = {
        x: dates,
        y: SMA30,
        mode: 'lines',
        name: '30-day MA',
        opacity: .3,
        marker: {
            color: 'rgb(0, 0, 128)'
        }
    };
    var trace3 = {
        x: dates,
        y: SMA100,
        mode: 'lines',
        name: '100-day MA',
        opacity: .3,
        marker: {
            color: 'rgb(219, 64, 82)'
        }    };
    var trace4 = {
        x: dates,
        y: buysig,
        mode: 'markers',
        name: 'Buy',
        marker: {
            color: 'rgb(34,139,34)',
            size: 12
        }    };
    var trace5 = {
        x: dates,
        y: sellsig,
        mode: 'markers',
        name: 'Sell',
        marker: {
            color: 'rgb(219, 64, 82)',
            size: 12
        }    };

    var datas = [trace1, trace2, trace3, trace4, trace5];
    var layout = {
        title:'Golden Cross and Death Cross Analysis'
    }

    Plotly.newPlot('crossAnalysis', datas, layout);
    
    d3.select("#symbolselect").on("change", changefunc);
    
    function changefunc() {
        d3.csv("Data/5DowCompanies_DJIA.csv").then(function(data) {
                var dates = [];
                var closes = [];
                var SMA30 = [];
                var SMA100 = [];
                var buysig = [];
                var sellsig = [];
                var initial_selected = d3.select("#symbolselect").property("value");
                console.log(initial_selected);
    
                for (var i = 0; i<data.length; i++) {
                    if (initial_selected == data[i]["Symbol"]) {
                    dates.push(data[i]["Date"]);
                    closes.push(data[i]["Close"]);
                    SMA30.push(data[i]["SMA30"]);
                    SMA100.push(data[i]["SMA100"]);
                    buysig.push(data[i]["Buy_Signal_Price"]);
                    sellsig.push(data[i]["Sell_Signal_Price"]);
                    }
                }
                console.log(dates);
                console.log(closes);
                console.log(SMA30);
                console.log(SMA100);
    
    
                var trace1 = {
                    x: dates,
                    y: closes,
                    mode: 'lines',
                    name: 'Close Prices',
                    opacity: .3,
                    marker: {
                        color: 'rgb(0, 0, 0)'
                    }
                };
                var trace2 = {
                    x: dates,
                    y: SMA30,
                    mode: 'lines',
                    name: '30-day MA',
                    opacity: .3,
                    marker: {
                        color: 'rgb(0, 0, 128)'
                    }
                };
                var trace3 = {
                    x: dates,
                    y: SMA100,
                    mode: 'lines',
                    name: '100-day MA',
                    opacity: .3,
                    marker: {
                        color: 'rgb(219, 64, 82)'
                    }    };
                var trace4 = {
                    x: dates,
                    y: buysig,
                    mode: 'markers',
                    name: 'Buy',
                    marker: {
                        color: 'rgb(34,139,34)',
                        size: 12
                    }    };
                var trace5 = {
                    x: dates,
                    y: sellsig,
                    mode: 'markers',
                    name: 'Sell',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 12
                    }    };

                var datas = [trace1, trace2, trace3, trace4, trace5];
                var layout = {
                    title:'Golden Cross and Death Cross Analysis'
                }

                Plotly.newPlot('crossAnalysis', datas, layout);
                });  
    };


});
