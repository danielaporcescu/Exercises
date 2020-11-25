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
    console.log("Listening to incoming data...");
    printToTable(warns);
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

    document.getElementById("warningSince").innerHTML = warningsSince.warnings
      .map(
        (x) =>
          `<tr>
      <td>${x.id}</td>
      <td>${x.severity}</td>
      <td>${x.prediction.from}</td>
      <td>${x.prediction.to}</td>
      <td>${x.prediction.type}</td>
      <td>${x.prediction.unit}</td>
      <td>${x.prediction.time}</td>
      <td>${x.prediction.place}</td>
      <td>${x.prediction.precipitation_types || ""}</td>
      </tr>`
      )
      .join("");
  });
}

//TOGGLE BUTTON ONN/OFF to unsubscribe
function onSwitchClick() {
  var checked = document.getElementById("toggle").checked;
  if (checked) {
    subscribeToWarnings();
  } else {
    unSubscribeToWarnings();
  }
}

//ON CHANGE FOR SEVERITY
function changeSeverity() {
  var severity = getSeverity();
  if (severity === "7") {
    subscribeToWarnings();
  } else {
    unSubscribeToWarnings();
    var warningsTable = document.getElementById("warningsTable");
    // console.log(warningsTable);
    while (warningsTable.childNodes.length > 0) {
      warningsTable.removeChild(warningsTable.childNodes[0]);
    }
    console.log(warningData);

    for (let i = 0; i < warningData.length - 1; i++) {
      if (
        warningData[i].prediction != null &&
        warningData[i].severity == severity
      ) {
        // console.log(warningData[i].severity);
        // console.log(severity);

        var tr = document.createElement("tr");
        tr.setAttribute("id", warningData[i].id);

        tr.innerHTML = `<td>${warningData[i].id} </td>
          <td>${warningData[i].severity} </td>
          <td>${warningData[i].prediction.from} </td>
          <td>${warningData[i].prediction.to} </td>
          <td>${warningData[i].prediction.type} </td>
          <td>${warningData[i].prediction.unit} </td>
          <td>${warningData[i].prediction.time} </td>
          <td>${warningData[i].prediction.place} </td>
          <td>${warningData[i].prediction.precipitation_types || ""} </td>`;

        document.getElementById("warningsTable").appendChild(tr);
      }
    }
  }
}

//PRINT THE TABLE
function printToTable(warns) {
  //console.log(warns);
  if (warns.time != null) {
    for (let warn of warns.warnings) {
      printWarnings(warn);
    }
  } else {
    printWarnings(warns);
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

    if (warns.prediction != null) {
      tr.innerHTML = `<td>${warns.id}</td>
        <td>${warns.severity}</td>
        <td>${warns.prediction.from}</td>
        <td>${warns.prediction.to}</td>
        <td>${warns.prediction.type}</td>
        <td>${warns.prediction.unit}</td>
        <td>${warns.prediction.time}</td>
        <td>${warns.prediction.place}</td>
        <td>${warns.prediction.precipitation_types || ""}</td>`;

      document.getElementById("warningsTable").appendChild(tr);
    }
  }
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

window.onload = subscribeToWarnings;
