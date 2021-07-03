import { useEffect } from "react";

function UsingEventListener() {
  useEffect(() => {
    const onMuew = (e) => {
      console.log(e);
    };
    window.addEventListener("mousemove", onMuew);

    return () => {
      window.removeEventListener("mousemove", onMuew);
    };
    console.log("render");
  });
  return <div> </div>;
}
export default UsingEventListener;
