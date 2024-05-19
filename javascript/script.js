window.addEventListener('scroll',function(){
    const header=this.document.querySelector('header')
    header.classList.toggle('reste',this.window.scrollY > 0)
})
let currentURL=window.location.href
console.log(currentURL)