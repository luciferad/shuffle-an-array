function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < 5; i++) {
    alert(shuffle(arr));
}