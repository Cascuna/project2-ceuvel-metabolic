var socket = io();
var fishCount = 8;
var ph_table = {
  0: "Battery Acid (0)",
  1: "Stomach Acid (1)",
  2: "Lemon Juice (2)",
  3: "Orange Juice (3)",
  4: "Tomato Juice (4)",
  5: "Black Coffee (5)",
  6: "Cow Milk (6)",
  7: '"Pure" Water (7)',
  8: "Seawater (8)",
  9: "Toothpaste (9)",
  10: "Brocoli (10)",
  11: "Household Ammonia (11)",
  12: "Soapy Water (12)"
};

function calcAmount(crop, amount) {
  return crop.perM2 * crop.totalM2 / amount;
}
let dummyDivLettuce = document.createElement("div");
dummyDivLettuce.innerHTML = `<div class="plant">
<svg width="100%" height="100%" viewBox="0 0 59 83" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
  <g>
    <path d="M33.789,66.541c0,0 6.713,-15.064 4.265,-26.858c-2.447,-11.795 -9.941,-31.899 -10.483,-37.796c-0.543,-5.897 -1.432,11.526 -3.4,18.227c-1.968,6.701 -3.752,20.641 -3.04,28.95c0.712,8.31 4.548,17.783 4.548,17.783l8.11,-0.306Z"
      style="fill:#49715c;fill-rule:nonzero;" />
    <path d="M26.64,9.39l-0.265,0c-0.733,0 -0.857,0.302 -0.857,0.677c0,0.371 0,0.675 0.857,0.675l0.265,0" style="fill:#416351;fill-rule:nonzero;"
    />
    <path d="M27.202,15.042l-0.263,0c-0.735,0 -0.861,0.302 -0.861,0.675c0,0.373 0,0.675 0.861,0.675l0.263,0" style="fill:#416351;fill-rule:nonzero;"
    />
    <path d="M25.303,17.895l-0.264,0c-0.734,0 -0.86,0.302 -0.86,0.675c0,0.373 0,0.675 0.86,0.675l0.264,0" style="fill:#416351;fill-rule:nonzero;"
    />
    <path d="M27.202,21.317l-0.263,0c-0.735,0 -0.861,0.301 -0.861,0.674c0,0.373 0,0.675 0.861,0.675l0.263,0" style="fill:#416351;fill-rule:nonzero;"
    />
    <path d="M23.984,23.25l-0.264,0c-0.732,0 -0.86,0.303 -0.86,0.675c0,0.373 0,0.676 0.86,0.676l0.264,0" style="fill:#416351;fill-rule:nonzero;"
    />
    <htmlpath d="M26.078,26.752l-0.263,0c-0.733,0 -0.861,0.303 -0.861,0.676c0,0.372 0,0.675 0.861,0.675l0.263,0" style="fill:#416351;fill-rule:nonzero;"
    />
    <path d="M22.86,30.251l-0.262,0c-0.734,0 -0.861,0.302 -0.861,0.675c0,0.373 0,0.675 0.861,0.675l0.262,0" style="fill:#416351;fill-rule:nonzero;"
    />
    <path d="M26.64,33.093l-0.265,0c-0.733,0 -0.859,0.3 -0.859,0.673c0,0.373 0,0.675 0.859,0.675l0.265,0" style="fill:#416351;fill-rule:nonzero;"
    />
    <path d="M23.984,36.968l-0.264,0c-0.732,0 -0.86,0.302 -0.86,0.673c0,0.375 0,0.675 0.86,0.675l0.264,0" style="fill:#416351;fill-rule:nonzero;"
    />
    <path d="M26.078,40.865l-0.263,0c-0.733,0 -0.861,0.302 -0.861,0.675c0,0.373 0,0.675 0.861,0.675l0.263,0" style="fill:#416351;fill-rule:nonzero;"
    />
    <path d="M25.303,45.834l-0.264,0c-0.734,0 -0.86,0.303 -0.86,0.675c0,0.373 0,0.676 0.86,0.676l0.264,0" style="fill:#416351;fill-rule:nonzero;"
    />
    <path d="M25.303,52.451l-0.264,0c-0.734,0 -0.86,0.302 -0.86,0.675c0,0.373 0,0.675 0.86,0.675l0.264,0" style="fill:#416351;fill-rule:nonzero;"
    />
    <path d="M19.389,67.793c0,0 5.376,-12.066 3.415,-21.514c-1.961,-9.449 -7.963,-25.553 -8.397,-30.276c-0.434,-4.725 -1.147,9.232 -2.723,14.6c-1.577,5.369 -3.007,16.535 -2.436,23.191c0.571,6.656 3.645,14.244 3.645,14.244l6.496,-0.245Z"
      style="fill:#538a70;fill-rule:nonzero;" />
    <path d="M11.719,43.007l-0.262,0c-0.734,0 -0.86,0.303 -0.86,0.676c0,0.372 0,0.675 0.86,0.675l0.262,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M10.035,46.732l-0.264,0c-0.733,0 -0.861,0.301 -0.861,0.675c0,0.371 0,0.674 0.861,0.674l0.264,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M11.355,50.299l-0.263,0c-0.735,0 -0.861,0.303 -0.861,0.675c0,0.373 0,0.676 0.861,0.676l0.263,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M10.035,53.671l-0.264,0c-0.733,0 -0.861,0.303 -0.861,0.676c0,0.373 0,0.675 0.861,0.675l0.264,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M12.487,58.461l-0.264,0c-0.734,0 -0.86,0.302 -0.86,0.675c0,0.373 0,0.675 0.86,0.675l0.264,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M10.597,38.765l-0.266,0c-0.732,0 -0.858,0.302 -0.858,0.675c0,0.373 0,0.675 0.858,0.675l0.266,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M12.843,35.491l-0.263,0c-0.735,0 -0.861,0.301 -0.861,0.673c0,0.373 0,0.676 0.861,0.676l0.263,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M11.719,32.215l-0.262,0c-0.734,0 -0.86,0.303 -0.86,0.675c0,0.373 0,0.676 0.86,0.676l0.262,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M13.405,29.576l-0.265,0c-0.733,0 -0.859,0.302 -0.859,0.675c0,0.373 0,0.675 0.859,0.675l0.265,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M13.112,24.601l-0.264,0c-0.732,0 -0.858,0.302 -0.858,0.675c0,0.373 0,0.675 0.858,0.675l0.264,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <phtmlath d="M46.414,66.908c0,0 5.142,-11.539 3.266,-20.575c-1.875,-9.037 -7.618,-24.441 -8.032,-28.957c-0.415,-4.519 -1.096,8.831 -2.604,13.966c-1.51,5.132 -2.875,15.811 -2.33,22.177c0.546,6.368 3.486,13.625 3.486,13.625l6.214,-0.236Z"
      style="fill:#538a70;fill-rule:nonzero;" />
    <path d="M39.154,45.159l-0.264,0c-0.734,0 -0.861,0.302 -0.861,0.675c0,0.373 0,0.675 0.861,0.675l0.264,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M37.467,48.882l-0.263,0c-0.733,0 -0.859,0.302 -0.859,0.677c0,0.371 0,0.675 0.859,0.675l0.263,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M38.788,52.451l-0.263,0c-0.735,0 -0.861,0.302 -0.861,0.675c0,0.373 0,0.675 0.861,0.675l0.263,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M37.467,55.823l-0.263,0c-0.733,0 -0.859,0.303 -0.859,0.675c0,0.373 0,0.676 0.859,0.676l0.263,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M39.92,60.613l-0.264,0c-0.734,0 -0.86,0.302 -0.86,0.675c0,0.373 0,0.675 0.86,0.675l0.264,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M38.029,40.917l-0.263,0c-0.734,0 -0.859,0.302 -0.859,0.675c0,0.373 0,0.675 0.859,0.675l0.263,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M40.276,37.641l-0.264,0c-0.732,0 -0.858,0.304 -0.858,0.675c0,0.375 0,0.675 0.858,0.675l0.264,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M39.154,34.367l-0.264,0c-0.734,0 -0.861,0.302 -0.861,0.675c0,0.373 0,0.675 0.861,0.675l0.264,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M40.838,31.727l-0.264,0c-0.734,0 -0.86,0.305 -0.86,0.676c0,0.372 0,0.675 0.86,0.675l0.264,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />html
    <path d="M40.545,26.752l-0.262,0c-0.734,0 -0.86,0.303 -0.86,0.676c0,0.372 0,0.675 0.86,0.675l0.262,0" style="fill:#4b7e65;fill-rule:nonzero;"
    />
    <path d="M0.337,80.112c0,1.41 1.144,2.552 2.554,2.552l53.297,0c1.411,0 2.554,-1.142 2.554,-2.552l0,-11.171c0,-1.409 -1.143,-2.554 -2.554,-2.554l-53.297,0c-1.41,0 -2.554,1.145 -2.554,2.554l0,11.171Z"
      style="fill:#ac9583;fill-rule:nonzero;" />
  </g>
</svg>
</div>`;


