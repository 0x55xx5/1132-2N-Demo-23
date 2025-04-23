import NavigationMid1_xx from '@/components/mid1_xx/NavigationMid1_xx';
import Logo_xx from '@/components/Logo_xx';

function HeaderMid1_xx() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo_xx text='mid1_xx' />
        <NavigationMid1_xx />
      </div>
    </header>
  );
}

export default HeaderMid1_xx;
