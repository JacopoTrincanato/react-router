import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//creo il componente PostPage
export default function PostPage() {

    //creo una costante navigate per navigare tra le pagine
    const navigate = useNavigate()

    //creo una costante che contiene i dati del post
    const [post, setPost] = useState()

    //creo una costante che contiene lo slug del post
    const { slug } = useParams()

    //creo una costante che contenga l'url
    const url = `http://localhost:3002/posts/${slug}`
}