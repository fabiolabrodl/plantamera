import './style.scss';

interface FormButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  title: string;
}

export const FormButton: React.FC<FormButtonProps> = ({
  type,
  onClick,
  disabled = false,
  title,
}) => {
  return (
    <button
      className='formButton'
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
