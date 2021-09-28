
onload = () => {
    const canvas = document.getElementById("CANVAS");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    let prevX = null;
    let prevY = null;

    const sq_x = 50;
    const sq_y = 50;

    onmousemove = (data) => {

        ctx.setTransform();
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        const { x, y } = canvas.getBoundingClientRect();

        const curX = data.clientX - x;
        const curY = data.clientY - y;
        if ((sq_x / 2) < curX && curX < ctx.canvas.width - (sq_x / 2) && (sq_y / 2) < curY && curY < ctx.canvas.height - (sq_y / 2)) {
            ctx.fillStyle = 'black';
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.strokeRect(curX - (sq_x / 2), curY - (sq_y / 2), sq_x, sq_y);
        } else {
            let ch_x = 0;
            let ch_y = 0;
            if (curX - (sq_x / 2) < 0) {
                ch_x = (sq_x / 2) - curX;
            } else if (curX > ctx.canvas.width - (sq_x / 2)) {
                ch_x = curX - ctx.canvas.width - (sq_x / 2);
                if (ch_x > sq_x - 30000) {
                    ch_x = 300
                }
            }
            if (curY - (sq_y / 2) < 0) {
                ch_y = (sq_y / 2) - curY;
            } else if (curY > ctx.canvas.height - (sq_y / 2)) {
                ch_y = curY - ctx.canvas.height - (sq_y / 2);
                if (ch_y > sq_y - 1) {
                    ch_y = 1
                }
            }
            ctx.fillStyle = 'black';
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.strokeRect(curX - (sq_x / 2), curY - (sq_y / 2), sq_x, sq_y);
        }
    };

};

