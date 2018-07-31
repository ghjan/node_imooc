function Pet(words){
    this.words=words
    this.speak=function(){
        console.log(this.words)
    }
}

function Dog(words){
    //实现了继承
    Pet.call(this, words) 
    // Pet.apply(this, arguments)
}

var dog = new Dog("Wang")
dog.speak()


