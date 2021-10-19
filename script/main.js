
onload = () => {
    const canvas = document.getElementById("CANVAS");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    let prevX = null;
    let prevY = null;

    const sq_x = 100;
    const sq_y = 100;

    onmousemove = (data) => {

        ctx.setTransform();
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        const { x, y } = canvas.getBoundingClientRect();

        let curX = data.clientX - x;
        let curY = data.clientY - y;

        if (curX > ctx.canvas.width) curX = ctx.canvas.width;
        else if (curX < 0) curX = 0;
        if (curY > ctx.canvas.height) curY = ctx.canvas.height;
        else if (curY < 0) curY = 0;

        if ((sq_x / 2) < curX && curX < ctx.canvas.width - (sq_x / 2) && (sq_y / 2) < curY && curY < ctx.canvas.height - (sq_y / 2)) {
            ctx.fillStyle = 'black';
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.strokeRect(curX - (sq_x / 2), curY - (sq_y / 2), sq_x, sq_y);
        } else {
            let ch_x = 0;
            let ch_y = 0;
            let c1 = 0;
            let c2 = 0;
            if (curX - (sq_x / 2) <= 0) {
                ch_x = curX;
                if (ch_x < 1) ch_x = 0.5;
                c1 = 1;
            } else if (curX >= ctx.canvas.width - (sq_x / 2)) {
                ch_x = ctx.canvas.width - curX;
                if (ch_x < 0) ch_x = 0.5;
                c1 = 1;
            }

            if (curY - (sq_y / 2) <= 0) {
                ch_y = curY;
                if (ch_y < 1) ch_y = 0.5;
                c2 = 1;
            } else if (curY >= ctx.canvas.height - (sq_y / 2)) {
                ch_y = ctx.canvas.height - curY;
                if (ch_y < 0) ch_y = 0.5;
                c2 = 1;
            }


            if (c1 == 1 && c2 == 0) {
                ch_y1 = sq_y + ((sq_x / 2 - ch_x) * 2);
                ch_x1 = ch_x * 2;
                ctx.fillStyle = 'black';
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.strokeRect(curX - (ch_x1 / 2), curY - (ch_y1 / 2), ch_x1, ch_y1);
                console.log(ch_y1, ch_x1, curX, curY);
            } else if (c1 == 0 && c2 == 1) {
                ch_y2 = ch_y * 2;
                ch_x2 = sq_x + ((sq_y / 2 - ch_y) * 2);
                ctx.fillStyle = 'black';
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.strokeRect(curX - (ch_x2 / 2), curY - (ch_y2 / 2), ch_x2, ch_y2);


            } else if (c1 == 1 && c2 == 1) {
                if (curX <= sq_x && curY <= sq_y) {
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.strokeRect(0, 0, sq_x, sq_y);
                } else if (curX >= ctx.canvas.width - (sq_x / 2) && curY >= ctx.canvas.height - (sq_y / 2)) {
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.strokeRect(ctx.canvas.width - sq_x, ctx.canvas.height - sq_y, sq_x, sq_y);
                } else if (curX <= sq_x && curY >= ctx.canvas.height - (sq_y / 2)) {
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.strokeRect(0, ctx.canvas.height - sq_y, sq_x, sq_y);
                } else if (curX >= ctx.canvas.width - (sq_x / 2) && curY <= sq_y) {
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.strokeRect(ctx.canvas.width - sq_x, 0, sq_x, sq_y);
                }
            }

        }
    };

};

