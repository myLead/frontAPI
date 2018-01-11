import { Component, OnInit } from '@angular/core';
import { chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
//import { chartlist } from '../../../../node_modules/chartist/dist/chartist.js';
//import { Script } from 'vm';


@Component({
  selector: 'app-grafico1',
  templateUrl: './grafico1.component.html',
  styleUrls: ['./grafico1.component.css']
})
export class Grafico1Component implements OnInit {
  public doughnutChartLabels:string[] = ['Leads', 'Clientes', 'SuperLeads'];
  public doughnutChartData:number[] = [50,30,20];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  
  
   
  constructor() { 

  }

  ngOnInit() {
    
  }

}
