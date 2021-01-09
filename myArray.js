/* Создаём прототип для MyArray(тут будет храниться логика) */
function MyArrayProto() {
  /* Уже создан пустой новый объект (this) */
  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      ++this.length;
    }
    return this.length;
  };

  this.pop = function pop() {
    if (this.length <= 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };

  this.forEach = function forEach(cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  };

  this.some = function some(checkFunction) {
    for (let i = 0; i < this.length; i++) {
      if (checkFunction(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };

  this.every = function every(checkFunc) {
    for (let i = 0; i < this.length; i++) {
      if (!checkFunc(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };

  this.filter = function filter(checkFunc) {
    const result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      if (checkFunc(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    
    return result;
  };

  this.unshift = function unshift(arg){
    debugger
    for(let i=this.length-1; i>=0;i--){
      this[i+1]=this[i];
    }
    this[0]=arg;
    return this.length;
  }

  this.shift = function shift(){
    if (this.length <= 0) {
      return;
    }
    const firstItem = this[this[0]]
    delete this[this[0]];
    return firstItem;
  }
  this.concat = function concat (){

    let newArray = [];
    let lastThisArrayElementKey = this.length;

    for (let i = 0; i < this.length; i++) {
      newArray[i] = this[i];
    }

    for (let i = 0; i < arguments[0].length; i++) {  
      newArray[lastThisArrayElementKey++] = arguments[0][i];
    }
    
    return newArray;
  }
  this.reverse = function reverse(){
    const newArray = [];
    for( i=this.length-1; i>=0;i--){
      console.log(i,'i');
      newArray.push(this[i])
    }
    return newArray;
  }

  this.map = function map(func){
    const newArray = [];
   
    for(let i=0; i < this.length; i++){
       newArray[i]= func(this[i]);
    }
    return newArray;
  }
  this.forEach = function forEach (func){
    for(let i=0; i < this.length; i++){
       func(this[i]);
   }
  }

  
  
}

/* Создаем MyArray */
function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

MyArray.prototype = new MyArrayProto(); // создаём связь между объектами(Наследование)

// this - ссылка на объект, который вызывает метод.
const userArray = new MyArray(1,2,3,4,5,6,7);
const test = [10,20,30,40,50];