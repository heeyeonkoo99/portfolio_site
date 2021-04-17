package com.example.kotlin_practice

//Singleton Pattern(생성되는 객체는 딱 하나뿐)
object CarFactory{
    val cars= mutableListOf<Car>() //리스트 만들기
    fun makeCar(housePower:Int):Car{
        val car=Car(housePower)
        cars.add(car)
        return car
    }
}

data class Car(val horsePower:Int)

fun main(){
    val car:Car=CarFactory.makeCar(10)
    val car2:Car=CarFactory.makeCar(200)

    println(car)
    println(car2)
    println(CarFactory.cars.size.toString())
}