console.log('chart-test.jsを読み込みました．')

// グラフの描画位置指定
const ctx = document.getElementById('myChart1');

new Chart(ctx, {
    // 動物園・水族館で一番好きな生き物TOP5 棒グラフ
    type: 'bar',
    data: {
        labels: ['イルカ', 'パンダ', 'ペンギン', 'カピバラ', 'カワウソ'],
        datasets: [{
            label: '得票数',
            data: [313,229,211,81,68],
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const data2 = {
  labels: ['イルカ', 'パンダ', 'ペンギン', 'カピバラ', 'カワウソ'],
  datasets: [{
    label: '動物園・水族館で一番好きな生き物TOP5 円グラフ',
    data: [313,229,211,81,68],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgba(86, 255, 114, 1)',
      'rgba(255, 86, 238, 1)'
    ],
    hoverOffset: 4
  }]
};

const config2 = {
  type: 'doughnut',
  data: data2,
};

// const ctx2 = document.getElementById('myChart2');
const myChart2 = new Chart(
    // ctx2,
    $('#myChart2'), // jQueryでHTML要素を取得する
    config2,
)