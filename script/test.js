onload = () => {
    /*можно добавить проверку версии браузера и проверку на работу canvas
    https://html5css.ru/tags/ref_eventattributes.php <script src="/Js_project_1/script/main.js"></script>
    */
    var c=document.getElementById("CANVAS");
    var ctx=c.getContext("2d");

    ctx.fillStyle="yellow";
    ctx.fillRect(0,0,250,100)

    ctx.setTransform(1,0.5,-0.5,1,30,10);
    ctx.fillStyle="blue";
    ctx.fillRect(0,0,250,100);

    ctx.setTransform(3,0.5,-0.5,0.5,30,10);
    ctx.fillStyle="red";
    ctx.fillRect(0,0,250,100);

};
