import {useState,useEffect} from "react";

export const LoadingScreen = ( { onComplete }) =>{
    const [text, setText] = useState("");
    const fullText = "<Hello World />";

    //run at certain interval
    //keep index of which letter of text is being displayed
    //delay before showing next letter
    //
    //should ONLY run in 2 situations: on first render or if onComplete is changed in any way
    useEffect(() =>{
        let index = 0;
        const interval = setInterval(()=>{
            setText(fullText.substring(0,index));
            index++;

            // if text is fully loaded, clear interval
            // delay by 1 second, end loading screen with callback onComplete
            if (index > fullText.length){
                clearInterval(interval);

                setTimeout(()=>{
                    onComplete();
                }, 1000);
            }
        }, 100);

        //clean up and in case something wrong happened to above
        return ()=> clearInterval(interval);

        //because onComplete is a dependcies of this useEffect, need to pass it
    }, [onComplete]);
    
    return (<div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
        <div className = "mb-4 text-4xl font-mono font-bold">
            {text} <span className="animate-blink ml-1">|</span>
        </div>

        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                {" "}
            </div>
        </div>
    </div>
    );
};