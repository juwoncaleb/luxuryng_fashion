import React from 'react'

function Header() {
  return (
    <div className='bg-black navbarr'>
 <img
          className="logoImage cursor-pointer	"
          onClick={() => router.push("/")}
          src="/img/logo.png"
        />    </div>
  )
}

export default Header