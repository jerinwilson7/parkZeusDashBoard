
export const NoGateEvent = () => {
  return (
    <div className="p-4">
                  <div className="flex gap-4">
                      <div className="w-1/2">
                        <div className="flex flex-col w-full">
                          <div className="h-80 rounded-md w-full">
                            <div className="flex items-center justify-center rounded-md h-full w-full bg-gray-500 text-gray-600">
                              No event
                            </div>
                          </div>

                         
                        </div>
                      </div>

                      <div className="w-1/2 text-gray-400">
                        <h3 className="text-lg">Vehicle Details</h3>
                        <div className="flex flex-col mt-2 gap-4">
                          <p>Gate Number</p>
                          <p>Parking Direction</p>
                          <p>Vehicle Type</p>
                          <p>Vehicle Number</p>
                          <p>Tag ID</p>
                          <p>Tag Status</p>
                        </div>
                      </div>
                    </div>
                  </div>
  )
}
