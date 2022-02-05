var deret = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
function deretAD(x) {
    console.log('sebelumnya :' + deret)
    var deret1 = x.sort()
    console.log('Ascending :' + deret1)
    console.log('Descending :' + deret1.reverse())
    console.log('filter > 10 :' + x.filter(x => {
        return x > 10;
    }))
}

deretAD(deret)