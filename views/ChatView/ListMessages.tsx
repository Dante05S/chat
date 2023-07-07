import Avatar from 'components/Display/Avatar';
import React from 'react';

function Message(): JSX.Element {
  return (
    <div className="flex items-center w-full py-3">
      <div className="flex flex-grow-0">
        <Avatar src="/static/image.png" size={49} />
      </div>
      <div className="flex flex-col  w-[calc(100%_-_49px)] flex-grow pl-3">
        <div className="flex items-center">
          <div className="flex flex-grow items-center overflow-hidden">
            <span className="text-base truncate">Alejandro Bedoya Sanchez</span>
            <div className="ml-1.5 rounded-full bg-success w-2.5 h-2.5 min-h-[0.625rem] min-w-[0.625rem]" />
          </div>
          <div className="ml-1.5 whitespace-nowrap">
            <span className="text-xs font-light">12:30 P.M.</span>
          </div>
        </div>
        <div className="flex items-center mt-0.5">
          <div className="flex flex-grow overflow-hidden">
            <span className="text-sm truncate">
              Hola, como estas?shdjsdjshdjshjd hsjdjs
            </span>
          </div>
          <div className="flex items-center justify-center rounded-full w-5 h-5 min-h-[1.25rem] min-w-[1.25rem] ml-1.5 bg-primary">
            <span className="text-xs">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ListMessages(): JSX.Element {
  return (
    <div className="flex flex-col items-center w-full">
      {[1, 2, 3, 4].map((item) => (
        <Message key={item} />
      ))}
    </div>
  );
}
