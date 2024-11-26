//importo useEffect e useState da react
import { useEffect, useState } from "react";

//importo useNavigate e useParams da react-router-dom
import { useNavigate, useParams } from "react-router-dom";

//importo Card
import Card from "../components/card/Card";

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

    //fetcho i dati dall'endpoint dei post
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);

            }).catch(err => {
                console.log(err);

            })
    })

    //eseguo il return
    return (
        <>
            {
                post ? (
                    <Card />
                ) : (
                    <p>Il post non è presente</p>
                )
            }
        </>
    )
}