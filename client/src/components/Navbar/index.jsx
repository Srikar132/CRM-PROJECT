import { Button } from "@material-tailwind/react";
import { useStore  } from "../../store";

const Navbar = () => {
  const {setOpenSidenav } = useStore();
  return (
    <>
      <Button className="md:hidden text-black" onClick={() => setOpenSidenav(true)}>
          x
      </Button>
    </>
  )
}


export default Navbar;
