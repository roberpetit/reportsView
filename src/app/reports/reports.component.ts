import { Component, OnInit } from "@angular/core";

@Component({
	selector: 'hpqc-report',
	templateUrl: './reports.component.html'
})
export class HpqcReportComponent implements OnInit {
	title = 'reportView';
	tableTitle;
	tableTotal;
	teams: Team[] = [];
	tables: Table[] = [];
	dataGraph;
	lineChartDataTotales1: Array<any> = [];
	lineChartDataTotales2: Array<any> = [];
	lineChartDataTotales3: Array<any> = [];
	lineChartDataTotales4: Array<any> = [];

	lineChartLabels1: Array<any> = [];
	lineChartLabels2: Array<any> = [];
	lineChartLabels3: Array<any> = [];
	lineChartLabels4: Array<any> = [];

	dataTotales: any;
	dataTotalesXEquipo: any;
	dataR15INTGRA:any;
	dataR15Regresion:any;
	dataCreated:any;

	constructor() { }
	ngOnInit() {
		this.parseDataToGraphTotals();
		this.parseDataToGraphTotalsByTeam();
		this.parseDataToGraphR15INTGRAByTeam();
		this.parseDataToGraphCreatedTotals();

		this.tables = [this.initTableData.tables[1],this.initTableData.tables[2]];
		this.teams = this.initTableData.tables[0].teamColumns;
		this.tableTitle = this.initTableData.tables[0].title;
		this.tableTotal = this.initTableData.tables[0].total;
	}


	convertToDate(strDate: any) {
		let date = new Date(strDate);
		return date.toLocaleDateString('es');
	}

	public parseDataToGraphTotals() {
		this.lineChartDataTotales1 = [
			{ data: this.initGraphServiceDataTotales.totalesValues, label: "Totales",
			fill: false,
			borderColor: '#4bc0c0' },
			{ data: this.initGraphServiceDataTotales.fbdValues, label: "Release 1.5 INTGRA",
			fill: true,
			borderColor: '#565656' },
			{ data: this.initGraphServiceDataTotales.qaValues, label: "Release 1.5 Regresión",
			fill: true,
			borderColor: '#9CCC65' }
		];
		this.initGraphServiceDataTotales.datesValues.forEach(element => {
			this.lineChartLabels1.push(this.convertToDate(element));
		});
		this.dataTotales = {
			datasets: this.lineChartDataTotales1,
			labels: this.lineChartLabels1
		} 
	}
	public parseDataToGraphTotalsByTeam() {
		this.lineChartDataTotales2 = [
			{ data: this.initGraphServiceDataTotalesPorEquipo.totalesValues, label: "Desarrollo",
			fill: false,
			borderColor: '#4bc0c0' },
			{ data: this.initGraphServiceDataTotalesPorEquipo.fbdValues, label: "Funcional",
			fill: true,
			borderColor: '#565656' },
			{ data: this.initGraphServiceDataTotalesPorEquipo.qaValues, label: "Testing",
			fill: true,
			borderColor: '#9CCC65' }
		];
		this.initGraphServiceDataTotales.datesValues.forEach(element => {
			this.lineChartLabels2.push(this.convertToDate(element));
		});
		this.dataTotalesXEquipo = {
			datasets: this.lineChartDataTotales2,
			labels: this.lineChartLabels2
		} 
	}
	public parseDataToGraphR15INTGRAByTeam() {
		this.lineChartDataTotales3 = [
			{ data: this.initGraphServiceDataR15INTGRAPorEquipo.totalesValues, label: "Desarrollo",
			fill: false,
			borderColor: '#4bc0c0' },
			{ data: this.initGraphServiceDataR15INTGRAPorEquipo.fbdValues, label: "Funcional",
			fill: true,
			borderColor: '#565656' },
			{ data: this.initGraphServiceDataR15INTGRAPorEquipo.qaValues, label: "Testing",
			fill: true,
			borderColor: '#9CCC65' }
		];
		this.initGraphServiceDataTotales.datesValues.forEach(element => {
			this.lineChartLabels3.push(this.convertToDate(element));
		});
		this.dataR15INTGRA = {
			datasets: this.lineChartDataTotales3,
			labels: this.lineChartLabels3
		} 
	}

	public parseDataToGraphR15RegresionByTeam() {
		this.lineChartDataTotales3 = [
			{ data: this.initGraphServiceDataR15RegresionPorEquipo.totalesValues, label: "Desarrollo",
			fill: false,
			borderColor: '#4bc0c0' },
			{ data: this.initGraphServiceDataR15RegresionPorEquipo.fbdValues, label: "Funcional",
			fill: true,
			borderColor: '#565656' },
			{ data: this.initGraphServiceDataR15RegresionPorEquipo.qaValues, label: "Testing",
			fill: true,
			borderColor: '#9CCC65' }
		];
		this.initGraphServiceDataTotales.datesValues.forEach(element => {
			this.lineChartLabels3.push(this.convertToDate(element));
		});
		this.dataR15Regresion = {
			datasets: this.lineChartDataTotales3,
			labels: this.lineChartLabels3
		} 
	}

