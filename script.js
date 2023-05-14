function shuffle(arr) {
    indexes = [];

    while(indexes.length < arr.length) {
        here:{
            let rand = Math.floor(Math.random() * arr.length);
            for (let i = 0; i < indexes.length; i++) {
                if (rand == indexes[i]) break here;
            }
            indexes.unshift(rand);
        }
    }
    
    // modified = [] // return another array
    for (let i = 0; i < arr.length; i++) {
        // modified[indexes[i]] = arr[i]; // return another array
        if(!modified.includes(i) || !modified.includes(indexes[i])) {
            let temp = arr[i];
            arr[i] = arr[indexes[i]];
            arr[indexes[i]] = temp;
        }
    }

    // return modified; // return another array
    return arr;
}

arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < 5; i++) {
    alert(shuffle(arr));
}