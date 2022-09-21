import { Image } from '../../Atom/Image';
import { Button } from '../../Atom/Button';
const Logo = ({ className, url, logoLight = false }) => {
  return (
    <Button link={url} customClassName={' '}>
      <Image src={'/images/web3.png'} alt="logo" className={className} />
    </Button>
  );
};

export default Logo;
