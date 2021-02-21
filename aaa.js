Plotly.d3.csv('https://raw.githubusercontent.com/kajirikajiri/csv/master/aaa.csv', function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }

  var z_data = []
  for (i = 0; i < 6; i++) {
    z_data.push(unpack(rows, i));
  }

  let ii = 2;
  let iii = 1990;
  const X = [...Array(rows.length).keys()].map(i=> {
    const res = `${iii}年${ii}月`
    ii += 1
    if (ii === 13) {
      iii += 1
      ii = 1
    }
    return res
  })
  const Y1 = [...Array(rows.length).keys()].map(()=>
    '3ヶ月'
  )
  const Y2 = [...Array(rows.length).keys()].map(()=>
    '6ヶ月'
  )
  const Y3 = [...Array(rows.length).keys()].map(()=>
    '2年'
  )
  const Y4 = [...Array(rows.length).keys()].map(()=>
    '5年'
  )
  const Y5 = [...Array(rows.length).keys()].map(()=>
    '10年'
  )
  const Y6 = [...Array(rows.length).keys()].map(()=>
    '30年'
  )

  // x: 1990:1~12~2021:1~12, y: 3m, 6m, 2y, 5y, 10y, 30y, z: 0~10
  // x: [[1990年2月, ...], ...]
  // 3m, 6m, 2y, 5y, 10y, 30y

  var data = [{
    z: z_data,
    x: [X,X,X,X,X,X],
    y: [Y1,Y2,Y3,Y4,Y5,Y6],
    // text: [],
    type: 'surface',
    contours: {
      z: {
        show: true,
        usecolormap: true,
        highlightcolor: "#42f462",
        project: { z: true }
      },
    },
    colorscale: [
      // [0, 'rgb(255, 0, 0)'],
      // [0.5, 'rgb(0, 255, 0)'],
      // [1, 'rgb(0, 0, 255)']
      // [0.0, 'rgb(255, 0, 0)'],
      // [0.1, 'rgb(0, 255, 0)'],
      // [0.2, 'rgb(0, 0, 255)'],
      // [0.3, 'rgb(255, 0, 0)'],
      // [0.4, 'rgb(0, 255, 0)'],
      // [0.5, 'rgb(0, 0, 255)'],
      // [0.6, 'rgb(255, 0, 0)'],
      // [0.7, 'rgb(0, 255, 0)'],
      // [0.8, 'rgb(0, 0, 255)'],
      // [0.9, 'rgb(255, 0, 0)'],
      // [1.0, 'rgb(0, 255, 0)'],
      [0.0, '#d50000'],
      [0.1, '#64dd17'],
      [0.2, '#aa00ff'],
      [0.3, '#ffd600'],
      [0.4, '#304ffe'],
      [0.5, '#ff6d00'],
      [0.6, '#0091ea'],
      [0.7, '#3e2723'],
      [0.8, '#00bfa5'],
      [0.9, '#558b2f'],
      [1.0, '#9e9d24'],
    ]
  }];

  var layout = {
    title: 'イールドカーブ',
    autosize: false,
    width: 1900,
    height: 1000,
    scene: {
      camera: {eye: {x: 0.5, y: -2.00, z: -0.24}},
      xaxis: {
        title: 'xxxx年'
      },
      yaxis: {
        title: 'xx年債'
      },
      zaxis: {
        title: '年利(%)'
      }
    },
    margin: {
      l: 65,
      r: 50,
      b: 65,
      t: 90,
    },
  }
  Plotly.newPlot('myDiv', data, layout);
});
