import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to website</h1>
      {/* Use the Link component to navigate to another page */}
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  );
};

export default HomePage;
