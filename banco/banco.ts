import { Cliente } from "./cliente";

export class Banco{
    nome:string;
    saldoCorrente:number;
    saldoPoupanca:number;
    saldoInvestimento:number;
    rendimentoInvestimento:number;
    

    consultarSaldo(){
        const saldoTotal:number = this.saldoCorrente + this.saldoPoupanca + this.saldoInvestimento + this.rendimentoInvestimento
        console.log(`${this.nome} seu saldo total em conta.\nSaldo: ${saldoTotal}\n\nSaldo Corrente: ${this.saldoCorrente}\nSaldo Poupança: ${this.saldoPoupanca}\nSaldo Investimento: ${this.saldoInvestimento}`)
    }
    consultarCorrente(){
        console.log(`${this.nome} seu saldo em conta corrente.\nSaldo: ${this.saldoCorrente}`)
    }
    consultarPoupanca(){
        console.log(`${this.nome} seu saldo em conta poupanca.\nSaldo: ${this.saldoPoupanca}`)
    }
    consultarInvestimento(){
        console.log(`${this.nome} seu saldo em conta de investimentos.\nSaldo: ${this.saldoInvestimento}`)
    }
    consultarRendimento(){
        console.log(`${this.nome} seus rendimentos.\nSaldo: ${this.rendimentoInvestimento}`)
    }
}