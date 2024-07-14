import Image from 'next/image';

const Navbar = () => {
    return (
        <div>
            <Image src="/logo.svg" alt="Logo" width={90} height={32} />
        </div>
    );
};

export default Navbar;
