const si = require('systeminformation');

si.wifiNetworks().then((data) => console.log(data));
