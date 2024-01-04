import React, { useEffect } from 'react'
import './Navbar.scss'

function Navbar() {
  const [showMenue, setShowMenue] = React.useState(true)

  const isshowMenue = () => {
    window.scrollY > 0 ? setShowMenue(true) : setShowMenue(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isshowMenue);
    return () => {
      window.removeEventListener("scroll", isshowMenue);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };


  return (
    <div className={showMenue ? 'navbar showMenue' : 'navbar'}>
      <div className="container">
        <div className="logo">
            <span className="text">fiverr</span>
            <span className="dot">.</span>
        </div>
        <div className="links">
            <span>Fiverr Pro</span>
            <span>Explore</span>
            <span>English</span>
            {!currentUser.isSeller && <span>Become a Seller</span>}
            {!currentUser && <span>Sign in</span>}
            {!currentUser && <button>Join</button>}
            {
              currentUser && (
                <div className="user">
                  <img src="https://picsum.photos/200/300" alt="user" />
                  <div className="options">
                    {
                      !currentUser.isSeller && (
                        <div className="option">
                          <span>Become a Seller</span>
                          <span>Learn more</span>
                        </div>
                      )
                    }
                  </div>
                </div>
              )
            }
        </div>
      </div>
      {showMenue && (
        <div className="menueContainer">
          <div className="menue">
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Sitemap</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
