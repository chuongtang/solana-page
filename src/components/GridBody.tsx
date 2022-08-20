import React from 'react'

type GifItem = {
  gifLink: string;
  userAddress: number;
};

type GifListProps ={
  gifListArray: GifItem[]
};

const GridBody = (props: GifListProps ) => {
 
  return (

    <section>
      <div className="max-w-screen-xl text-white p-4 mx-auto sm:px-6 lg:px-8">
        {/* <p className="text-red-500 text-shadow-lg text-center m-4">Wall of Greetings</p> */}
        <div
          className="sm:gap-6 lg:gap-8 sm:columns-2 lg:columns-3 [column-fill:_balance]"
        >
          {props.gifListArray.map((item, index) => (
          <div className="mb-8 sm:break-inside-avoid" key={index}>
              <blockquote className="p-6 shadow bg-gray-50 rounded-xl overflow-clip">
                <p className="leading-relaxed text-gray-700">
                  {item.gifLink}
                </p>
              </blockquote>
              {/* <div className="flex items-center gap-4 mt-4">
                <p className="text-sm mt-1">{item.userAddress._bn}</p>
              </div> */}
            </div>)
            )}
            
         
        </div>
      </div>
    </section>)
}

export default GridBody;