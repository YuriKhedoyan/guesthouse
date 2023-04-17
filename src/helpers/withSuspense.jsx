import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

export const withSuspense = (
  WrappedComponent,
  FallbackComponent = <LinearProgress />
) => {
  return (props) => (
    <React.Suspense fallback={FallbackComponent}>
      <WrappedComponent {...props} />
    </React.Suspense>
  );
};
