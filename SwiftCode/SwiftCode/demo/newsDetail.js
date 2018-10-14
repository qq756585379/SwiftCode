window.onload = function(){
    // 拿到所有的图片
    var allImg = document.getElementsByTagName("img");
    // 遍历
    for(var i=0; i<allImg.length; i++){
       // 取出单个图片对象
        var img = allImg[i];
        img.id = i;
       // 监听点击
        img.onclick = function(){
            alert('点击了第'+this.id+'张');
            // 跳转
            window.location.href = 'xmg:///openCamera'
        }
    }
    
    // 往网页尾部加入一张图片
    var img = document.createElement('img');
    img.src = 'http://www.520it.com/themes/simplebootx/Public/img/logo.png';
    document.body.appendChild(img);
}