let rows = {
  lettuce: {
    container: document.getElementById("lettuce"),
    html: dummyDivLettuce
  },
  herbs: {
    container: document.getElementById("herbs"),
    html: dummyDivLettuce
  },
  flowers: {
    container: document.getElementById("flowers"),
    html: dummyDivLettuce
  }
};
var water_temp;
var phlevel;
var lux;
socket.on("amqp data", function(data) {
  try {
    var fishAmount = document.getElementById("fishAmount");
    var waterTemperature = document.getElementById("waterTemperature");
    var phLevel = document.getElementById("phLevel");
    var lightOverlay = document.getElementById("lightOverlay");

    if (data.water_temp < 100) {
      water_temp = `${data.water_temp.toFixed(1)}C`;
      waterTemperature.innerHTML = water_temp;
    }

    fishAmount.innerHTML = fishCount;
    phlevel = `${ph_table[Math.floor(data.ph)]}`;
    phLevel.innerHTML = phlevel;
    lux = `${1 - (data.lux / 100000).toFixed(2) * 3}`;
    lightOverlay.style.opacity = lux;
  } catch (e) {
    console.log(e);
  }
});

let fishes = [];

function spawnFish() {
  for (; fishes.length < fishCount; ) {
    createFish();
  }
  animateFish();
  setInterval(function() {
    animateFish();
  }, 10000);
}