	public parseDataToGraphCreatedTotals() {
		this.lineChartDataTotales4 = [
			{ data: this.initGraphServiceDataCreatedTotals.totalesValues, label: "Reopen",
			fill: false,
			borderColor: '#4bc0c0' },
			{ data: this.initGraphServiceDataCreatedTotals.fbdValues, label: "New",
			fill: true,
			borderColor: '#565656' },
			{ data: this.initGraphServiceDataCreatedTotals.qaValues, label: "Open",
			fill: true,
			borderColor: '#9CCC65' }
		];
		this.initGraphServiceDataCreatedTotals.datesValues.forEach(element => {
			this.lineChartLabels4.push(this.convertToDate(element));
		});
		this.dataCreated = {
			datasets: this.lineChartDataTotales4,
			labels: this.lineChartLabels4
		} 
	}

	public lineChartOptions: any = {
		responsive: false,
		maintainAspectRatio: true
	};
	public lineChartColors: Array<any> = [
		{ // grey
			backgroundColor: 'rgba(148,159,177,0.2)',
			borderColor: 'rgba(148,159,177,1)',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		},
		{ // dark grey
			backgroundColor: 'rgba(77,83,96,0.2)',
			borderColor: 'rgba(77,83,96,1)',
			pointBackgroundColor: 'rgba(77,83,96,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(77,83,96,1)'
		},
		{ // grey
			backgroundColor: 'rgba(148,159,177,0.2)',
			borderColor: 'rgba(148,159,177,1)',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		}
	];
	public lineChartLegend: boolean = true;
	public lineChartType: string = 'line';

	// events
	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}
	
	public initGraphServiceDataTotales: InitGraphData = {"totalesValues":[252],"fbdValues":[0],"qaValues":[0],"datesValues":[1565665200000]}
	public initGraphServiceDataTotalesPorEquipo: InitGraphData = {"totalesValues":[13],"fbdValues":[236],"qaValues":[0],"datesValues":[1565665200000]}
	public initGraphServiceDataR15INTGRAPorEquipo: InitGraphData = {"totalesValues":[0],"fbdValues":[0],"qaValues":[0],"datesValues":[1565665200000]}
	public initGraphServiceDataR15RegresionPorEquipo: InitGraphData = {"totalesValues":[0],"fbdValues":[0],"qaValues":[0],"datesValues":[1565665200000]}
	public initGraphServiceDataCreatedTotals: InitGraphData = {"totalesValues":[5],"fbdValues":[177],"qaValues":[21],"datesValues":[1565665200000]}
	public initTableData: any =  {"tables":[{"title":"Backlog Total","total":252,"date":1565665200000,"teamColumns":[{"title":"Desarrollo","state":{"New":175,"Done":15,"Total":236,"Rejected":12,"Reopen":3,"Pending":0,"Open":20,"Fixed":11}},{"title":"Funcional","state":{"New":0,"Done":0,"Total":0,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":0}},{"title":"Testing","state":{"New":0,"Done":2,"Total":13,"Rejected":0,"Reopen":2,"Pending":2,"Open":0,"Fixed":7}},{"title":"ICBC","state":{"New":2,"Done":0,"Total":3,"Rejected":0,"Reopen":0,"Pending":0,"Open":1,"Fixed":0}}]},{"title":"R2 Comex Pagos","total":0,"date":1565665200000,"teamColumns":[{"title":"Desarrollo","state":{"New":0,"Done":0,"Total":0,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":0}},{"title":"Funcional","state":{"New":0,"Done":0,"Total":0,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":0}},{"title":"Testing","state":{"New":0,"Done":0,"Total":0,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":0}},{"title":"ICBC","state":{"New":0,"Done":0,"Total":0,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":0}}]},{"title":"Release 1.5 Regresion","total":0,"date":1565665200000,"teamColumns":[{"title":"Desarrollo","state":{"New":0,"Done":0,"Total":0,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":0}},{"title":"Funcional","state":{"New":0,"Done":0,"Total":0,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":0}},{"title":"Testing","state":{"New":0,"Done":0,"Total":0,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":0}},{"title":"ICBC","state":{"New":0,"Done":0,"Total":0,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":0}}]}]}

}

export interface InitGraphData {
	totalesValues;
	fbdValues;
	qaValues;
	datesValues;
}

export interface Team {
	title;
	state;
}
export interface Table {
	title;
	total;
	date;
	teamColumns;
}
