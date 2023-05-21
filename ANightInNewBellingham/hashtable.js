//Method to turn string into int for placement in array
function hashStringToInt(key, tableSize) {
    let hash = 17; // starts at a prime #
    
    for(let i = 0; i < key.length; i++) {
        hash = (13 * hash * key.charCodeAt(i)) % tableSize
    }
    
    return hash;
}

class HashTable {

    table = new Array(101); // creates an array of 101 possible objects
    items = 0;

    //Method to resize the table
    resize = () => {
        const newTable = new Array(this.table.length * 2);
        this.table.forEach(item => {
            if(item) {
                item.forEach(([key, value]) => {
                    const index = hashStringToInt(key, this.newTable.length);
                    if(this.newTable[index]) {
                            this.newTable[index].push([key, value]);   
                    }

                    else {
                        this.newTable[index] = [[key, value]];
                    }
                });
            }
        });
        this.table = newTable;
    }

    //Method to set key/value
    set = (key, value) => { // chaining to avoid collision
        this.items++;
        const loadFactor = this.items / this.table.length;

        if(loadFactor > .8) { // if array is 80% full
            this.resize();
        }

        const index = hashStringToInt(key, this.table.length);
        if(this.table[index]) { // if position taken then add k/v pair to position array
        this.table[index].push([key, value]);   
        }

        else {
        this.table[index] = [[key, value]]; // else add k/v pair
        }
    }
    //Method to return value O(n) worst case =(
    get = (key) => {
        const index = hashStringToInt(key, this.table.length);
        if(!this.table[index]) {
            return null;
        }
        return this.table[index].find(x => x[0] === key)[1]; // returns value of key
    }
}

