import { Component, ReactNode, ErrorInfo } from "react";
import { ErrorPage } from "pages/error";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorInfo?: ErrorInfo;
  errorMessage?: string;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo, errorMessage: error.message });
  }

  public render() {
    const { hasError, errorInfo, errorMessage } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorPage errorInfo={errorInfo} errorMessage={errorMessage} />;
    }

    return children;
  }
}
