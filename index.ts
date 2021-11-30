let a = [2, 4, 1, 0];
console.log(sovle(a));

function sovle(a: number[]): number {
    let r: number = 0;
    let p: number = 0;

    a.forEach(v => {
        const d = Math.abs( v - p);
        p = v;
        if(d > r) r = d;
    });

    return r;
}
