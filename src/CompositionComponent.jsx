
export const Button = ({ size, color, text, ...props }) => {
    return (
        <button style={{
            padding: size === 'large' ? '10px 20px' : '5px 10px',
            fontSize: size === 'large' ? '20px' : '14px',
            backgroundColor: color
        }} {...props}>{text}</button>
    );
};

export const DangerButton = (props) => {
    return <Button color='red' {...props} />;
};

export const SuccessButton = (props) => {
    return <Button color='green' size="large" {...props} />;
};