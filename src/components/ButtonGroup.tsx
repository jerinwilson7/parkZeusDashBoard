
import { Button } from "./Button"

type ButtonGroupPropsType={
    handleOpenForm:()=>void
}


export const ButtonGroup = ({handleOpenForm}:ButtonGroupPropsType) => {
    
  return (
    <div>

          <div className="flex items-center -space-x-4 w-full">
            <div className="flex space-x-4 w-full">
              <Button onActive={handleOpenForm}>
                Vehicle Registration
              </Button>
              <Button>Driver Registration</Button>
              <Button>Payment Collection</Button>
              <Button>Parking Overview</Button>
            </div>
          </div>
        </div>
  )
}


