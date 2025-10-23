import { cn } from '@/lib/utils';

import './style.css';

interface AnimatedMenuButtonProps extends React.ComponentProps<'button'> {
  active?: boolean;
}

const AnimatedMenuButton = ({ active = false, className, ...props }: AnimatedMenuButtonProps) => {
  return (
    <button className={cn('animated-menu-button p-2', className)} data-state={active ? 'open' : 'closed'} {...props}>
      <span className="animated-bugger">
        <span className="animated-bugger-bar --top"></span>
        <span className="animated-bugger-bar --middle"></span>
        <span className="animated-bugger-bar --bottom"></span>
      </span>
    </button>
  );
};

export default AnimatedMenuButton;
