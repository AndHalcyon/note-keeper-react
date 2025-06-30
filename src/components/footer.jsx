var curYear = new Date().getFullYear();

function Footer(){
    return (
        <footer>
            <p>Copyright @ {curYear}</p>
        </footer>
    )
};

export default Footer;