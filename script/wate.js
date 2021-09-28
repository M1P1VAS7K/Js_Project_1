
onload = () => {
    const canvas = document.getElementById("CANVAS");
    /*можно добавить проверку версии браузера и проверку на работу canvas
    https://html5css.ru/tags/ref_eventattributes.php <script src="/Js_project_1/script/main.js"></script>
    */
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = 'red';
    ctx.strokeRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    let buttonPressed = false;
    let prevX = null;
    let prevY = null;

    onmousemove = (data) => {
        const { x, y } = canvas.getBoundingClientRect();

        const curX = data.clientX - x;
        const curY = data.clientY - y;

        ctx.fillStyle = 'black';
        if (prevX === null) {
            ctx.setTransform(1, .2, .8, 1, 0, 0);
            ctx.strokeRect(0, 0, 1, 1);
        } else {
            const dx = curX - prevX;
            const dy = curY - prevY;

            if (dx === 0 && dy === 0) {
                ctx.strokeRect(curX - 5, curY - 5, 11, 11);
                return;
            }

            if (Math.abs(dy) > Math.abs(dx)) {
                for (let i = 0; i <= Math.abs(dy); i++) {
                    const rx = prevX + dx * i / Math.abs(dy);
                    const ry = prevY + dy * i / Math.abs(dy);
                    ctx.strokeRect(rx - 5, ry - 5, 1, 1);
                }
            }
            else if (Math.abs(dx) >= Math.abs(dy)) {
                for (let i = 0; i <= Math.abs(dx); i++) {
                    const rx = prevX + dx * i / Math.abs(dx);
                    const ry = prevY + dy * i / Math.abs(dx);
                    ctx.strokeRect(rx - 5, ry - 5, 1, 1);
                }
            }
        }

        prevX = curX;
        prevY = curY;
        ctx.setTransform()
        ctx.fillStyle = 'white';
        ctx.fillRect(1, 1, ctx.canvas.width-2, ctx.canvas.height-2);
    };

};
