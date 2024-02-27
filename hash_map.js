class HashMap {
   constructor(){
    this.buckets = new Array(100);
   }
  _hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.buckets.length;
  }
  set(key, value) {
    const index = this._hash(key);
    this.buckets[index] = ({key,value})
  }
}

module.exports = HashMap;