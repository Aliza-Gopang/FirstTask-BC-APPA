"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // @ts-ignore: No type definitions for bootstrap.bundle.min.js
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}
