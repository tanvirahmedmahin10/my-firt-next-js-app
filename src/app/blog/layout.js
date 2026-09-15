

const layout = ({children}) => {
    return (
        <div>
            <h2>Fixed portion of blogs layout</h2>
            
            <div>{children}</div>
        </div>
    );
};

export default layout;