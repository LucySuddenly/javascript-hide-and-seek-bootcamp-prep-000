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
 let parent = document
 .getElementById('grand-node')
 .querySelectorAll('div')
 let child = 0
 for (var i = 0; parent.length - 1 > i; i++){
     child = parent[i].querySelector('div')
 }
}