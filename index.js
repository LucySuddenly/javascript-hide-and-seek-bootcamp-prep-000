function getFirstSelector(selector) {
 return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector(`#nested .target`)
}
function increaseRankBy(n) {
  const rankUp = document
  .querySelectorAll('.ranked-list li')
  for (var i = 0; rankUp.length > i; i++) {
   rankUp[i].innerHTML = (parseInt(rankUp[i].innerHTML) + n).toString()
  }
}
function deepestChild() {
 const element = document
 .getElementById('grand-node')
 const childOfElement = element.children[0]
 while (childOfElement){
   if (querySelector('div') === null) {
     
   }
 }
}