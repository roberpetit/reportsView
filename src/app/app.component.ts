import { Component } from '@angular/core';
import { DataTableModule, SharedModule, DataTable } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
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
	dataR15:any;
	dataCreated:any;

	constructor() { }
	ngOnInit() {
		this.parseDataToGraphTotals();
		this.parseDataToGraphTotalsByTeam();
		this.parseDataToGraphR15ByTeam();
		this.parseDataToGraphCreatedTotals();

		this.tables = this.initTableData.tables;
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
			{ data: this.initGraphServiceDataTotales.fbdValues, label: "Release 1.5",
			fill: true,
			borderColor: '#565656' },
			{ data: this.initGraphServiceDataTotales.qaValues, label: "Release 1",
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
	public parseDataToGraphR15ByTeam() {
		this.lineChartDataTotales3 = [
			{ data: this.initGraphServiceDataR15PorEquipo.totalesValues, label: "Desarrollo",
			fill: false,
			borderColor: '#4bc0c0' },
			{ data: this.initGraphServiceDataR15PorEquipo.fbdValues, label: "Funcional",
			fill: true,
			borderColor: '#565656' },
			{ data: this.initGraphServiceDataR15PorEquipo.qaValues, label: "Testing",
			fill: true,
			borderColor: '#9CCC65' }
		];
		this.initGraphServiceDataTotales.datesValues.forEach(element => {
			this.lineChartLabels3.push(this.convertToDate(element));
		});
		this.dataR15 = {
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
	public initGraphServiceDataTotales: InitGraphData = {"totalesValues":[181,179,184,163,165,177,177,179,172,170,168,173,175,203,190,176,165,171,181,174,177,173,156,133,125,124,135,143,145,142,134,127,130,119,122,125,115,118,113,113,113,113,110,111,100,91,89,92,93,93,93,88,78,80,83,87,91,94,86,86,83,83,81,84,79,77,77,87,91,83,79,72,70,69,64,56,52,51],"fbdValues":[113,111,116,114,119,131,132,134,131,129,127,126,128,138,125,112,109,114,124,117,120,119,112,101,96,96,107,115,117,113,105,98,92,89,85,85,76,79,74,75,75,75,73,74,63,54,53,57,58,60,60,55,51,54,57,61,65,68,63,63,60,60,58,61,56,54,54,64,69,66,64,57,55,54,49,41,37,36],"qaValues":[68,68,68,49,46,46,45,45,41,41,41,47,47,65,65,64,56,57,57,57,57,54,44,32,29,28,28,28,28,29,29,29,38,30,37,40,39,39,39,38,38,38,37,37,37,37,36,35,35,33,33,33,27,26,26,26,26,26,23,23,23,23,23,23,23,23,23,23,22,17,15,15,15,15,15,15,15,15],"datesValues":[1536030000000,1536116400000,1536202800000,1536289200000,1536548400000,1536634800000,1536721200000,1536807600000,1536894000000,1537153200000,1537239600000,1537326000000,1537412400000,1537498800000,1537758000000,1537844400000,1537930800000,1538017200000,1538103600000,1538362800000,1538449200000,1538535600000,1538622000000,1538708400000,1538967600000,1539054000000,1539140400000,1539226800000,1539313200000,1539658800000,1539745200000,1539831600000,1539918000000,1540177200000,1540263600000,1540350000000,1540436400000,1540522800000,1540782000000,1540868400000,1540954800000,1541041200000,1541386800000,1541473200000,1541646000000,1541732400000,1541991600000,1542078000000,1542164400000,1542337200000,1542682800000,1542769200000,1542855600000,1542942000000,1543201200000,1543287600000,1543374000000,1543460400000,1543892400000,1544065200000,1544151600000,1544410800000,1544497200000,1544670000000,1544756400000,1545015600000,1545188400000,1545274800000,1545793200000,1545879600000,1545966000000,1546398000000,1546484400000,1546570800000,1546830000000,1546916400000,1547002800000,1547089200000]}
	public initGraphServiceDataTotalesPorEquipo: InitGraphData = {"totalesValues":[18,19,18,18,18,20,27,26,27,26,25,24,26,24,21,19,22,28,30,28,23,29,26,23,20,19,28,34,37,32,39,29,22,13,12,10,11,11,17,20,19,20,22,23,19,18,14,24,25,28,23,25,14,17,19,23,22,18,10,8,9,12,11,8,10,10,6,10,16,14,24,14,24,18,18,14,10,14],"fbdValues":[96,95,88,82,59,61,80,71,74,75,74,80,81,64,66,67,77,86,72,69,64,63,67,57,66,67,69,68,63,63,47,52,64,49,60,72,58,56,45,54,49,41,38,38,37,31,22,22,22,24,19,20,21,19,22,24,26,32,28,31,32,23,30,38,29,29,30,38,30,30,20,22,11,14,15,12,12,11],"qaValues":[36,36,48,34,62,67,40,51,41,39,40,40,39,82,68,54,30,23,45,44,57,49,33,22,10,9,9,10,14,12,12,9,6,19,11,9,15,17,17,4,8,15,13,13,7,6,15,12,12,11,21,12,11,8,8,9,8,8,12,11,10,12,4,4,4,4,4,5,16,9,3,3,3,6,4,6,7,3],"datesValues":[1536030000000,1536116400000,1536202800000,1536289200000,1536548400000,1536634800000,1536721200000,1536807600000,1536894000000,1537153200000,1537239600000,1537326000000,1537412400000,1537498800000,1537758000000,1537844400000,1537930800000,1538017200000,1538103600000,1538362800000,1538449200000,1538535600000,1538622000000,1538708400000,1538967600000,1539054000000,1539140400000,1539226800000,1539313200000,1539658800000,1539745200000,1539831600000,1539918000000,1540177200000,1540263600000,1540350000000,1540436400000,1540522800000,1540782000000,1540868400000,1540954800000,1541041200000,1541386800000,1541473200000,1541646000000,1541732400000,1541991600000,1542078000000,1542164400000,1542337200000,1542682800000,1542769200000,1542855600000,1542942000000,1543201200000,1543287600000,1543374000000,1543460400000,1543892400000,1544065200000,1544151600000,1544410800000,1544497200000,1544670000000,1544756400000,1545015600000,1545188400000,1545274800000,1545793200000,1545879600000,1545966000000,1546398000000,1546484400000,1546570800000,1546830000000,1546916400000,1547002800000,1547089200000]}
	public initGraphServiceDataR15PorEquipo: InitGraphData = {"totalesValues":[13,14,13,13,13,15,22,21,22,21,20,19,21,19,13,11,14,20,22,20,15,19,18,16,15,14,23,29,32,27,34,24,17,11,10,8,9,9,9,11,10,11,13,14,10,9,5,15,16,19,14,16,11,14,16,20,19,15,7,5,6,9,8,5,7,7,3,7,13,12,20,10,20,14,14,10,6,10],"fbdValues":[54,53,57,56,35,38,56,51,54,55,53,53,54,25,28,29,37,46,52,49,45,44,39,40,49,50,52,51,46,46,30,35,39,29,35,45,32,30,24,33,28,21,19,19,17,12,9,10,10,13,8,9,10,7,10,12,14,20,15,18,19,10,17,25,16,16,17,25,20,24,16,18,7,10,11,8,8,7],"qaValues":[22,22,23,23,51,55,30,37,30,28,29,29,28,66,54,41,26,18,20,19,31,28,29,18,7,7,7,8,12,9,9,6,3,16,6,3,9,11,12,1,5,11,9,9,4,2,6,3,3,3,13,4,3,2,2,3,2,2,10,9,8,10,2,2,2,2,2,3,12,5,1,1,1,4,2,4,5,1],"datesValues":[1536030000000,1536116400000,1536202800000,1536289200000,1536548400000,1536634800000,1536721200000,1536807600000,1536894000000,1537153200000,1537239600000,1537326000000,1537412400000,1537498800000,1537758000000,1537844400000,1537930800000,1538017200000,1538103600000,1538362800000,1538449200000,1538535600000,1538622000000,1538708400000,1538967600000,1539054000000,1539140400000,1539226800000,1539313200000,1539658800000,1539745200000,1539831600000,1539918000000,1540177200000,1540263600000,1540350000000,1540436400000,1540522800000,1540782000000,1540868400000,1540954800000,1541041200000,1541386800000,1541473200000,1541646000000,1541732400000,1541991600000,1542078000000,1542164400000,1542337200000,1542682800000,1542769200000,1542855600000,1542942000000,1543201200000,1543287600000,1543374000000,1543460400000,1543892400000,1544065200000,1544151600000,1544410800000,1544497200000,1544670000000,1544756400000,1545015600000,1545188400000,1545274800000,1545793200000,1545879600000,1545966000000,1546398000000,1546484400000,1546570800000,1546830000000,1546916400000,1547002800000,1547089200000]}
	public initGraphServiceDataCreatedTotals: InitGraphData = {"totalesValues":[9,8,8,8,7,6,6,6,6,6,7,7,6,6,9,10,13,11,11,11,12,11,13,12,13,11,9,10,9,6,4,4,9,9,10,11,13,14,7,7,6,6,7,7,8,7,8,6,5,5,6,8,8,9,9,8,9,8,8,11,10,10,11,8,10,8,5,4,5,5,6,4,4,3,3,5,5,3],"fbdValues":[53,47,49,42,37,37,39,33,34,31,31,34,29,44,42,43,54,47,31,24,28,23,21,21,25,27,29,37,29,27,25,36,45,40,45,41,40,41,35,36,31,31,30,30,29,23,25,24,23,18,17,16,17,20,20,19,22,29,24,19,15,19,22,26,17,22,25,24,21,22,17,16,19,20,18,15,14,13],"qaValues":[9,9,7,6,6,9,27,24,25,16,14,11,13,5,4,4,5,15,11,12,11,11,21,11,12,9,7,7,5,4,7,6,9,9,8,8,7,9,7,9,10,11,7,7,6,4,4,4,4,4,2,2,2,2,2,3,3,3,3,5,4,5,5,6,5,4,4,11,4,4,4,5,4,3,3,3,1,1],"datesValues":[1536030000000,1536116400000,1536202800000,1536289200000,1536548400000,1536634800000,1536721200000,1536807600000,1536894000000,1537153200000,1537239600000,1537326000000,1537412400000,1537498800000,1537758000000,1537844400000,1537930800000,1538017200000,1538103600000,1538362800000,1538449200000,1538535600000,1538622000000,1538708400000,1538967600000,1539054000000,1539140400000,1539226800000,1539313200000,1539658800000,1539745200000,1539831600000,1539918000000,1540177200000,1540263600000,1540350000000,1540436400000,1540522800000,1540782000000,1540868400000,1540954800000,1541041200000,1541386800000,1541473200000,1541646000000,1541732400000,1541991600000,1542078000000,1542164400000,1542337200000,1542682800000,1542769200000,1542855600000,1542942000000,1543201200000,1543287600000,1543374000000,1543460400000,1543892400000,1544065200000,1544151600000,1544410800000,1544497200000,1544670000000,1544756400000,1545015600000,1545188400000,1545274800000,1545793200000,1545879600000,1545966000000,1546398000000,1546484400000,1546570800000,1546830000000,1546916400000,1547002800000,1547089200000]}
	public initTableData: any =  {"tables":[{"title":"Backlog Total","total":51,"date":1547089200000,"teamColumns":[{"title":"Desarrollo","state":{"New":3,"Done":5,"Total":11,"Rejected":0,"Reopen":1,"Pending":1,"Open":1,"Fixed":0}},{"title":"Funcional","state":{"New":1,"Done":0,"Total":3,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":2}},{"title":"Testing","state":{"New":1,"Done":0,"Total":14,"Rejected":4,"Reopen":0,"Pending":2,"Open":0,"Fixed":7}},{"title":"ICBC","state":{"New":8,"Done":0,"Total":23,"Rejected":13,"Reopen":2,"Pending":0,"Open":0,"Fixed":0}}]},{"title":"Release 1.5 INTGRA","total":36,"date":1547089200000,"teamColumns":[{"title":"Desarrollo","state":{"New":1,"Done":5,"Total":7,"Rejected":0,"Reopen":0,"Pending":1,"Open":0,"Fixed":0}},{"title":"Funcional","state":{"New":1,"Done":0,"Total":1,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":0}},{"title":"Testing","state":{"New":1,"Done":0,"Total":10,"Rejected":4,"Reopen":0,"Pending":2,"Open":0,"Fixed":3}},{"title":"ICBC","state":{"New":4,"Done":0,"Total":18,"Rejected":13,"Reopen":1,"Pending":0,"Open":0,"Fixed":0}}]},{"title":"Pruebas QA - R1","total":15,"date":1547089200000,"teamColumns":[{"title":"Desarrollo","state":{"New":2,"Done":0,"Total":4,"Rejected":0,"Reopen":1,"Pending":0,"Open":1,"Fixed":0}},{"title":"Funcional","state":{"New":0,"Done":0,"Total":2,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":2}},{"title":"Testing","state":{"New":0,"Done":0,"Total":4,"Rejected":0,"Reopen":0,"Pending":0,"Open":0,"Fixed":4}},{"title":"ICBC","state":{"New":4,"Done":0,"Total":5,"Rejected":0,"Reopen":1,"Pending":0,"Open":0,"Fixed":0}}]}]}
	
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
