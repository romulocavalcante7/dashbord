// Dados do gráfico
const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Vendas',
      data: [2000, 3500, 3000, 4500, 4000, 5000],
      backgroundColor: '#333',
      borderColor: '#333',
      borderWidth: 1
    }]
  };
  
  // Opções do gráfico
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  // Cria o gráfico
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
  
  // Funções para atualizar os dados do gráfico
  function changeVendas() {
    myChart.data.datasets[0].data = [4000, 2500, 5000, 2000, 3500, 3000];
    myChart.update();
  }
  
  function changeVisitantes() {
    myChart.data.datasets[0].data = [5000, 4000, 3000, 4500, 2500, 3500];
    myChart.update();
  }
  
  function changeTempo() {
    myChart.data.datasets[0].data = [2000, 2500, 3500, 4000, 5000, 4500];
    myChart.update();
  }
  
  function changeRejeicao() {
    myChart.data.datasets[0].data = [3500, 3000, 2500, 4000, 4500, 5000];
    myChart.update();
  }
  
