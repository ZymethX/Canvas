var canvas = document.getElementById("ex3canvas");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            ctx.fillStyle = "rgb(238, 16, 68)";
            ctx.fillRect (10, 10, 65, 50);

            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fillRect (30, 30, 65, 50);
        }