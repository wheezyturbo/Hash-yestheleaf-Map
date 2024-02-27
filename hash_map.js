const Node = require('./node');

class HashMap {
  constructor() {
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
    this.buckets[index] = { key, value };
  }
  get(key) {
    return this.buckets[this._hash(key)]
      ? this.buckets[this._hash(key)].value
      : null;
  }
  has(key) {
    return this.buckets[this._hash(key)] ? true : false;
  }
  remove(key) {
    if (this.has(key)) {
      this.buckets.splice(this._hash(key), 1);
      return true;
    }
    return false;
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
