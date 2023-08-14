
function Header({ children, containerStyle, textStyle }) {

    return (
        <>
            <div style={{...containerStyle}}>
                <h1 style={{borderBottom: "1px solid white", color: "white", display: "inline-block",  ...textStyle}}>{children}</h1>
            </div>
        </>
    );

}

export default Header;