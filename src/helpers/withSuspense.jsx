import React, { Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export const withSuspense = (WrappedComponent, FallbackComponent = null) => {
	return class extends React.Component {
		render() {
			if (!FallbackComponent) FallbackComponent = <LinearProgress />;
<<<<<<< HEAD
=======

>>>>>>> c0e51d0421f5383547e1d23eca3f1da47e462d34
			return (
				<Suspense fallback={FallbackComponent}>
					<WrappedComponent {...this.props} />
				</Suspense>
			);
		}
	};
};
