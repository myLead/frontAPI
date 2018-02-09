import { Component, OnInit } from '@angular/core';
import { GraficosService } from '../grafico.service';

@Component({
  selector: 'app-grafico2',
  templateUrl: './grafico2.component.html',
  styleUrls: ['./grafico2.component.css']
})
export class Grafico2Component implements OnInit {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['5', '6', '7', '8'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  private arrayValores: Number[]
  private arrayIndex: String[]
  private arrayValor: Number[] = [];
  private arrayString: String[]
 
  public barChartData:any[] = [
<<<<<<< HEAD
    {data: [], label: 'Porcentagem de Leads'},
=======
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Leads'},
>>>>>>> dbd6fd51cfd7e6c276d66ec0c3ac228633c7a488
    //{data: [28, 48, 40, 19, 86, 27, 90], label: 'Clientes'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
  constructor(private grafico: GraficosService) { }

  ngOnInit() {
    this.setarGrafico();
  }

  setarGrafico(){
    console.log(this.grafico.getArrayDados()[0]);
    if (this.grafico.getValidacao() == true){
      this.arrayString = this.grafico.getArrayDados()[0]["Interacoes_Superleads"].split(" ");
      //console.log(this.arrayString);
      var array = this.arrayString[1].split(",");
      //console.log(array);
      for (var i=0; i<4; i++) {
        var valor = parseFloat(array[i]);
        this.arrayValor.push(valor);
      }
      this.barChartData[0]["data"] = this.arrayValor;
      //this.doughnutChartData = this.arrayValor;
    } else{
      this.barChartData[0]["data"] = [0,0,0,0];
      
    }
  }

}
