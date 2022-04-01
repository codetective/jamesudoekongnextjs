import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useCtx } from "../context/AppContext";

export default function AuthRoute({ children }) {
  const { isAuth } = useCtx();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (isAuth !== undefined && isAuth) {
      setLoading(false);
    } else {
      Router.push("/admin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!loading && isAuth && children}
      {loading && <div />}
    </>
  );
}
