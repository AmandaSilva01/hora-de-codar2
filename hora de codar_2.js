/* atividade 1
var  number = parseInt (prompt(" insira um valor"))
var number2 = parseInt (prompt("insira um segundo valor"))

if ( number > number2 ) {
    document.write (number)
}
else if ( number2 > number){
    document.write (number2)
}
*/
/* atividade 2
var valor = parseInt(prompt("insira um valor"))
if ( valor > 0){
    document.write ("positivo")
}
else if (valor < 0){
    document.write("negativo")
}
else {
    document.write("igual a zero")
}
*/

/* atividade 3
var  number = parseInt (prompt(" insira um valor"))
var number2 = parseInt (prompt("insira um segundo valor"))
var number3 = parseInt (prompt("insira um terceiro valor"))

if ( number > number2 && number > number3) {
    document.write (number)
}
else if ( number2 > number3 && number2 > number){
    document.write(number2)
}
else if ( number3 > number2 && number3 > number){
    document.write (number3)
}
*/
/* atividade 4
var  number = parseInt (prompt(" insira um valor"))
var number2 = parseInt (prompt("insira um segundo valor"))
var number3 = parseInt (prompt("insira um terceiro valor"))

if ( number > number3 && number2 > number3) {
    document.write (number + number2)
}
else if ( number3 > number2 && number > number2){
    document.write(number3 + number)
}
else if ( number2> number && number3 > number){
    document.write (number2 + number3)
}
*/
/* atividade 5
var number1 = parseInt (prompt("insira um valor"))
var number2 = parseInt (prompt("insira um segundo valor"))
var number3 = parseInt (prompt("insira um terceiro valor"))
var number4 = parseInt (prompt("insira um quarto valor"))
var number5 = parseInt (prompt("insira um quinto valor"))
var number6 = parseInt (prompt("insira um sexto valor"))
var valores = (number1 + number2 + number3 + number4 + number5 + number6)/6
alert ("os valores digítados foram: " + number1 +", "+ number2 + ", " + number3 +", " + number4 +", " + number5+ ", "+ number6 +". "
+ "o resultado final é: " + valores)
*/
/* atividade 6 
var number1 = parseInt (prompt("insira um valor"))
var number2 = parseInt (prompt("insira um segundo valor"))
var number3 = parseInt (prompt("insira um terceiro valor"))
var number4 = parseInt (prompt("insira um quarto valor"))

if ( number1 > number2 && number1 > number3 && number1 > number4){
    alert (" O maior valor é: " + number1 + ", " + number1 + " foi o primeiro valor inserido, " + number4 + " foi o último valor inserido.")
}
else if ( number2 > number3 && number2 > number1 && number2 > number4){
    alert (" O maior valor é: " + number2 + ", " + number1 + " foi o primeiro valor inserido, " + number4 + " foi o último valor inserido.")
}
else if ( number3 > number2 && number3 > number1 && number3 > number4){
    alert (" O maior valor é: " + number3 + ", " + number1 + " foi o primeiro valor inserido, " + number4 + " foi o último valor inserido.")
}
else if ( number4> number2 && number4 > number3 && number4 > number1){
    alert (" O maior valor é: " + number4 + ", " + number1 + " foi o primeiro valor inserido, " + number4 + " foi o último valor inserido.")
}
*/
/* atividade 7
var number1 = parseInt (prompt("insira um valor"))
var number2 = parseInt (prompt("insira um segundo valor"))
var number3 = parseInt (prompt("insira um terceiro valor"))
var number4 = parseInt (prompt("insira um quarto valor"))
var number5 = parseInt (prompt("insira um  quinto valor"))
var number6 = parseInt (prompt("insira um sexto valor"))
var n = 0
if ( number1<72){
    n += number1
}
if ( number2<72){
    n += number2
}
if ( number3<72){
    n += number3
}
if ( number4<72){
    n += number4
}
if ( number5<72){
    n += number5
}
if ( number6<72){
    n += number6
}
alert ("os valores digítados foram: " + number1 +", "+ number2 + ", " + number3 +", " + number4 +", " + number5+ ", "+ number6 +". "
+ "o resultado final é: " + n )
*/
/* atividade 8
var number1 = parseInt (prompt("insira um valor"))
var number2 = parseInt (prompt("insira um segundo valor"))
var number3 = parseInt (prompt("insira um terceiro valor"))
var number4 = parseInt (prompt("insira um quarto valor"))
var n = 0
if ( number1> 0 && number1 < 10){
    n += number1
}
if ( number2> 0 && number2 < 10){
    n += number2
}
if ( number3> 0 && number3 < 10){
    n += number3
}
if ( number4> 0 && number4 < 10){
    n += number4 
}
var media = n / 4
if ( media > 5){
    alert ("você passou no teste!")
}
else {
    alert ("tente novamente.")
}
*/
/* atividade 9
var  number = parseInt (prompt(" insira seu ano de nascimento : "))

if ( number <= 2006 ) {
    document.write ("Você poderá votar este ano! ")
}
else {
    document.write ("poxa, não será este ano. ")
}
*/
/* atividade 10
var  generoF = parseInt (prompt("1-Feminino 2-masculino "))
var  alturaF = parseFloat (prompt(" insira sua altura "))
var gF = 1
var gM = 2
var fh = (62.1 * alturaF)-44.7
var mh = (72.7 * alturaF)-58
if( generoF == gF){
    alert(" seu peso ideal é : " + fh) 
}
if ( generoF == gM) {
    alert ( " seu peso ideal é : " + mh)
}
*/
var conta = parseInt (prompt("1 adição, 2 divisão, 3 subtração, 4 mutiplicação " ))
var valores = parseFloat (prompt("insira o primeiro valor"))
var valores2 = parseFloat (prompt("insira o segundo valor"))
var adição = valores + valores2
var divisão = valores / valores2
var subtração = valores - valores2
var  mutiplicação = valores * valores2
if (conta == 1 ){
    alert (adição)
}
if (conta == 2 ){
    alert (divisão)
}
if (conta == 3 ){
    alert (subtração)
}
if (conta == 4 ){
    alert (mutiplicação)
}