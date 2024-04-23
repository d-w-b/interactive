// import * as stylex from "@stylexjs/stylex"
// import Link from 'next/link';
// import Image from 'next/image'
// import Timestamp from "../ui/timestamp";

// import fs from 'fs'

export default function SketchPost(){
     return
     //(
//         <div {...stylex.props(styles.layout)}>
//             {
//             Object.values(getSketchInfo())
//                   .reverse()
//                   .map( (content, index) => <SketchTitle key={index} {...content} />) 
//             }    
//         </div>
//     ) 
   
 }

// // Load data
// function getSketchInfo() : any[] {
//     const jsonFile = fs.readFileSync(`./public/json/sketch.json`).toString()
//     return JSON.parse(jsonFile)
// }

// // Component <SketchTitle>
// function SketchTitle({title, imgSrc, href, classification, timestamp}: any){
//     return (
//         <Link href={href} {...stylex.props(styles.post)}>
//             <Image width="200" height="200" src={imgSrc} alt={title} />
//             <div {...stylex.props(styles.title)}>
//                 <span {...stylex.props(styles.classification)}>
//                     {classification}
//                 </span>
//                 <p>
//                     {title}
//                 </p>
//             </div>
//             <Timestamp>{timestamp}</Timestamp>
//         </Link>
//     )
// }

// const styles = stylex.create({
//     layout : {
//         display : "flex",
//         gap : "1rem",
//         justifyContent : "space-between",
//         flexWrap : "wrap",
//     },
//     post : {
//         borderBottomWidth: '1px',
//         borderBottomStyle: "solid",
//         borderBottomColor : "#ddd",
//         padding : "4px",
//         fontSize: "16px",
//         fontWeight: 500,
//         margin : "8px 0",
//         display: "flex",
//         flexDirection : "column",
//         gap : "4px"
//     },
//     title :{
//         marginTop: "1rem",
//         justifyContent : "space-between",
//         display: "flex",
//         gap : "12px",
//     },
//     classification:{
//         display : "inline-block",
//         fontSize:"12px",
//         textAlign:"center",
//         backgroundColor : "#aaa",
//         color: '#fff',
//         minWidth: "56px",
//         padding : "2px 7px",
//         borderRadius: "7px",
//     },
    
    
// })