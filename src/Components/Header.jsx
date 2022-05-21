import des from '../img/bg-header-desktop.svg'
import mobile from '../img/bg-header-mobile.svg'

const Header = () => {
  return (
    <header>
      <div className="w-full bg-primary-200">
        <img src={des} alt="" className="w-full object-fill hidden sm:block" />
        <img
          src={mobile}
          alt=""
          className="w-full object-fill block sm:hidden"
        />
      </div>
    </header>
  )
}

export default Header
