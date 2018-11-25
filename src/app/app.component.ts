import { Component } from '@angular/core';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reportView';
  tableTitle;
  tableTotal;
  teams:Team[] = [];
  tables:Table[] = [];
  dataGraph;
  lineChartDataTotales:Array<any> = [];
  lineChartDataDev:Array<any> = [];
  lineChartLabels:Array<any> = [];

  constructor(){}
  ngOnInit() {
    this.parseDataToGraphTotals();
    this.parseDataToGrapTeamTotals();
    this.parseDataToGrapTeamR15();
    
    this.tables = dataForTable.tables;
    this.teams = dataForTable.tables[0].teamColumns;
    this.tableTitle = dataForTable.tables[0].title;
    this.tableTotal = dataForTable.tables[0].total;
  }


  convertToDate(strDate:any) {
    let date = new Date(strDate);
    return date.toLocaleDateString('es');
  }

 public parseDataToGraphTotals() {
  this.lineChartDataTotales = [{data: this.initGraphServiceDataTotales.totalesValues,  label:"Totales"},
    {data:this.initGraphServiceDataTotales.fbdValues, label:"Release 1.5"},
    {data:this.initGraphServiceDataTotales.qaValues, label:"Release 1"}
    ];
    this.initGraphServiceDataTotales.datesValues.forEach(element => {
      this.lineChartLabels.push(this.convertToDate(element));
    });
 }
 public parseDataToGraphTotalsByTeam() {
  this.lineChartDataTotales = [{data: this.initGraphServiceDataTotalesPorEquipo.totalesValues,  label:"Totales"},
    {data:this.initGraphServiceDataTotalesPorEquipo.fbdValues, label:"Release 1.5"},
    {data:this.initGraphServiceDataTotalesPorEquipo.qaValues, label:"Release 1"}
    ];
    this.initGraphServiceDataTotalesPorEquipo.datesValues.forEach(element => {
      this.lineChartLabels.push(this.convertToDate(element));
    });
 }
