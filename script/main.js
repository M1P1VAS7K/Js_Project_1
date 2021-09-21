
onload = () => {
    const canvas = document.getElementById("CANVAS");
    /*можно добавить проверку версии браузера и проверку на работу canvas
    https://html5css.ru/tags/ref_eventattributes.php <script src="/Js_project_1/script/main.js"></script>
    */
    const ctx = canvas.getContext("2d"); 

    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    let buttonPressed = false;
    let prevX = null;
    let prevY = null;

    onmousemove = (data) => {
        if (!buttonPressed) { return; }

        const { x, y } = canvas.getBoundingClientRect();

        const curX = data.clientX - x;
        const curY = data.clientY - y;

        ctx.fillStyle = 'white';
        if (prevX === null) {
            ctx.fillRect(curX - 5, curY - 5, 11, 11); 
        } else {
            const dx = curX - prevX;
            const dy = curY - prevY;

            if (dx === 0 && dy === 0) { 
                ctx.fillRect(curX - 5, curY - 5, 11, 11); 
                return; 
            }

            if (Math.abs(dy) > Math.abs(dx)) {
                for (let i = 0; i <= Math.abs(dy); i++) {
                    const rx = prevX + dx * i / Math.abs(dy); 
                    const ry = prevY + dy * i / Math.abs(dy); 
                    ctx.fillRect(rx - 5, ry - 5, 11, 11); 
                }
            }
            else if (Math.abs(dx) >= Math.abs(dy)) {
                for (let i = 0; i <= Math.abs(dx); i++) {
                    const rx = prevX + dx * i / Math.abs(dx); 
                    const ry = prevY + dy * i / Math.abs(dx); 
                    ctx.fillRect(rx - 5, ry - 5, 11, 11); 
                }
            }
        }

        prevX = curX;
        prevY = curY;
    };

    canvas.onmousedown = (data) => {
        if (data.button != 0) { return; }
        buttonPressed = true;
    };

    onmouseup = (data) => {
        if (data.button != 0) { return; }
        buttonPressed = false;
        prevX = null;
        prevY = null;
    };
};


