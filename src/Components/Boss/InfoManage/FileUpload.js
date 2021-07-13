import React,{useState} from 'react'
import Dropzone from 'react-dropzone'
// import { Icon } from 'antd'
import axios from 'axios'


function FileUpload(){

    const [Images, setImages] = useState([])


    const dropHandler = (files)=>{

          //file을 백엔드에 전해줌(1)

        let formData = new FormData();

        const config ={
            header:{'content-type':'multipart/form-data'}
        }
        formData.append("file", files[0])

        // axios.post('/api/product/image', formData, config)
        //     // 백엔드가 file저장하고 그 결과가 reponse에 담김
        //     // 백엔드는 그 결과를 프론트로 보내줌(3)
        //     .then(response =>{
        //         if(response.data.success){
        //             setImages([...Images, response.data.filePath])
        //         }else{
        //             alert('파일 저장 실패')
        //         }
        //     })

    }

    const deleteHandler = (image) => {

        const currentIndex = Images.indexOf(image)

        //이미지 스테이트에 들어있는 모든 이미지를 복사해서
        // newImages라는 배열에 넣는다.
        let newImages = [...Images]

        //newImages배열안에 있는 사진 중 
        //클릭한 사진의 인덱스를 지워줌
        newImages.splice(currentIndex, 1)

        //새로운 이미지 배열인 newImages를
        //다시 setImages 해준다.
        setImages(newImages)


    }

    return(
        <div style={{display: 'flex', justifyContent:'space-between'}}>
           <Dropzone onDrop={dropHandler}>
  {({getRootProps, getInputProps}) => (
    <section>
      <div 
      style={{width: 300, height:240, border: '1px solid lightgray',
    display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      {...getRootProps()}>
        <input {...getInputProps()} />
        {/* <Icon type="plus" style={{ fontSize:'3rem'}}/> */}
      </div>
    </section>
  )}
</Dropzone>

    {/* Dropzone옆에 올린 파일 보여지는 곳 */}
       <div style={{ display: 'flex', width: '350px', height: '240px', overflowX:'scroll'}}>

          {Images.map((image, index) => (
              <div onClick={()=> deleteHandler(image)} key={index}>
                  <img style={{ minWidth: '300px', width:'300px', height: ' 240px'}}
                  src={`http://localhost:5000/${image}`}
                  />
                </div>
          ))} 
        
       </div>

</div>
    )
}

export default FileUpload