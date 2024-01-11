let stdSet = new Set();

stdSet.add("Mousa");
stdSet.add("Ahmed");
stdSet.add("Samera");
stdSet.add("Noor");
stdSet.add("Mousa");

console.log(...stdSet);

for (const iterator of stdSet) {
    console.log(iterator);
}
