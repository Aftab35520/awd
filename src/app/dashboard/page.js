'use client'
import { useEffect, useRef, useState } from 'react';
import DownloadSection from '../comonents/Downloadpdf'
import NotebookDisplay from '../comonents/NoteBookDisplay'
import { useMyContext } from '../ContextApi/CreateContext';
import '../Globle.css'
import Header from '../Home/Header'
import Prompt from '../Home/Prompt';
import Gradient from '../Home/Gradient';
import FontGeneratorPanel from './UserPage/GenerateFont';
import DashboardHeader from './DashboardHeader';
import DynamicFontLoader from './DownloadFont';

export default function page() {
  const { setsubscribe } = useMyContext();
    const { Answer } = useMyContext();
    const notebookRef = useRef(null);
    const [HNumber, setHnumber] = useState(0);
    const [routes,setroutes]=useState('generatefont')
    const[ credit,setcredit]=useState(0)
    const [paid,setpaid]=useState(false)
    const [fonturl,setfonturl]=useState('')
    useEffect(()=>{
        const userData = localStorage.getItem('user');
        if (userData) {
          let data = JSON.parse(userData);
            setpaid(data.isPaid)
          if (data?.fontsGenerated==0){
            setroutes('generatefont')
            setcredit(1)
          }
          if(data?.fontsGenerated==1 && data.isPaid==false){
            setroutes('generateassignmentai')
            setcredit(0)
          }
          if(data.isPaid==true){
             setroutes('generateassignmentai')
             setcredit(data.fontLimit-data.fontsGenerated)
          }
        }
    },[])
    useEffect(() => {
      const user = localStorage.getItem("user");
      if (user) {
         let data = JSON.parse(user);
         if(data.fontsGenerated>0){
          setfonturl(`fonts/${data._id}`)
         }
      }
    }, [])
    console.log(fonturl)
    const Handwriting = [
        { name: "userFont", size: "25px", paddingTop: "3cm", lineHeight: '37.4px' },
    ];
    

    return (
        
        <div className="w-full min-h-dvh max-w-[2000px] flex flex-col items-center justify-between z-30 mt-4 overflow-hidden">
              <div className="w-full flex flex-col items-center  ">
                {
                  fonturl!==""&&(
                    <DynamicFontLoader fontId={fonturl} />
                  )
                }
                <Header />
                <DashboardHeader routes={routes} setroutes={setroutes} credit={credit}/>
                <Gradient />
                {
                    routes=="generatefont"? <div className='p-2  w-full h-dvh flex justify-center items-center'>
                    <FontGeneratorPanel/>
                </div>:
                <div className='w-full flex flex-col items-center '>
                     <div className='w-1/2 flex justify-center max-sm:w-full'>
                    <Prompt />
                </div>
                <div className="flex flex-row-reverse relative FlexingCol">

                    {Answer !== "Loading" && Answer !== "Default" && (
                        <div>
                         {
                          paid? <DownloadSection
                            generatePDFRef={notebookRef}
                            setHnumber={setHnumber}
                            Handwriting={Handwriting}
                        />:<div className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer" onClick={()=>setsubscribe(true)}>Enable Download</div>
                         }
                          </div>
                    )}

                    <NotebookDisplay
                        Answer={Answer}
                        notebookRef={notebookRef}
                        Handwriting={Handwriting}
                        HNumber={HNumber}
                    />

                </div>
                </div>
                }
               
               
            </div>
        </div>
    )
}