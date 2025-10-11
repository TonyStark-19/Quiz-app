// import useEffect and useLocation
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// scroll to top component
export default function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top whenever route changes
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [location.key]); // 👈 use `location.key` instead of `pathname`

    useEffect(() => {
        // Handle browser back/forward navigation explicitly
        const handlePopState = () => {
            window.scrollTo({ top: 0, behavior: "instant" });
        };

        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    return null;
}