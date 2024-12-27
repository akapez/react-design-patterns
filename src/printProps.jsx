// higher order component that prints props to console

export const printProps = (WrappedComponent) => {
    return (props) => {
        console.log(props);
        return <WrappedComponent {...props} />;

    };
};
