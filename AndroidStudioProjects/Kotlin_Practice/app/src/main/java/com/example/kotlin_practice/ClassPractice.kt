package com.example.kotlin_practice



open class Human (val name:String="annonymous"){

    constructor(name:String,age:Int):this(name){
        println("my name is ${name}, ${age} years old")
    }

    init{ //init이 constructor보다 먼저 생성된다.
        println("New human has been born!")
    }


    fun eatingCake(){
        println("this is so yummmy!")
    }
    open fun singAsong(){
        println("lalala")
    }
}

class Korean:Human(){
    override fun singAsong(){
        super.singAsong()
        println("랄랄라")
        println("my name is : ${name}") //annonymous로 받아온다.
    }
}


fun main(){
    val human=Human("joyce")
    val strange=Human()
    human.eatingCake()
    val someone=Human("kuri",17)
    println("this human's name is ${human.name}")
}