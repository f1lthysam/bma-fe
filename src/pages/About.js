import React from 'react';

const About = () => {
  return (
    <div className="container-fluid py-5" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
      <div className="container">
        {/* Header Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h1 className="display-4 fw-bold text-primary mb-3">About Universal Bookmarks</h1>
            <p className="lead text-muted">
              Revolutionizing the way you save, organize, and access your digital content
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="row mb-5">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Our Mission</h2>
            <p className="text-muted mb-4">
              At Universal Bookmarks, we believe in making digital content management seamless and 
              accessible across all your devices. Our mission is to provide a powerful yet simple 
              platform that helps you organize your online world.
            </p>
            <div className="d-flex gap-3">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle p-3 mb-2" style={{width: '60px', height: '60px'}}>
                  <i className="fas fa-bolt"></i>
                </div>
                <h6 className="fw-bold">Fast</h6>
              </div>
              <div className="text-center">
                <div className="bg-success text-white rounded-circle p-3 mb-2" style={{width: '60px', height: '60px'}}>
                  <i className="fas fa-lock"></i>
                </div>
                <h6 className="fw-bold">Secure</h6>
              </div>
              <div className="text-center">
                <div className="bg-info text-white rounded-circle p-3 mb-2" style={{width: '60px', height: '60px'}}>
                  <i className="fas fa-sync"></i>
                </div>
                <h6 className="fw-bold">Sync</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Team collaboration" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-center fw-bold mb-5">Why Choose Us?</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="bg-light rounded-circle p-3 mb-3 mx-auto" style={{width: '80px', height: '80px'}}>
                      <i className="fas fa-mobile-alt fa-2x text-primary"></i>
                    </div>
                    <h5 className="fw-bold">Cross-Platform</h5>
                    <p className="text-muted">Access your bookmarks from any device, anywhere in the world.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="bg-light rounded-circle p-3 mb-3 mx-auto" style={{width: '80px', height: '80px'}}>
                      <i className="fas fa-search fa-2x text-success"></i>
                    </div>
                    <h5 className="fw-bold">Smart Search</h5>
                    <p className="text-muted">Find what you need instantly with our advanced search technology.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="bg-light rounded-circle p-3 mb-3 mx-auto" style={{width: '80px', height: '80px'}}>
                      <i className="fas fa-shield-alt fa-2x text-danger"></i>
                    </div>
                    <h5 className="fw-bold">Military-Grade Security</h5>
                    <p className="text-muted">Your data is encrypted and protected with the highest security standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="row">
          <div className="col-12">
            <h2 className="text-center fw-bold mb-5">Our Team</h2>
            <div className="row g-4">
              <div className="col-md-3">
                <div className="card text-center border-0 shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Team member" 
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="fw-bold">John Doe</h5>
                    <p className="text-muted">Founder & CEO</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center border-0 shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Team member" 
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="fw-bold">Jane Smith</h5>
                    <p className="text-muted">CTO</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center border-0 shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Team member" 
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="fw-bold">Mike Johnson</h5>
                    <p className="text-muted">Lead Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center border-0 shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Team member" 
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="fw-bold">Sarah Wilson</h5>
                    <p className="text-muted">UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;