import { Component, OnInit } from '@angular/core';
import { chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import { GraficosService } from '../grafico.service';
//import { chartlist } from '../../../../node_modules/chartist/dist/chartist.js';
//import { Script } from 'vm';


@Component({
  selector: 'app-grafico1',
  templateUrl: './grafico1.component.html',
  styleUrls: ['./grafico1.component.css']
})
export class Grafico1Component implements OnInit {
  public doughnutChartLabels:string[] = ['Leads', 'Clientes', 'SuperLeads'];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';

  
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  
  
   
  constructor(private grafico: GraficosService) { 

  }

  ngOnInit() {
    this.setarGrafico();
    
  }

  setarGrafico(){
    console.log(this.grafico.getArrayDados()[0]);
    if (this.grafico.getValidacao() == true){
      this.doughnutChartData.push(this.grafico.getArrayDados()[0]["Qtde_Leads"]);
      this.doughnutChartData.push(this.grafico.getArrayDados()[0]["Qtde_Clientes"]);
      this.doughnutChartData.push(this.grafico.getArrayDados()[0]["Qtde_Superleads"]);
      console.log(this.doughnutChartData);
    }
  }

  

}
