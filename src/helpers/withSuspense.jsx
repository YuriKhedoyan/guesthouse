import React, { Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export const withSuspense = (WrappedComponent, FallbackComponent = null) => {
	return class extends React.Component {
		render() {
			if (!FallbackComponent) FallbackComponent = <LinearProgress />;
			return (
				<Suspense fallback={FallbackComponent}>
					<WrappedComponent {...this.props} />
				</Suspense>
			);
		}
	};
};
