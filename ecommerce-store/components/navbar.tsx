import Link from "next/link";
import { useEffect, useState } from "react"; // Import useState for managing component state

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = () => {
  const [categories, setCategories] = useState([]); // Use useState to manage categories state

  useEffect(() => {
    // Fetch categories when the component mounts
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/">
            {/* Wrap the link around the text for better accessibility */}
            <a className="ml-4 flex lg:ml-0 gap-x-2">
              <p className="font-bold text-xl">StreamPay™ Store</p>
            </a>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
