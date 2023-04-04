import React, { Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export const withSuspense = (WrappedComponent, FallbackComponent = null) => {
	if (!FallbackComponent) FallbackComponent = <LinearProgress />;

	return (
		<Suspense fallback={FallbackComponent}>
			<WrappedComponent {...this.props} />
		</Suspense>
	);
};
