// Chart Widgets
// Traffic Line Chart
const trafficCanvas = document.getElementById("traffic-chart");

let trafficData = {
	lables: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
	datasets: [{
		data: [750, 1250, 1000, 2000, 1500, 1750, 120, 1850, 2250, 1500, 2500],
		backgroundColor: 'rgba(116, 119, 191, .3)',
		borderWidth: 1,
	}]
};

let trafficOptions = {
	backgroundColor: 'rgba(112, 104, 201, .5)',
	fill: true, 
	aspectRatio: 2.5,
	animation: {
		duration: 0
	},
	scales: {
		y: {
			beginAtZero: true
		}
	},
	plugins: {
		legend: {
			display: false
		}
	}
};

let trafficChart = new Chart(trafficCanvas, {
	type: 'line',
	data: trafficData,
	options: trafficOptions
});

// Daily Traffic Bar Graph
const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
	labels: ["S", "M", "T", "F", "S"],
	datasets: [{
		label: '# of Hits',
		data: [75, 115, 175, 12, 225, 200, 100],
		backgroundColor: '#7477BF',
		borderWidth: 1
	}]
};

const dailyOptions = {
	scales: {
		y: {
			beginAtZero: true
		}
	},
	plugins: {
		legend: {
			display: false
		}
	}

};

let dailyChart = new Chart(dailyCanvas, {
	type: 'bar',
	data: dailyData,
	options: dailyOptions
});

// Mobile Doughnut Chart
const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
	labels: ["Desktop", "Tablet", "Phones"],
	datasets: [{
		label: "# of Users",
		data: [2000, 550, 500],
		borderWidth: 0,
		backgroundColor: [
			"#7477BF",
			"#78CF82",
			"#51B6C8"
		]
	}]
};

const mobileOptions = {
	aspectRation: 1.9,
	plugins: {
		legend: {
			position: 'right',
			labels: {
				boxWidth: 20,
				fontStyle: 'bold'
			}
		}
	}
};

let mobileChart = new Chart(mobileCanvas, {
	type: 'doughnut',
	data: mobileData,
	options: mobileOptions
});
