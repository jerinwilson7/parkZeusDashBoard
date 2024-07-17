
export const ParkingInformation = () => {
  return (
    <div className="bg-white p-6 basis-1/2 rounded-md shadow-md col-span-1">
                <h2 className="mb-8">Parking information</h2>
                <div className="flex flex-col gap-6">
                  <div className="flex">
                    <p className="w-1/2 text-gray-400">Parking Space</p>
                    <p className="w-1/2">open</p>
                  </div>
                  <div className="flex">
                    <p className="w-1/2 text-gray-400">Parking Capacity</p>
                    <p className="w-1/2">1000</p>
                  </div>
                  <div className="flex">
                    <p className="w-1/2 text-gray-400">Parking Occupancy</p>
                    <p className="w-1/2">0</p>
                  </div>
                  <div className="flex">
                    <p className="w-1/2 text-gray-400">Gate Number</p>
                    <p className="w-1/2">02 (02A, 02B, 02C)</p>
                  </div>
                  <div className="flex">
                    <p className="w-1/2 text-gray-400">Parking Direction</p>
                    <p className="w-1/2">In/Out</p>
                  </div>
                </div>
              </div>
  )
}
