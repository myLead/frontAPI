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
  public doughnutChartLabels:String[] = ["100","115","120","135","85","90","95"];
  //public doughnutChartLabels:String[] = [];
  public doughnutChartData:Number[] = [];
  public doughnutChartType:string = 'doughnut';

  private arrayValores: Number[]
  private arrayIndex: String[]
  private arrayValor: Number[] = [];
  private arrayString: String[]
  
 
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
      this.arrayString = this.grafico.getArrayDados()[0]["Scoring_Superleads"].split(" ");
      //console.log(this.arrayString);
      var array = this.arrayString[1].split(",");
      //console.log(array);
      for (var i=0; i<7; i++) {
        var valor = parseFloat(array[i]);
        this.arrayValor.push(valor);
      }
      this.doughnutChartData = this.arrayValor;
    } else{
      this.doughnutChartData.push(0);
      this.doughnutChartData.push(0);
      this.doughnutChartData.push(0);
      this.doughnutChartData.push(0);
      this.doughnutChartData.push(0);
      this.doughnutChartData.push(0);
      this.doughnutChartData.push(0);
      
    }
  }
  /*
  separarString(){
    this.obj = this.grafico.getArrayDados()[0];
    var arrayString = this.obj["Scoring_Superleads"].split(" ");
    var arrayValores: number[]
    var arrayIndex: Number[]
    var arrayValor: Number[]

    for (var i=0; i<7; i++) {
      arrayIndex.push(Number(arrayString[0]));
      arrayValor.push(Number(arrayString[1]));
    }

    //arrayValores.push(Number(stringScoring.split(",")));
    //var myArray = "14 2".split(" ");
    //for(var i=0; i<myArray.length; i++) { myArray[i] = +myArray[i]; } 
  }*/

  

}
