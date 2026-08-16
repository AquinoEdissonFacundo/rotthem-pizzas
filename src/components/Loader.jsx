import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const fallback = setTimeout(() => {
      document.body.style.overflow = "";
    }, 2000);

    const onLoad = () => {
      setTimeout(() => {
        setHide(true);
        document.body.style.overflow = "";
      }, 1100);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div id="loader" className={hide ? "hide" : ""}>
      <div className="loader-mark">
        ROTTH<span>E</span>M
      </div>
      <div className="loader-checker checker"></div>
    </div>
  );
}
