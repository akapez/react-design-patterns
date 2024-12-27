

export const partiallyApply = (Component, partialProps) => {
    return (props) => {
        return <Component {...partialProps} {...props} />;
    };
};

export const Button = ({ size, color, text, ...props }) => {
    return (
        <button style={{
            padding: size === 'large' ? '10px 20px' : '5px 10px',
            fontSize: size === 'large' ? '20px' : '14px',
            backgroundColor: color
        }} {...props}>{text}</button>
    );
};

export const DangerButton = partiallyApply(Button, { color: 'red' });
export const SuccessButton = partiallyApply(Button, { color: 'green', size: 'large' });