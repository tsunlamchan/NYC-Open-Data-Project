let data, map;


async function init(){
  let link = "Wifi.json";
  let info = await fetch(link);
  data = await info.json();
  let leftPanel = get("leftPanel");
  if(leftPanel){
    let build = "";
    for(let i = 0; i < data.length; i++){
      let wifi = data[i];
      build += card(wifi);
    }
    leftPanel.innerHTML = build;
  }
}



function filterBytypeandcity(){

  let city = get("city").value;
  let type = get("type").value;
  let leftPanel = get("leftPanel");
  let build = "";
  for(let i = 0; i < data.length; i++){
    let wifi = data[i]
    if(wifi.city == city && wifi.type == type){
      build += card(wifi);
    }
  }
  
  leftPanel.innerHTML = build;

}


function hotspotsByCity(){

  let queens = 0;
  let brooklyn = 0;
  let bronx = 0;
  let manhattan = 0;
  let staten = 0;

  for(let i = 0; i < data.length; i++){

    let wifi = data[i];

    if(wifi.city == "Queens"){
      queens++;
    }

    else if(wifi.city == "Brooklyn"){
      brooklyn++;
    }

    else if(wifi.city == "Bronx"){
      bronx++;
    }

    else if(wifi.city == "New York"){
      manhattan++;
    }

    else if(wifi.city == "Staten Island"){
      staten++;
    }

  }

  let chartData = [

    ["Queens", queens],

    ["Brooklyn", brooklyn],

    ["Bronx", bronx],

    ["Manhattan", manhattan],

    ["Staten Island", staten]

  ];

  let chartType =
    get("chartType").value;

  displayChart(
    chartData,
    "output",
    chartType
  );

}

function displayChart(
  data,
  chart_id,
  chart_type
){

  let chart = c3.generate({

    bindto: `#${chart_id}`,

    data: {

      columns: data,

      type: chart_type

    }

  });

}
