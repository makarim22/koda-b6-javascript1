// menghitung luas dan keliling lingkaran

let jariLingkaran = 22;

let phi = 0;
if (jariLingkaran % 7 == 0){
  phi = 22/7;
} else {
  phi = 3.14;
} 

console.log("phi :", phi);


let luasLingkaran = phi * jariLingkaran * jariLingkaran;

let kelilingLingkaran = 2 * phi * jariLingkaran;

console.log("keliling lingkaran adalah " + kelilingLingkaran);

console.log("luas lingkaran adalah " + luasLingkaran);




