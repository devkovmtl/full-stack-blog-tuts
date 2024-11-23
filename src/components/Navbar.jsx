import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      {/* MOBILE MENU */}
      <div className="md:hidden"></div>
    </div>
  );
};

export default Navbar;
