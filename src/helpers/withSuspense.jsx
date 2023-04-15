import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

export const withSuspense = (WrappedComponent, FallbackComponent = null) => {
  return class extends React.Component {
    render() {
      if (!FallbackComponent) {
        FallbackComponent = <LinearProgress />;
      }

      return (
        <React.Suspense fallback={FallbackComponent}>
          <WrappedComponent {...this.props} />
        </React.Suspense>
      );
    }
  };
};
