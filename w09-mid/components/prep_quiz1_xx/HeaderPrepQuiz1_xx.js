import NavigationQuiz1_xx from '@/components/prep_quiz1_xx/NavigationPrepQuiz1_xx';
import Logo_xx from '@/components/Logo_xx';

function HeaderQuiz1_xx() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo_xx text='quiz1_xx' />
        <NavigationQuiz1_xx />
      </div>
    </header>
  );
}

export default HeaderQuiz1_xx;
