package com.example.kotlin_practice

fun main(){
    /*helloWorld()
    println(add(3,5))*/
    //3. String Template
//    val name="Joyce"
//    val lastName="Hong"
//    println("my name is ${name+lastName} I'm 23")
//    println("Is this true? ${1==0}")
//    println("this is 2\$a")
//    checkNum(1)

    forAndWhile()
}


//1.함수
fun helloWorld():Unit{
    println("Hello World!")
}

fun add(a:Int, b:Int):Int{
    return a+b
}
//2. val vs var
//val=value(재정의 될수 없다.)
fun hi(){
    val a:Int=10
    var b:Int=9
    var e:String
    b=100
    val c=100 //int를 안써도 상관없지만 val인지 var인지 써줘야한다.
    var d=100
    var name="heeyeon"
}
//4.조건식
fun maxBy(a:Int,b:Int):Int{
    if(a>b){
        return a
    }else{
        return b
    }
}
fun maxBy2(a:Int,b: Int):Int=if(a>b)a else b

fun checkNum(score:Int){
    when(score){ //when은 switch역할읋한다.
        0->println("this is 0")
        1->println("this is 1")
        2,3->println("this is 2 or 3")
    }
    var b=when(score){
        1->1
        2->2
        else-> 3
    }
    println("b:${b}")
    when(score){
        in 90..100->println("you are genius")
        in 10..80->println("not bad")
        else->println("okay")
    }
}

//Expression vs Statement (뭔가 값을 만들어내면 전자인데, kotlin은 어차피 Unit을 통해서든 값읇 반환하기에 expression의 집합이다.)

//5. Array and List
//List 1.List 2. MutableList
fun array(){
    val array=arrayOf(1,2,3)
    val list= listOf(1,2,3)

    val array2=arrayOf(1,"d",3.4f)
    val list2= listOf(1,"d",11L)

    array[0]=3
    var result=list.get(0)
    val arrayList= arrayListOf<Int>()
    arrayList.add(10)
    arrayList.add(20)
}

//6. For/While
fun forAndWhile(){
    val students:ArrayList<String> = arrayListOf("joyce","james","jenny","jennifer")
    for(name in students){
        println("${name}")
    }
    for((index,name)in students.withIndex()){
        println("${index+1}번째 학셍: ${name}")
    }

    var sum=0
    for(i in 1..10){
        sum+=i
    }
    println(sum)
    var index=0
    while(index<10){
        println("current index: ${index}")
        index++
    }
}

// 7. Nullable/NonNull
fun nullcheck(){
    //NPE: Null pointer Exception
    var name:String="Joyce"
    var nullName:String?=null //물음표의 유무에 따라 null이 될수 있다.

    var nameInUpperCase=name.toUpperCase()
    var nullNameInUpperCase=nullName?.toUpperCase()

    // ?:
    val lastName:String?=null
    val fullName=name+" "+(lastName?:"No lastName") //default값을 주기위해
    println(fullName)

    //!!
}

fun ignoreNulls(str:String?){
    val mNotNull:String=str!! //null이 아님을 확신시켜줌
    val upper:String=mNotNull.toUpperCase()

    val email:String?="joycehongxxx@naver.com"
    email?.let{
        println("my email is ${email}")
    }
}
