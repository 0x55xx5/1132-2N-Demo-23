import Navigation_23 from '@/components/Navigation_23';
import Logo_23 from '@/components/Logo_23';

function Header_23() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo_23 />
        <Navigation_23 />
      </div>
    </header>
  );
}

export default Header_23;
