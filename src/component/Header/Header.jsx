function Header() {
  return (
    <div className="bg-dark-semi-color  py-4 px-6 flex flex-row justify-between items-center sticky top-0 z-20">
      <div className="text-white cursor-pointer">
        Lavish Chawda
      </div>
      <div className='text-white cursor-pointer'>
        <ul className="flex gap-3">
          <li className='hover:text-yellow-300'>About</li>
          <li className='hover:text-yellow-300'>Projects</li>
          <li className='hover:text-yellow-300'>Skills</li>
          <li className='hover:text-yellow-300'>Contact Me</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
