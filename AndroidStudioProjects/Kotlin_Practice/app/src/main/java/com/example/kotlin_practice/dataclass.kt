package com.example.kotlin_practice

data class Ticket(val companyName:String,val name:String,var date:String,var seatNumber:Int)
// toString(),hashCode(),equals(),copy()
class TicketNormal(val companyName:String,val name:String,var date:String,var seatNumber:Int)

fun main(){
    val ticketA=Ticket("koreanair","joyceHong","20210417",3)
    val ticketB=TicketNormal("koreanair","joyceHong","20210417",3)
    println(ticketA)
    println(ticketB)
}