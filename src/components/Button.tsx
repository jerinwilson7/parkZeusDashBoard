type ButtonType = {
    children:React.ReactNode;
    className?:string
    onActive?: () => void;
}
export const Button = ({children,className,onActive}:ButtonType) => {
  return (
    <button className={className? className : 'flex bg-btn-blue text-white items-center justify-center rounded-xl px-4 py-6 w-full min-w-60'}
     onClick={onActive}>
        {children}
    </button>
  )
}
