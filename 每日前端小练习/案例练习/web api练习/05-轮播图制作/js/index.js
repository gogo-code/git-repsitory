window.addEventListener("load", function () {
    // 1.获取元素
    let arrow_l = document.querySelector(".arrow-l");
    let arrow_r = document.querySelector(".arrow-r");
    let focus = document.querySelector(".focus");
    let focusWidth = focus.offsetWidth;
    // 2.鼠标经过focus就显示隐藏左右按钮并且开启关闭轮循
    focus.addEventListener("mouseenter", function () {
        arrow_l.style.display = "block";
        arrow_r.style.display = "block";
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener("mouseleave", function () {
        arrow_l.style.display = "none";
        arrow_r.style.display = "none";
        timer = setInterval(function () {
            arrow_r.click();
        }, 2000);
    });
    // 3.动态生成小圆圈，同时设置点击跳转动画事件
    let ul = focus.querySelector("ul");
    let ol = focus.querySelector(".circle");
    for (let i = 0; i < ul.children.length; i++) {
        let li = document.createElement("li");
        li.setAttribute("index", i);
        ol.appendChild(li);
        li.addEventListener("click", function () {
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = "";
            }
            this.className = "current";
            let index = this.getAttribute("index");
            num = index;
            circle = index;
            console.log(focusWidth);
            console.log(index);
            animate(ul, -index * focusWidth);
        });
    }
    // 4.克隆第一张图片完成点击箭头事件
    ol.children[0].className = "current";
    let first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    let num = 0;
    let circle = 0;
    //flag 节流阀
    var flag = true;
    arrow_r.addEventListener("click", function () {
        if (flag) {
            flag = false;
            // 快速调转
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = "";
            }
            ol.children[circle].className = "current";
        }
    });
    arrow_l.addEventListener("click", function () {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focusWidth + "px";
        }
        num--;
        animate(ul, -num * focusWidth);
        circle--;
        // 当出现第一张图片时返回第四张图片
        circle = circle < 0 ? ol.children.length - 1 : circle;
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = "";
        }
        ol.children[circle].className = "current";
    });
    // 5.自动播放轮播图
    let timer = setInterval(function () {
        arrow_r.click();
    }, 2000);
});
