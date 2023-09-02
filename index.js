for(i=0;i<15;i++){
    let fig = document.createElement('figure')
    fig.className = "vidContainer"
    fig.innerHTML = '       <div src="" alt="" class="vid"></div> <figcaption class="caption"><figure class="profile"><div class="profPic"></div></figure><div class="cont"><h3 class="title"></h3> <p class="desc"></p></div> </figcaption>'
    document.getElementById('wrapper').appendChild(fig)
}