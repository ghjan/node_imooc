//在js中，this对象通常指向当前函数的拥有者，通常这个拥有者称为执行上下文
// this js关键字 代表函数运行时生成的内部对象 只能在函数内部使用
// this真正代表的对象，取决于函数被调用的方式
// 有可能是全局对象
//
// var pet = {
//     words:'...',
//     speak:function(){
//         console.log(this.words)
//         console.log(this==pet)
//     }
// }

// pet.speak()

// function pet(words){
//     this.words = words
//     console.log(this.words)
//     console.log(this==global) 

// }

// pet('...')  //this是global


function Pet(words){
    this.words = words
    this.speak=function(){
        console.log(this.words)
        console.log(this==cat)
    }
}

var cat = new Pet('Miao')
cat.speak()

var dog = new Pet('Wang')
dog.speak()




