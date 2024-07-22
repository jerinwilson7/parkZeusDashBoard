type ButtonType = {
    children:React.ReactNode;
    className?:string
    onActive?: () => void;
    isSubmitting?:boolean
    type?:"submit"
}
export const Button = ({children,className,onActive,isSubmitting,type}:ButtonType) => {
  return (
    <button className={className? className : 'flex bg-btn-blue text-white items-center justify-center rounded-xl px-4 py-6 w-full min-w-60 disabled:bg-red-400'}
     onClick={onActive}
     disabled={isSubmitting}
     type={type}
     >
        {children}
    </button>
  )
}
