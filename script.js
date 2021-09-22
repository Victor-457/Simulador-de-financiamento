function simular(){
	var valor = document.getElementById("valor").value;
	var prazo_ano = document.getElementById("prazo").value;
	var juros_ano = document.getElementById("juros").value;

	var prazo_mes = converteAnoMes(prazo_ano);
	var juros_mes = calculaJurosMes(juros_ano);
	var amortizacao = calculaAmortizacao(valor, prazo_ano);
	
	var juros_acumulados =0;

	for (var i = 0; i < parseInt(prazo_mes); i++) {
		juros_acumulados+= parseFloat(calculaJuros(valor, prazo_ano, juros_ano, i));
	};

	document.getElementById("prazo_mes").value = prazo_mes;
	document.getElementById("juros_mes").value = juros_mes;
	document.getElementById("juros_acumulados").value = juros_acumulados.toFixed(2);


	document.getElementById("parcela-1-amortizacao").innerHTML = amortizacao;
	document.getElementById("parcela-2-amortizacao").innerHTML = amortizacao;
	document.getElementById("parcela-3-amortizacao").innerHTML = amortizacao;
	document.getElementById("parcela-4-amortizacao").innerHTML = amortizacao;
	document.getElementById("parcela-5-amortizacao").innerHTML = amortizacao;


	document.getElementById("parcela-1-juros").innerHTML = calculaJuros(valor, prazo_ano, juros_ano, 0);
	document.getElementById("parcela-2-juros").innerHTML = calculaJuros(valor, prazo_ano, juros_ano, 1);
	document.getElementById("parcela-3-juros").innerHTML = calculaJuros(valor, prazo_ano, juros_ano, 2);
	document.getElementById("parcela-4-juros").innerHTML = calculaJuros(valor, prazo_ano, juros_ano, 3);
	document.getElementById("parcela-5-juros").innerHTML = calculaJuros(valor, prazo_ano, juros_ano, 4);

	document.getElementById("parcela-1-total").innerHTML = calculaTotalParcela(valor, prazo_ano, juros_ano, 0);
	document.getElementById("parcela-2-total").innerHTML = calculaTotalParcela(valor, prazo_ano, juros_ano, 1);
	document.getElementById("parcela-3-total").innerHTML = calculaTotalParcela(valor, prazo_ano, juros_ano, 2);
	document.getElementById("parcela-4-total").innerHTML = calculaTotalParcela(valor, prazo_ano, juros_ano, 3);
	document.getElementById("parcela-5-total").innerHTML = calculaTotalParcela(valor, prazo_ano, juros_ano, 4);

}

function converteAnoMes(prazo){
	return prazo * 12;
}

function calculaJurosMes(juros){
	return Math.pow((1+parseFloat(juros)), (1/12)) - 1;
}

function calculaAmortizacao(valor, prazo){
	var amortizacao = parseFloat(valor)/ parseInt(prazo*12);
	return parseFloat(amortizacao).toFixed(2);
}

function calculaJuros(valor, prazo, juros, parcela){
	var saldo_devedor = parseFloat(valor) - parcela * calculaAmortizacao(valor, prazo);
	
	return parseFloat(saldo_devedor * calculaJurosMes(juros)).toFixed(2);
}

function calculaTotalParcela(valor, prazo, juros, parcela){
	var amortizacao = calculaAmortizacao(valor,prazo); 
	var juros = calculaJuros(valor, prazo, juros, parcela);
	var total = parseFloat(amortizacao) + parseFloat(juros);
	return total.toFixed(2);
}