function numbersThenCharacters(arr) {
    var numbers = [];
    var characters = [];
    for (let item of arr) {
        for (let key of item) {
            if (typeof (key) === 'number') {
                numbers.push(key);
            }
            else {
                characters.push(key);
            }
        }
    }

    characters.sort();
    numbers.sort((a, b) => a - b);
    numbers = numbers.concat(characters);
    var k=0;


    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++){

            arr[i][j]= numbers[k] ;
            k = k+1;
        }
        
    }
    console.log(arr);

}

arr = [
    [11, 12, 24, 23, "a", "b"],
    [56, "c", 45], [67, "d"],
    ["f", "e", 78]
    ];
numbersThenCharacters(arr);