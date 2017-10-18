import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';

class Home extends React.Component {
	render() {
		return (
			<div className="home-wrapper">
				<div className="section">
					<div className="container">
						<div className="row">
							<div className="col-md-8">
								<img src={process.env.PUBLIC_URL + '/assets/img/landing1.png'} alt="landing1" />
							</div>
							<div className="col">
								<div className="section-title">CEZAN</div>
								<div className="section-description">Reinventing your Resume.</div>
								<div className="section-description">
									<Link to="/signup" className="btn btn-dark-grey-blue">Lets get you an interview!</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section" style={{marginTop: '-200px'}} id="features">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-md-4">
								<div className="section-sub-title">Highlight and record</div>
								<div className="section-sub-description">Drag and drop your resume and begin to highlight key areas on your resume where you will be able to provide up to 1 minute of audio recording where you can summarize achievements, work experience, tools used, gaps and much more!</div>
							</div>
							<div className="col">
								<div className="icon-sets">
									<i className="fa fa-trash-o" style={{backgroundColor: '#f54056' }}></i>
									<i className="fa fa-eye" style={{backgroundColor: '#0097ff' }}></i>
									<i className="fa fa-upload" style={{backgroundColor: '#9b9b9b' }}></i>
									<i className="fa fa-rocket" style={{backgroundColor: '#00c695' }}></i>
								</div>
							</div>
							<div className="col-md-5">
								<img src={process.env.PUBLIC_URL + '/assets/img/landing2.png'} alt="landing2" />
							</div>
						</div>
					</div>
				</div>
				<div className="section angled-edge bg-dark-grey-blue">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-md-5">
								<div className="notification-list">
									<div className="notification" style={{marginLeft: '2rem'}}>
										<div className="profile">
											<div className="profile-img" style={{backgroundColor: '#b89cff'}}>🦁</div>
										</div>
										<div className="description">
											<div className="description-content">Anonymus Lion viewed your Saleforce Resume from San Jose, CA</div>
											<div className="description-time">2m</div>
										</div>
										<div className="action">
											<i className="fa fa-eye"></i>
										</div>
									</div>
									<div className="notification" style={{marginLeft: '8rem'}}>
										<div className="profile">
											<div className="profile-img" style={{backgroundColor: '#fa8492'}}>🦉</div>
										</div>
										<div className="description">
											<div className="description-content">Anonymus Owl viewed your Facebook Resume from San Jose, CA</div>
											<div className="description-time">Just Now</div>
										</div>
										<div className="action">
											<i className="fa fa-eye"></i>
										</div>
									</div>
									<div className="notification">
										<div className="profile">
											<div className="profile-img" style={{backgroundColor: '#6dbaa9'}}>🦊</div>
										</div>
										<div className="description">
											<div className="description-content">Anonymus Fox downloaded your Facebook Resume from San Jose, CA</div>
											<div className="description-time">45m</div>
										</div>
										<div className="action">
											<i className="fa fa-download"></i>
										</div>
									</div>
								</div>
							</div>
							<div className="col"></div>
							<div className="col-md-5 text-right">
								<div className="section-sub-title white-text">Much needed notifications</div>
								<div className="section-sub-description white-text">Get notified when employers view and download your resume! You can also see from where they viewed and downloaded it from. </div>
							</div>
						</div>
					</div>
				</div>
				<div className="section">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<div className="section-sub-title">Share your own custom link</div>
								<div className="section-sub-description">With every resume you create, along comes a custom link where you are able to title and share with your potential employers when applying!</div>
							</div>
							<div className="col"></div>
							<div className="col-md-7">
								<img src={process.env.PUBLIC_URL + '/assets/img/landing3.png'} alt="landing3" />
							</div>
						</div>
					</div>
				</div>
				<div className="section" id="pricing">
					<div className="container">
						<div className="row">
							<div className="col text-center">
								<div className="section-sub-title" style={{marginBottom: '1rem'}}>Pricing</div>
								<div className="section-sub-description">pay-as-you-go / no subscription BS</div>
								<div className="plan-wrapper">
									<div className="plan-box">
										<div className="price-label">$3 per resume</div>
										<div className="price-control">
											<span className="fa fa-chevron-down control-down"></span>
											<span className="quantity">1</span>
											<span className="fa fa-chevron-up control-up"></span>
										</div>
										<div className="plan-services">
											<div className="plan-service">Audio recording</div>
											<div className="plan-service">Custom Links</div>
											<div className="plan-service">Analytics</div>
											<div className="plan-service">Online Support</div>
										</div>
									</div>
									<Link to="/signup" className="get-started">Get started for $3</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section bg-duck-egg-blue">
					<div className="container">
						<div className="row">
							<div className="col text-center">
								<div className="section-sub-title pt-5">A $3 dollar investment can take you far!</div>
								<Link to="/signup" className="btn btn-dark-grey-blue btn-signup mt-5">Sign Up</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="section footer-section">
					<div className="container pt-2 pb-2">
						<div className="row">
							<div className="col d-flex align-items-center">
								<div className="footer-brand"><Link to="/">C</Link></div>
								<div className="made-in">made in the Bay Area, CA</div>
							</div>
							<div className="col d-flex align-items-center justify-content-center">
								<Link to="/terms">Terms</Link>
								<Link to="/privacy-policy">Privacy Policy</Link>
							</div>
							<div className="col d-flex align-items-center justify-content-end">
								<i className="fa fa-twitter"></i>
								<i className="fa fa-envelope-o"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default connect()(Home);
