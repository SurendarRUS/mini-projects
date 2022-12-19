const insert = document.querySelector('.container')
window.addEventListener('keydown',(e)=>{
    // console.log(e) 
    insert.innerHTML =
        `<div class="key"> 
        <h3>${e.key === ' '? 'space': e.key}</h3>
        <small>Key</small>
    </div>
    <div class="key">
        <h3>${e.keyCode}</h3>
        <small>Key Code</small>
    </div>
    <div class="key">
        <h3>${e.code}</h3>
        <small>Code</small>
    </div>`
    
})