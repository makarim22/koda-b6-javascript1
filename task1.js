// menghitung luas dan keliling lingkaran

let jariLingkaran = 14;

let phi = null;
if (jariLingkaran % 7 == 0){
  phi = 22/7;
} else {
  phi = 3.14;
} 

console.log("phi :", phi);

let luasLingkaran = phi * jariLingkaran * jariLingkaran;

let kelilingLingkaran = 2 * phi * jariLingkaran;

console.log("keliling lingkarang adalah " + kelilingLingkaran);

console.log("luas lingkaran adalah " + luasLingkaran);




