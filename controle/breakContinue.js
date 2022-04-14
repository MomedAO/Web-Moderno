const notas = [1, 2, 3, 4, 5, 6];

for (let i in notas) {
  if (i == 3) break
  console.log(`${i} = ${notas[i]}`);
}

for (let w in notas) {
  if (w == 3) continue
  console.log(`W${w} = ${notas[w]}`);
}