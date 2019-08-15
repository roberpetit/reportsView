import { Component, OnInit } from "@angular/core";

@Component({
	selector: 'hpqc-report',
	templateUrl: './reports.component.html'
})
export class HpqcReportComponent implements OnInit {


	public initTableData: any =  {"tables":[{"title":"Backlog Total","total":246,"date":1565751600000,"teamColumns":[{"title":"Desarrollo","state":{"New":169,"Done":25,"Total":237,"Rejected":11,"Reopen":4,"Pending":0,"Open":17,"Fixed":11}},{"title":"Testing","state":{"New":0,"Done":2,"Total":6,"Rejected":0,"Reopen":2,"Pending":2,"Open":0,"Fixed":0}},{"title":"ICBC","state":{"New":2,"Done":0,"Total":3,"Rejected":0,"Reopen":0,"Pending":0,"Open":1,"Fixed":0}}]},{"title":"R2 Comex Pagos","total":161,"date":1565751600000,"teamColumns":[{"title":"Desarrollo","state":{"New":122,"Done":23,"Total":159,"Rejected":3,"Reopen":2,"Pending":0,"Open":9,"Fixed":0}},{"title":"Testing","state":{"New":0,"Done":1,"Total":2,"Rejected":0,"Reopen":0,"Pending":1,"Open":0,"Fixed":0}},{"title":"ICBC","state":{"New":0,"Done":0,"Total":0,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":0}}]},{"title":"R2 Comex Cobros","total":12,"date":1565751600000,"teamColumns":[{"title":"Desarrollo","state":{"New":1,"Done":2,"Total":9,"Rejected":0,"Reopen":2,"Pending":0,"Open":4,"Fixed":0}},{"title":"Testing","state":{"New":0,"Done":1,"Total":3,"Rejected":0,"Reopen":2,"Pending":0,"Open":0,"Fixed":0}},{"title":"ICBC","state":{"New":0,"Done":0,"Total":0,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":0}}]},{"title":"R2 Comex Financiaciones","total":43,"date":1565751600000,"teamColumns":[{"title":"Desarrollo","state":{"New":37,"Done":0,"Total":42,"Rejected":1,"Reopen":0,"Pending":0,"Open":4,"Fixed":0}},{"title":"Testing","state":{"New":0,"Done":0,"Total":0,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":0}},{"title":"ICBC","state":{"New":0,"Done":0,"Total":1,"Rejected":0,"Reopen":0,"Pending":0,"Open":1,"Fixed":0}}]},{"title":"R2 Delta/General/Mobile/Permisos/Pruebas QA","total":30,"date":1565751600000,"teamColumns":[{"title":"Desarrollo","state":{"New":9,"Done":0,"Total":27,"Rejected":7,"Reopen":0,"Pending":0,"Open":0,"Fixed":11}},{"title":"Testing","state":{"New":0,"Done":0,"Total":1,"Rejected":0,"Reopen":0,"Pending":1,"Open":0,"Fixed":0}},{"title":"ICBC","state":{"New":2,"Done":0,"Total":2,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":0}}]}]}
public initGraphServiceDataTotales: InitGraphData = {"firstValues":[22,28,253,246],"secondValues":[6,6,15,12],"thirdValues":[0,0,173,161],"datesValues":[1565406000000,1565578800000,1565665200000,1565751600000]}
public initGraphServiceDataTotalesPorEquipo: InitGraphData = {"firstValues":[21,27,237,237],"secondValues":[0,0,3,3],"thirdValues":[1,1,13,6],"datesValues":[1565406000000,1565578800000,1565665200000,1565751600000]}
public initGraphServiceDataCreatedTotals: InitGraphData = {"firstValues":[2,2,5,6],"secondValues":[15,21,177,171],"thirdValues":[2,2,21,18],"datesValues":[1565406000000,1565578800000,1565665200000,1565751600000]}


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
	dataR15INTGRA: any;
	dataR15Regresion: any;
	dataCreated: any;

	constructor() { }
	ngOnInit() {
		this.parseDataToGraphTotals();
		this.parseDataToGraphTotalsByTeam();
		this.parseDataToGraphCreatedTotals();
		/**
		 * 
		 this.parseDataToGraphR15INTGRAByTeam();
		 */

		this.initTableData.tables.forEach(element => {
			this.tables.push(element);
		});
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
			{
				data: this.initGraphServiceDataTotales.firstValues, label: "Totales",
				fill: false,
				borderColor: '#4bc0c0'
			},
			{
				data: this.initGraphServiceDataTotales.secondValues, label: "Cobros",
				fill: true,
				borderColor: '#565656'
			},
			{
				data: this.initGraphServiceDataTotales.thirdValues, label: "Pagos",
				fill: true,
				borderColor: '#9CCC65'
			}
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
			{
				data: this.initGraphServiceDataTotalesPorEquipo.firstValues, label: "Desarrollo",
				fill: false,
				borderColor: '#4bc0c0'
			},
			{
				data: this.initGraphServiceDataTotalesPorEquipo.secondValues, label: "ICBC",
				fill: true,
				borderColor: '#565656'
			},
			{
				data: this.initGraphServiceDataTotalesPorEquipo.thirdValues, label: "Testing",
				fill: true,
				borderColor: '#9CCC65'
			}
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
			{
				data: this.initGraphServiceDataR15INTGRAPorEquipo.firstValues, label: "Desarrollo",
				fill: false,
				borderColor: '#4bc0c0'
			},
			{
				data: this.initGraphServiceDataR15INTGRAPorEquipo.secondValues, label: "ICBC",
				fill: true,
				borderColor: '#565656'
			},
			{
				data: this.initGraphServiceDataR15INTGRAPorEquipo.thirdValues, label: "Testing",
				fill: true,
				borderColor: '#9CCC65'
			}
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
			{
				data: this.initGraphServiceDataR15RegresionPorEquipo.firstValues, label: "Desarrollo",
				fill: false,
				borderColor: '#4bc0c0'
			},
			{
				data: this.initGraphServiceDataR15RegresionPorEquipo.secondValues, label: "Funcional",
				fill: true,
				borderColor: '#565656'
			},
			{
				data: this.initGraphServiceDataR15RegresionPorEquipo.thirdValues, label: "Testing",
				fill: true,
				borderColor: '#9CCC65'
			}
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
			{
				data: this.initGraphServiceDataCreatedTotals.firstValues, label: "Reopen",
				fill: false,
				borderColor: '#4bc0c0'
			},
			{
				data: this.initGraphServiceDataCreatedTotals.secondValues, label: "New",
				fill: true,
				borderColor: '#565656'
			},
			{
				data: this.initGraphServiceDataCreatedTotals.thirdValues, label: "Open",
				fill: true,
				borderColor: '#9CCC65'
			}
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

	public initGraphServiceDataR15INTGRAPorEquipo: InitGraphData = { "firstValues": [0], "secondValues": [0], "thirdValues": [0], "datesValues": [1565665200000] }
	public initGraphServiceDataR15RegresionPorEquipo: InitGraphData = { "firstValues": [0], "secondValues": [0], "thirdValues": [0], "datesValues": [1565665200000] }
}

export interface InitGraphData {
	firstValues;
	secondValues;
	thirdValues;
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
