import "./footer.css";

const Footer = () => {
  
	return (
		<div className="footer">
			<div className="footer_nav">
				<a href="/">HOME</a>
				<a href="/privacy">PRIVACY</a>
				<a href="gmail.com">CONTACT</a>
				<a href="/app">SIMPLE PAGE</a>
			</div>

			<div className="made">Made by <span style={{color: 'red'}}>Dinara</span></div>
			<div className="rights">©Pomofocus 2021. All Rights Reserved.</div>
		</div>
	);
};

export default Footer;
