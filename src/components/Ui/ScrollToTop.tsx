import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pushPageView } from "../../utils/analytics";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    pushPageView(pathname);
  }, [pathname]);

  return null;
}
