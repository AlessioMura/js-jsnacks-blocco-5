const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
const even_nums = nums.filter(even => even % 2 === 0)
console.log(even_nums);

// Risultato: [2, 8, 4, 12]