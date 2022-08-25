import React,{useState} from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const Pixel = () => {
    const [style, setStyle] = useState({
        fontFamily: 'Times New Roman',
        backgroundColor: randomHexColor(),
        height: '40px',
        width: '40px',
    })
    // setInterval(() => {
    //     setStyle(() => ({
    //         ...style,
    //         backgroundColor: randomHexColor(),
    //       }))
    //   }, 2000);  

    const clickHandler = () => {
        setStyle(() => ({
            ...style,
            backgroundColor: randomHexColor(),
        }))
       
      }

      const enterHandler = () => {
        setStyle(() => ({
            ...style,
            backgroundColor: randomHexColor(),
        }))
      }

    //   const dbclickHandler = () => {
    //     setStyle(() => ({
    //         ...style,
    //         backgroundColor: 'white',
    //     }))
    //   }

      const dragHandler = () => {
        setStyle(() => ({
            ...style,
            backgroundColor: 'yellow',
        }))
      }

      const contextHandler = (event) => {
        event.preventDefault();
        setStyle(() => ({
            ...style,
            backgroundColor: randomHexColor(),
            
        }))
    
        
      }

    return (
        <div    
        style={style} 
        onClick={clickHandler} 
        onMouseEnter={enterHandler} 
        // onDoubleClick={dbclickHandler} 
        onDragEnter={dragHandler} 
        onContextMenu={contextHandler}> 
        </div>
  )  
}

export default Pixel