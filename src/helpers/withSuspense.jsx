import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

/**
 * Wraps the React Component with React.Suspense and FallbackComponent while loading.
 * @param {React.Component} WrappedComponent - lazy loading component to wrap.
 * @param {React.Component} FallbackComponent - component to show while the WrappedComponent is loading.
 */
export const withSuspense = (WrappedComponent, FallbackComponent = null) => {
	// eslint-disable-next-line react/display-name
	return class extends React.Component {
		render() {
			if (!FallbackComponent) FallbackComponent = <LinearProgress />; // by default
			return (
				<React.Suspense fallback={FallbackComponent}>
					<WrappedComponent {...this.props} />
				</React.Suspense>
			);
		}
	};
};
