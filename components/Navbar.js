
const style = {
    wrapper: "h-16 w-full bg-black text-white flex md:justify-around items-center"
}
const Navbar = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.leftmenu}>
            <div className={style.logo}>
                Uber
            </div>
        </div>
    </div>
  )
}

export default Navbar