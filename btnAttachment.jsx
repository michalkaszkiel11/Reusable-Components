useEffect(() => {
    function callbck() {
        document.addEventListener("keydown", function (e) {
            if (e.code === "Escape") {
                //something
            }
        });
    }
    return function () {
        document.removeEventListener("keydown", callbck);
    }; // remove event listener when unmounted
}, []);
