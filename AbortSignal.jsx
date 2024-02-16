useEffect(() => {
    const controller = new AbortController();
    // async function fetching() {
    //     try {
    //         setLoading(true);
    //         const res = await fetch(
    //             `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`,
    //             { signal: controller.signal }
    //         );
    //         const data = await res.json();
    //         setMovies(data.Search);
    //         setLoading(false);
    //     } catch (e) {
    //         if (e.name !== "AbortError") {
    //             console.error(e);
    //         }
    //         setLoading(false);
    //     }
    //     if (query < 3) {
    //         setMovies([]);
    //         return;
    //     }
    // }
    // fetching();
    return function () {
        controller.abort();
    };
}, [query]);
