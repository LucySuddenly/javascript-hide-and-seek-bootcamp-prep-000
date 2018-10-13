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
 const child = document
 .getElementById('grand-node')
 .querySelectorAll('div')
 for (var i = 0; child.length - 1 > i){
   if (querySelector('div') === null) {
     
   }
 }
}