const LinkedList = require('./list');

class HashMap {
  constructor(initialCapacity = 100, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.size = 0;
    this.loadFactor = loadFactor;
    this.threshold = Math.floor(initialCapacity * loadFactor);
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
    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
      this.buckets[index].append(key, value);
    } else {
      const existingNode = this.buckets[index].find(key);
      if (existingNode) {
        existingNode.value = value;
      } else {
        this.buckets[index].append(key, value);
      }
    }
    this.size++;
    if (this.size >= this.threshold) {
      this._resize();
    }
  }
  get(key) {
    const index = this._hash(key);
    if (!this.buckets[index]) {
      return null;
    }
    const node = this.buckets[index].find(key);
    return node ? node.value : null;
  }
  has(key) {
    const index = this._hash(key);
    return this.buckets[index] ? this.buckets[index].find(key) !== null : false;
  }
  remove(key) {
    const index = this._hash(key);
    if (!this.buckets[index]) {
      return false;
    }
    this.buckets[index].delete(key);
    this.size--;
    return true;
  }
  length() {
    return this.buckets.filter((a) => a != undefined).length;
  }
  clear() {
    for (let i = 0; i < this.buckets.length; i++) {
      delete this.buckets[i];
    }
  }
  keys(){
    return this.buckets.filter(e=>e!=undefined).map(e=>e.key);
    // return this.buckets.reduce((tmpArr,e)=>{
    //   if(e!=undefined){
    //     tmpArr.push(e.key);
    //   }
    //   return tmpArr;
    // },[])
  }
  values(){
    return this.buckets.filter(e=>e!=undefined).map(e=>e.value);
  }
  entries(){
    return this.buckets.reduce((tmpArr,e)=>{
      if(e!=undefined){
        tmpArr.push([e.key,e.value]);
      }
      return tmpArr;
    },[])
  }
}

module.exports = HashMap;
