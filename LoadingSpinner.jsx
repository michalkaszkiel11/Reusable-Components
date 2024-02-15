const [loading, setLoading] = useState(false);
try {
    setLoading(true);
    //when fetching is completed
    setLoading(false);
} catch (e) {}

{
    loading ? <div className="loading-spinner"></div> : "";
}

//CSS
// .loading-spinner {
//     border: 4px solid rgba(0, 0, 0, 0.1);
//     border-top: 4px solid #3498db;
//     border-radius: 50%;
//     width: 40px;
//     height: 40px;
//     animation: spin 1s linear infinite;
//     margin: 20px auto; /* Adjust the margin based on your layout */
// }
// @keyframes spin {
//     0% {
//         transform: rotate(0deg);
//     }
//     100% {
//         transform: rotate(360deg);
//     }
// }