public parseDataToGraphR15ByTeam() {
  this.lineChartDataTotales = [{data: this.initGraphServiceDataR15PorEquipo.totalesValues,  label:"Totales"},
    {data:this.initGraphServiceDataR15PorEquipo.fbdValues, label:"Release 1.5"},
    {data:this.initGraphServiceDataR15PorEquipo.qaValues, label:"Release 1"}
    ];
    this.initGraphServiceDataR15PorEquipo.datesValues.forEach(element => {
      this.lineChartLabels.push(this.convertToDate(element));
    });
 }
 

  public lineChartOptions:any = {
    responsive: false,
    maintainAspectRatio: true
  };
  public lineChartColors:Array<any> = [
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
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  public initGraphServiceDataTotales:InitGraphData = {"totalesValues":[183,156,156,162,160,165,144,145,154,153,155,148,146,143,148,149,177,162,148,137,143,152,145,147,145,129,106,99,98,109,117,119,115,108,101,103,95,98,101,94,98,94,94,94,94,91,92,81,72,66,71,72,74,76,70,61],"fbdValues":[107,99,96,96,94,99,97,101,110,110,112,109,107,104,103,104,114,99,86,83,88,97,90,92,93,87,76,72,72,83,91,93,88,81,74,67,67,63,63,57,61,57,58,58,58,56,57,46,37,32,38,39,43,45,39,36],"qaValues":[76,57,60,66,66,66,47,44,44,43,43,39,39,39,45,45,63,63,62,54,55,55,55,55,52,42,30,27,26,26,26,26,27,27,27,36,28,35,38,37,37,37,36,36,36,35,35,35,35,34,33,33,31,31,31,25],"datesValues":[1535511600000,1535598000000,1535684400000,1536030000000,1536116400000,1536202800000,1536289200000,1536548400000,1536634800000,1536721200000,1536807600000,1536894000000,1537153200000,1537239600000,1537326000000,1537412400000,1537498800000,1537758000000,1537844400000,1537930800000,1538017200000,1538103600000,1538362800000,1538449200000,1538535600000,1538622000000,1538708400000,1538967600000,1539054000000,1539140400000,1539226800000,1539313200000,1539658800000,1539745200000,1539831600000,1539918000000,1540177200000,1540263600000,1540350000000,1540436400000,1540522800000,1540782000000,1540868400000,1540954800000,1541041200000,1541386800000,1541473200000,1541646000000,1541732400000,1541991600000,1542078000000,1542164400000,1542337200000,1542682800000,1542769200000,1542855600000]}

public initGraphServiceDataTotalesPorEquipo:InitGraphData ={"totalesValues":[11,15,11,17,18,17,17,16,18,24,23,24,23,22,21,22,21,12,10,13,18,20,18,18,24,21,19,16,15,24,28,29,21,25,19,16,10,8,7,7,8,13,16,13,14,16,17,16,15,11,21,21,27,22,23,12],"fbdValues":[116,92,105,96,95,88,82,59,61,81,72,75,76,74,80,82,65,73,74,84,94,79,76,78,66,69,58,68,69,71,72,69,72,59,60,67,52,64,75,60,59,49,58,55,47,44,44,40,34,23,23,24,25,20,22,23],"qaValues":[46,36,27,36,36,48,34,62,67,40,51,41,39,40,40,39,82,68,54,30,23,45,44,44,49,33,22,10,9,9,10,14,12,12,9,6,19,11,9,15,17,17,4,8,15,13,13,7,6,15,12,12,11,21,12,11],"datesValues":[1535511600000,1535598000000,1535684400000,1536030000000,1536116400000,1536202800000,1536289200000,1536548400000,1536634800000,1536721200000,1536807600000,1536894000000,1537153200000,1537239600000,1537326000000,1537412400000,1537498800000,1537758000000,1537844400000,1537930800000,1538017200000,1538103600000,1538362800000,1538449200000,1538535600000,1538622000000,1538708400000,1538967600000,1539054000000,1539140400000,1539226800000,1539313200000,1539658800000,1539745200000,1539831600000,1539918000000,1540177200000,1540263600000,1540350000000,1540436400000,1540522800000,1540782000000,1540868400000,1540954800000,1541041200000,1541386800000,1541473200000,1541646000000,1541732400000,1541991600000,1542078000000,1542164400000,1542337200000,1542682800000,1542769200000,1542855600000]}
public initGraphServiceDataR15PorEquipo:InitGraphData ={"totalesValues":[6,10,6,12,13,12,12,11,13,19,18,19,18,17,16,17,16,7,5,8,13,15,13,13,17,16,14,11,10,19,23,24,16,20,14,11,9,7,6,6,7,6,8,5,6,8,9,8,7,3,13,13,19,14,15,10],"fbdValues":[76,59,64,54,53,57,56,35,38,57,52,55,56,53,53,55,26,32,33,41,51,56,53,55,44,38,39,51,52,54,55,52,55,42,43,42,31,38,47,33,32,27,36,33,26,24,24,19,14,9,10,11,13,8,10,11],"qaValues":[20,22,18,22,22,23,23,51,55,30,37,30,28,29,29,28,66,54,41,26,18,20,19,19,28,29,18,7,7,7,8,12,9,9,6,3,16,6,3,9,11,12,1,5,11,9,9,4,2,6,3,3,3,13,4,3],"datesValues":[1535511600000,1535598000000,1535684400000,1536030000000,1536116400000,1536202800000,1536289200000,1536548400000,1536634800000,1536721200000,1536807600000,1536894000000,1537153200000,1537239600000,1537326000000,1537412400000,1537498800000,1537758000000,1537844400000,1537930800000,1538017200000,1538103600000,1538362800000,1538449200000,1538535600000,1538622000000,1538708400000,1538967600000,1539054000000,1539140400000,1539226800000,1539313200000,1539658800000,1539745200000,1539831600000,1539918000000,1540177200000,1540263600000,1540350000000,1540436400000,1540522800000,1540782000000,1540868400000,1540954800000,1541041200000,1541386800000,1541473200000,1541646000000,1541732400000,1541991600000,1542078000000,1542164400000,1542337200000,1542682800000,1542769200000,1542855600000]}


  public initGraphServiceDataDev:InitGraphData = null

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


export const dataForTable = {"tables":[{"title":"Backlog Total","total":61,"date":1542855600000,"teamColumns":[{"title":"Desarrollo","state":{"New":7,"Done":1,"Total":23,"Rejected":5,"Reopen":2,"Pending":5,"Open":1,"Fixed":2}},{"title":"Funcional","state":{"New":0,"Done":1,"Total":11,"Rejected":6,"Reopen":0,"Pending":1,"Open":0,"Fixed":3}},{"title":"Testing","state":{"New":0,"Done":0,"Total":12,"Rejected":6,"Reopen":0,"Pending":0,"Open":0,"Fixed":6}},{"title":"ICBC","state":{"New":8,"Done":0,"Total":15,"Rejected":0,"Reopen":6,"Pending":0,"Open":1,"Fixed":0}}]},{"title":"Release 1.5 INTGRA","total":36,"date":1542855600000,"teamColumns":[{"title":"Desarrollo","state":{"New":3,"Done":1,"Total":11,"Rejected":3,"Reopen":2,"Pending":0,"Open":0,"Fixed":2}},{"title":"Funcional","state":{"New":0,"Done":0,"Total":3,"Rejected":2,"Reopen":0,"Pending":1,"Open":0,"Fixed":0}},{"title":"Testing","state":{"New":0,"Done":0,"Total":10,"Rejected":5,"Reopen":0,"Pending":0,"Open":0,"Fixed":5}},{"title":"ICBC","state":{"New":6,"Done":0,"Total":12,"Rejected":0,"Reopen":5,"Pending":0,"Open":1,"Fixed":0}}]},{"title":"Pruebas QA - R1","total":25,"date":1542855600000,"teamColumns":[{"title":"Desarrollo","state":{"New":4,"Done":0,"Total":12,"Rejected":2,"Reopen":0,"Pending":5,"Open":1,"Fixed":0}},{"title":"Funcional","state":{"New":0,"Done":1,"Total":8,"Rejected":4,"Reopen":0,"Pending":0,"Open":0,"Fixed":3}},{"title":"Testing","state":{"New":0,"Done":0,"Total":2,"Rejected":1,"Reopen":0,"Pending":0,"Open":0,"Fixed":1}},{"title":"ICBC","state":{"New":2,"Done":0,"Total":3,"Rejected":0,"Reopen":1,"Pending":0,"Open":0,"Fixed":0}}]}]}
