const exppress = require("express");

const server = exppress();
const port = process.env.PORT || 3000
const theAnswer="adla1"

server.get("/guess/:word", (request, response) => {
  const userWord =request.params.word
let answer =[];
for (let i=0; i< userWord.length;i++){

const ch=userWord[i];
if(ch==theAnswer[i]){

answer.push(1);

}else if (theAnswer.includes(ch)){

answer.push(0);

}else{

    answer.push(-1);
}


    console.log(userWord[i]);
}
response.json(answer);

});


server.use(exppress.static("public"));


server.listen(port, () => {
  console.log("server is running on port 3000");
});
