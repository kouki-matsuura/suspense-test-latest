"use client";

import * as React from "react";
import { SWRConfig } from "swr";

function localStorageProvider() {
  // 初期化時に、 `localStorage` から Map にデータを復元します。
  const map = new Map(JSON.parse(localStorage.getItem("app-cache") || "[]"));

  // アプリが終了する前に、すべてのデータを `localStorage` に保存します。
  window.addEventListener("beforeunload", () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem("app-cache", appCache);
  });

  // パフォーマンスのために、書き込みと読み取りには引き続き Map を使用します。
  return map;
}

export function SWRConfigProvider({ children, ...props }: any) {
  return (
    <SWRConfig
      {...props}
      value={{
        revalidateOnFocus: false,
        provider: localStorageProvider,
      }}
    >
      {children}
    </SWRConfig>
  );
}
