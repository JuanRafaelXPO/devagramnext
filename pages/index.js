import { useState, useRef } from "react";
import Avatar from "../components/avatar";
import Botao from "../components/botao";
import UploadImagem from "../components/uploadImagem";

export default function Home() {
  const [imagem, setImagem] = useState(null)
  const referenciaInput = useRef(null);
  
  console.log(imagem)
  
  return (
    <>
      <h1>hello</h1>
      <button onClick={() => referenciaInput?.current?.click()}>abir seletor de arquivos</button>
      <UploadImagem 
        setImagem={setImagem} 
        imagemPreview={imagem?.preview} 
        aoSetarAReferencia={(ref) => referenciaInput.current = ref}
      />
      <Avatar />
      <Botao texto={'login'} cor='primaria' manipularClique={() => console.log('botao clicado')}/>
    </>
  )
}
