const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 960) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };
    handleResize(); // set initial state
    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);

// {isMObile ? ("") : ("")}
