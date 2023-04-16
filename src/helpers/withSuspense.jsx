import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export const withSuspense = (WrappedComponent, FallbackComponent = null) => {
	return props => {
		if (!FallbackComponent) {
			FallbackComponent = <LinearProgress />;
		}

		return (
			<React.Suspense fallback={FallbackComponent}>
				<WrappedComponent {...props} />
			</React.Suspense>
		);
	};
};
