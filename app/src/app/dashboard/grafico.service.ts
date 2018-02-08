import { Injectable } from "@angular/core";


@Injectable()
export class GraficosService{
    private arrayDados: Object[]
    private validacao: boolean

    constructor(){
        this.arrayDados = [];
        this.validacao = false
    }

    public setArrayDados(dados: Object){
        this.arrayDados.push(dados);
        //console.log(this.arrayDados);
        this.validacao = true;
    }

    public getArrayDados(){
        return this.arrayDados;
    }

    public getValidacao(){
        return this.validacao;
    }



}