// Minimal JS: add small interaction — highlight skill on click and persist in session storage
(function(){
const skills = document.querySelectorAll('.skills li');
const KEY = 'resume_highlight_skill';
function setHighlight(name){
sessionStorage.setItem(KEY, name);
}
function loadHighlight(){
const stored = sessionStorage.getItem(KEY);
if(!stored) return;
skills.forEach(li => {
if(li.textContent.trim().startsWith(stored)) li.classList.add('highlight');
})
}
skills.forEach(li => {
li.addEventListener('click', () => {
skills.forEach(x=>x.classList.remove('highlight'));
li.classList.add('highlight');
setHighlight(li.textContent.trim().split('\n')[0]);
});
});
loadHighlight();
})();


// Small style addition via JS for the highlight state
const style = document.createElement('style');
style.textContent = `.skills li.highlight{background:linear-gradient(90deg, rgba(51,89,94,0.05), transparent);border-left:4px solid var(--accent);}`;
document.head.appendChild(style);