import {
  timer,
  fromEvent,
  interval,
} from "https://dev.jspm.io/rxjs@6/_esm2015";
import { ajax } from "https://dev.jspm.io/rxjs@6/_esm2015/ajax";
import { concatMap, map } from "https://dev.jspm.io/rxjs@6/_esm2015/operators";

const warningsUrl = "http://localhost:8080/warnings";
const warningsSinceUrl = "http://localhost:8080/warnings/since/";

//GET ALL WARNINGS and POLL SERVER
const warnings$ = ajax.getJSON(warningsUrl);
var polledWarnings$ = interval(500).pipe(concatMap(() => warnings$));
var polledSubscriber = subscribeToPolledWarnings();

//GET WARNINGS since time
document.getElementById("myLocalDate").defaultValue = "2019-11-20T11:00:00.000";
const warningsSinceTime$ = ajax.getJSON(`${warningsSinceUrl}${getFromTime()}`);

warningsSinceTime$.subscribe(
  (result) => {
    const filteredSinceWarnings = result.warnings.filter(
      (warning) => warning.prediction.time >= getFromTime()
    );
    printWarnings(filteredSinceWarnings, "warningSince");
  },
  (err) => console.log(`ERROR: ${err}`),
  () => console.log("done")
);

//TURN WARNINGS ON/OFF
var checked$ = fromEvent(toggle, "change").pipe(map((e) => e.target.checked));
checked$.subscribe((checked) => {
  unSubscribeToPolledWarnings(polledSubscriber);
  if (checked) {
    polledSubscriber = subscribeToPolledWarnings();
  } else {
    unSubscribeToPolledWarnings(polledSubscriber);
  }
});

// UNSUBSCRIBE to warnings
function unSubscribeToPolledWarnings(subscriber) {
  return subscriber.unsubscribe();
}

// SUBSCRIBE to warnings
function subscribeToPolledWarnings() {
  return polledWarnings$.subscribe(
    (result) => {
      if (getSeverity() === "9") {
        let jsonWarnings = JSON.parse(JSON.stringify(result.warnings));
        printWarnings(jsonWarnings, "warning", result.time);
      } else {
        // unSubscribeToPolledWarnings(polledSubscriber);
        // for (let i = 0; i < result.warnings.length - 1; i++) {
          const filteredwarnings = result.warnings.filter(
            (warning) => warning.severity >= getSeverity()
          );
          let jsonFilteredWarnings = JSON.parse(
            JSON.stringify(filteredwarnings)
          );
          printWarnings(jsonFilteredWarnings, "warning", result.time);
        // }
      }
    },
    (err) => console.log(`ERROR: ${err}`),
    () => console.log("done")
  );
}

// PRINT to HTML
function printWarnings(array, element, time) {
  document.getElementById(element).innerHTML = array
    .map(
      (x) =>
        `<tr>
    <td>${x.id}</td>
    <td>${x.severity}</td>
    <td>${x.prediction.from}</td>
    <td>${x.prediction.to}</td>
    <td>${x.prediction.precipitation_types || ""}</td>
    <td>${x.prediction.type}</td>
    <td>${x.prediction.unit}</td>
    <td>${x.prediction.time}</td>
    <td>${x.prediction.place}</td>
    </tr>`
    )
    .join("");
  document.getElementById("warning").append(time);
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