function createFish(fishType = "catFish") {
  var fishContainer = document.querySelector(".water");
  var fish = document.createElement("div");
  fish.classList.add(fishType);
  fish.dataset.oldX = 0;
  fishes.push(fish);
  fishContainer.appendChild(fish);
  return fish;
}

function animateFish() {
  try{
  var containerHeight = document.querySelector(".water").offsetHeight;
  var containerWidth = document.querySelector(".water").offsetWidth;
  document.querySelectorAll(".catFish").forEach(fish => {
    var oldX = fish.dataset.oldX;
    var newX = Math.floor(Math.random() * (containerWidth - 100) + 1);
    var newY = Math.floor(Math.random() * (containerHeight - 35) + 1);
    if (oldX < newX) {
      fish.style.transform = "rotateY(180deg)";
      fish.style.top = `${newY}px`;
      fish.style.left = `${newX}px`;
    } else {
      fish.style.transform = "rotateY(0)";
      fish.style.top = `${newY}px`;
      fish.style.left = `${newX}px`;
    }
    fish.dataset.oldX = newX;
  });
  } catch(e) {
    console.log(e)
  }
}

spawnFish();

socket.on("crop data", function(data) {
  for (key in rows) {
    for (let i = 0; i < calcAmount(data.plants[key], 10); i++) {
      let extraDiv = document.createElement("div");
      extraDiv = rows[key].html.cloneNode(true);
      rows[key].container.appendChild(extraDiv.querySelector("div"));
      rows[key].lastHarvested = data.plants[key].lastHarvested;
      rows[key].lastYield = (
        Math.floor(data.plants[key].yield.lastBatch) *
        data.plants[key].weightInKg
      ).toFixed(2);
    }
  }
});

function navigate(href) {
  //   console.log(href);
  let links = document.querySelectorAll(".readmore");
  console.log(links);
  for (link of links) {
    console.log(link);
    if (link !== href) {
      link.style.background = "rgba(0,0,0,0.50)";
    }
    link.querySelector("svg").style.opacity = 0;
  }
  let shipBody = document.querySelector(".shipBody");
  shipBody.style.zIndex = 6;
}
// Barba.transitionLength = 1000;

var HideShowTransition = Barba.BaseTransition.extend({
  start: function() {
    this.newContainerLoading.then(this.finish.bind(this));
  },

  finish: function() {
    document.body.scrollTop = 0;
    this.done();
  }
});

window.setInterval(function() {
  socket.emit("heartbeat", {
    msg: "I am NOT dead!"
  });
}, 5000);

Barba.Pjax.start();
Barba.Dispatcher.on("newPageReady", function(
  currentStatus,
  oldStatus,
  container
) {
  for (key in rows) {
    rows[key].temporaryData = rows[key].container.innerHTML;
  }
});
Barba.Dispatcher.on("transitionCompleted", function(currentStatus) {
  for (key in rows) {
    if (document.getElementById(key)) {
      document.getElementById(key).innerHTML = rows[key].temporaryData;
      document.getElementById(`${key}Harvest`).innerHTML =
        rows[key].lastHarvested;
      document.getElementById(`${key}Yield`).innerHTML = rows[key].lastYield;
    }
  }
  console.log(document.getElementById("fish-water"));
  if (document.getElementById("fish-water")) {
    console.log("wtf?");
    for (let i = 0; i < fishCount; i++) {
      console.log(fishes[i]);
      document.getElementById("fish-water").appendChild(fishes[i]);
    }
  }

  try {
    if (document.getElementById("fishAmount")) {
      var fishAmount = document.getElementById("fishAmount");
      var waterTemperature = document.getElementById("waterTemperature");
      var phLevel = document.getElementById("phLevel");
      var lightOverlay = document.getElementById("lightOverlay");
    }

    waterTemperature.innerHTML = water_temp;
    fishAmount.innerHTML = fishCount;
    phLevel.innerHTML = ph_table[6];
    lightOverlay.style.opacity = 0.5;
  } catch (e) {
    console.log(e);
  }
});
