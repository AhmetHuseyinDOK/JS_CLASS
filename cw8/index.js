fetch('data.txt').then((data) => data.text().then((text) => {
    makeRows(toList(text))
}));

function toList(str) {
    function toObject(x) {
      let b = {}
      for (let [i,s] of x.split('\t').entries())
        b[keys[i]] = (isNaN(s)? s : Number(s))
      return b
    }
      let [d0, ...data] = str.split('\n')
      let keys = d0.split('\t')
      console.log("Keys:", keys)
      return data.map(toObject)
  }

function makeRows(data) {
    let attrs = Object.keys(data[0]);
    let n =  attrs.length;
    let m = data.length;

    let row = "<th></th>";
    for (let j = 1; j <= n; j++) 
        row += "<th>"+attrs[j -1 ]+"</th>";
    let text = "<tr>"+row+"</tr>";
    for (let i = 1; i <= m; i++) {
       row = "<th>"+i+"</th>";
       for (let j = 1; j <= n; j++) {
          let p = n*(i-1)+j;
          let s = "<span class=tip>C"+p+"</span>"
          row += "<td>"+ data[i -1][attrs[j -1]] + s+"</td>";
       }
       text += "<tr>"+row+"</tr>";
    }
    let t = text.length+" chars";
    console.log("makeRows: "+m+"x"+n+" "+t);
    tablo.innerHTML = text; 
}
