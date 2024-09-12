import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Assuming you already have the AuthContext

// Define the type for the HOC that takes in a component
const withPrivateRoute = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  // The HOC returns a new component
  const ComponentWithPrivateRoute = (props: P) => {
    const { auth } = useAuth();

    // If not authenticated, redirect to login
    if (!auth) {
      return <Navigate to='/login' />;
    }

    // If authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  };

  return ComponentWithPrivateRoute;
};

export default withPrivateRoute;
