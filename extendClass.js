const many = require('extends-classes');
class A{
    async checkA(){
        console.log("Class A")
    }
   
}

class B{
    async checkB(){
        console.log("Class B")
    }
}

class C extends many(A,B){
    constructor(){
        this.checkA()
    }
    __call(method, args) {
        console.log(`'${method}()' is missing!`);
      }
   
}

module.exports = new C()