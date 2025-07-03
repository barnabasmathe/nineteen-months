$(document).ready(function () {
        let vid = document.getElementById("video");
        let mus = document.getElementById("music");
        let play_btn = $("#play-btn");
        let download_btn = $("#download-btn");
        $(".bg").hide();
        $("#ics").hide();

        var started = false;

        play_btn.click(btn_press);
        function btn_press() {
                if (!started) {
                        $(".bg").fadeIn(2000);
                        started = true;
                        setTimeout(async () => {
                                $(".bg").fadeOut(3000);
                                await new Promise(resolve => setTimeout(resolve, 3000));
                                $("#ics").fadeIn(2000);
                        }, 9000);
                }
                play_btn.toggleClass("paused");
                if (mus.paused && vid.paused) {
                        mus.play()
                        vid.play();
                } else {
                        mus.pause()
                        vid.pause();
                }

        }

        download_btn.click(async () => {
                await new Promise(resolve => setTimeout(resolve, 1000));
                $("#ics").fadeOut(3000);
                $(".bg").fadeIn(4000);
        });

        $(document).keydown(function (event) {
                if (event.keyCode === 32) btn_press();
        });
});