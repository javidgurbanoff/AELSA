import React from "react";

export function Alert({ children }: { children: React.ReactNode }) {
  return (
    <div className="border rounded-md p-4 bg-yellow-100 dark:bg-yellow-900">
      {children}
    </div>
  );
}

export function AlertTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-lg font-medium mb-1 text-yellow-800 dark:text-yellow-200">
      {children}
    </h4>
  );
}

export function AlertDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-yellow-700 dark:text-yellow-300">{children}</p>
  );
}
