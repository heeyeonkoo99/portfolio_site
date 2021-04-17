package com.example.kotlin_practice

class Book private constructor(val id:Int,val name:String){
    companion object BookFactory:IdProvider{ //java의 static역할을 한다.
        override fun getId(): Int {
           return 444
        }

        val myBook="new book"
        fun create():Book=Book(getId(), myBook)
    }
}

interface  IdProvider
{
    fun getId():Int
}
fun main(){
    val book=Book.create() //Book.Companion.create()에서 생략된부분
    val bookId=Book.BookFactory.getId()
    println("${book.id} ${book.name}")
}