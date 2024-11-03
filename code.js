function quicksort(array) {
    let sortedArr = [];
    var size = array.length;
    while (size != 0) {
        pivot = array[0];
        for (i = array.length-1; i > array.indexOf(pivot); i--) {
            if (array[i] < pivot) {
                [array[array.indexOf(pivot)], array[i]] = [array[i], array[array.indexOf(pivot)]];
            }
        }
        for (i = 0; i < array.indexOf(pivot); i++) {
            if (array[i] > pivot) {
                [array[array.indexOf(pivot)], array[i]] = [array[i], array[array.indexOf(pivot)]];
            }
        }
        
        sortedArr[array.indexOf(pivot)] = pivot;
        size -= 1;
    }

    isSorted = false;
    while (isSorted == false) {
        if (array.length != sortedArr.length) {
            newPivot = array[sortedArr.length];
            for (i = array.length-1; i > array.indexOf(newPivot); i--) {
                if (array[i] < newPivot) {
                    [array[array.indexOf(newPivot)], array[i]] = [array[i], array[array.indexOf(newPivot)]];
                }
            }
            for (i = 0; i < array.indexOf(newPivot); i++) {
                if (array[i] > newPivot) {
                    [array[array.indexOf(newPivot)], array[i]] = [array[i], array[array.indexOf(newPivot)]];
                }
            }
            sortedArr[array.indexOf(newPivot)] = newPivot;
        }
        else {
            isSorted = true;
        }
    }
    return array;
}
