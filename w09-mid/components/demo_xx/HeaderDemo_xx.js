import NavigationDemo_xx from '@/components/demo_xx/NavigationDemo_xx';
import Logo_xx from '@/components/Logo_xx';

function HeaderDemo_xx() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo_xx text='demo_xx' />
        <NavigationDemo_xx />
      </div>
    </header>
  );
}

export default HeaderDemo_xx;
