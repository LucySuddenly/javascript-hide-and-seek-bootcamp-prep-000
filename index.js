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
 const parent = document
 .getElementById('grand-node')
 .querySelectorAll('div')
 const child
 for (var i = 0; child.length - 1 > i){
   if (querySelector('div') === null) {
     child = parent[i].querySelector('div')
   }
 }
}