import Link from 'next/link';
import Logo from '../../Molecules/Logo';

const Footer = () => {
  const menus = ['About', 'Privacy Policy', ' Licensing', 'Contact'];
  return (
    <footer className="px-4 bg-white md:py-4">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" target="_blank" className="flex items-center mb-4 sm:mb-0">
          <Logo url="/" className={'h-10 mx-3'} />
          <span className="self-center ml-2 text-xl font-semibold">Web3</span>
        </a>
        <ul className="flex justify-center flex-wrap items-center mb-6 sm:mb-0">
          {menus.map((name, index) => (
            <li key={index}>
              <Link href="#">
                <a className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 ">
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-4" />
      <span className="block text-sm text-gray-500 text-center ">
        © 2022
        <Link
          href="https://hodl.com"
          target="_blank"
          className="hover:underline"
        >
          Web3™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
