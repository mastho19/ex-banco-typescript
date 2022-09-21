import {Banco} from './banco'

export class Cliente extends Banco{

}

const cliente1 = new Cliente()

cliente1.nome = 'Thomás'
cliente1.saldoCorrente = 10000
cliente1.saldoPoupanca = 500
cliente1.saldoInvestimento = 50
cliente1.rendimentoInvestimento = cliente1.saldoInvestimento * 0.05

cliente1.consultarSaldo()

