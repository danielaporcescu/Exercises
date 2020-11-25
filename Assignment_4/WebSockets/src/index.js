let ws = new WebSocket("ws://localhost:8090/warnings");
const warningsSinceUrl = "http://localhost:8080/warnings/since/";
var warningData = [];
var warningsSince = [];

//UNSUBSCRIBE to warnings
window.unSubscribeToWarnings = () => {
  if (ws.OPEN) {
    const message = JSON.stringify("unsubscribe");
    console.log("Unsubscribed!");
    ws.send("unsubscribe");
  }
};

//SUBSCRIBE TO WEBSOCKET
window.subscribeToWarnings = () => {
  if (ws.CLOSED) {
    ws = new WebSocket("ws://localhost:8090/warnings");
  }
  ws.onopen = () => {
    console.log("WebSocket is Open");
    ws.send("subscribe");
  };
  ws.onmessage = (message) => {
    const warns = JSON.parse(message.data);
    window.warningData.push(...warns.warnings);
    console.log("Listening to incoming data...");
    printWarnings(window.warningData);
  };
};

//GET WARNINGS SINCE TIME
document.getElementById("myLocalDate").defaultValue = "2019-11-25T13:00:00.000";
function getWarningsSince() {
  if (document.getElementById("onoff") != null) {
    var p = document.getElementById("onoff");
    p.remove();
  }
  $.get(warningsSinceUrl + getFromTime(), (data) => {
    warningsSince = data;

    let htmlElement = document.getElementById("warningSince");
    warningsSince.warnings.map((x) => {
      let tr = document.createElement("tr");
      tr.setAttribute("id", x.id);
      tr.innerHTML = rowRenderer(x);
      htmlElement.appendChild(tr);
    });
  });
}

//TOGGLE BUTTON ONN/OFF to unsubscribe
function onSwitchClick() {
  let checked = document.getElementById("toggle").checked;
  if (checked) {
    subscribeToWarnings();
  } else {
    unSubscribeToWarnings();
  }
}

//ON CHANGE FOR SEVERITY
function changeSeverity() {
  let severity = getSeverity();
  if (severity === "7") {
    // subscribeToWarnings();
    printWarnings(window.warningData);
  } else {
    unSubscribeToWarnings();
    var warningsTable = document.getElementById("warningsTable");
    // console.log(warningsTable);
    while (warningsTable.childNodes.length > 0) {
      warningsTable.removeChild(warningsTable.childNodes[0]);
    }
    console.log(window.warningData);

    for (let i = 0; i < window.warningData.length - 1; i++) {
      if (
        window.warningData[i].prediction != null &&
        window.warningData[i].severity == severity
      ) {
        // console.log(warningData[i].severity);
        // console.log(severity);

        var tr = document.createElement("tr");
        tr.setAttribute("id", warningData[i].id);

        tr.innerHTML = rowRenderer(warningData[i]);

        document.getElementById("warningsTable").appendChild(tr);
      }
    }
  }
}

//PRINT TO HTML
function printWarnings(warns) {
  if (warns != null) {
    // warningData.push(warns);
    // console.log(warningData)
    var id = document.getElementById(warns.id);
    if (id != null) id.remove();
    var tr = document.createElement("tr");
    tr.setAttribute("id", warns.id);

    for (let i = 0; i < warns.length - 1; i++) {
      if (warns[i].prediction != null) {
        // console.log(warningData[i].severity);
        // console.log(severity);

        var tr = document.createElement("tr");
        tr.setAttribute("id", warns[i].id);

        tr.innerHTML = rowRenderer(warns[i]);

        document.getElementById("warningsTable").appendChild(tr);
      }
    }
  }
}

function rowRenderer(warning) {
  return `<td>${warning.id} </td>
  <td>${warning.severity} </td>
  <td>${warning.prediction.from} </td>
  <td>${warning.prediction.to} </td>
  <td>${warning.prediction.type} </td>
  <td>${warning.prediction.unit} </td>
  <td>${warning.prediction.time} </td>
  <td>${warning.prediction.place} </td>
  <td>${warning.prediction.precipitation_types || ""} </td>`;
}

//GET MINIMAL SEVERITY
function getSeverity() {
  const e = document.getElementById("severity");
  var severity = e.options[e.selectedIndex].value;
  return severity;
}

//GET SINCE LAST UPDATE
function getFromTime() {
  const e = document.getElementById("myLocalDate");
  var localTime = e.value;
  return localTime;
}

window.onload = subscribeToWarnings();
