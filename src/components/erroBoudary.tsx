import React from "react";

export class ErrorBoundary extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: string) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: any, info: any) {
      // Example "componentStack":
      //   in ComponentThatThrows (created by App)
      //   in ErrorBoundary (created by App)
      //   in div (created by App)
      //   in App
      logErrorToMyService(error, info.componentStack);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return this.props.fallback;
      }
  
      return this.props.children;
    }
  }

function logErrorToMyService(error: any, componentStack: any) {
    throw new Error("Function not implemented.");
}
