import React, {useEffect} from 'react';

export function withAnalytics (InnerComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${InnerComponent.name} is visible`);
    }
    render() {
      return (
        <InnerComponent {...this.props} />
      )
    }
  }
}

const withAnalytics2 = (InnerComponent) => (props) => {
  useEffect(() => {
    console.log('Component is visible');
  }, []);
  const loading = false;
  if (loading) {
    return 'Loading'
  }  
  return (
    <InnerComponent {...props}/>
  );
}
