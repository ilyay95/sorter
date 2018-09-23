class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.compareFunction = (left, right) => left - right;
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index]
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    var array_sort = [];
    indices.forEach(element => {
      array_sort.push(this.array[element]);
    });
    array_sort.sort(this.compareFunction);
    indices.sort((left, right) => left - right)
      .forEach((element, index) => {
        this.array[element] = array_sort[index]
      });
      // your implementation
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
