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
    const [post, setPost] = useState(null)

    //creo una costante che contiene lo slug del post
    const { slug } = useParams()

    //creo una costante che contenga l'url
    const url = `http://localhost:3002/ListaPost/${slug}`

    //fetcho i dati dall'endpoint dei post
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);

                const keys = Object.keys(data)
                console.log(keys);

                if (keys.includes('error')) {
                    navigate('/404')
                } else {
                    setPost(data.data)
                }


            }).catch(err => {
                console.log(err);

            })
    }, [])

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

            {/*<div className={style.card}>
                <div className={`${style.cardTop} ${style.dFlex}`}>
                    {/* Immagine associata al post, con un testo alternativo generico. }
                    <Link to={`/ListaPost/${cardSlug}`}>
                        <img src={'http://localhost:3002/posts/../img/' + cardPost.image} alt="immagine" />
                    </Link>

                </div>

                <div className={style.cardBottom}>
                    {/* Titolo del post }
                    <h3 className={style.mt1}>{cardPost.title}</h3>
                    {/* Contenuto del post }
                    <p className={style.mt1}>{cardPost.content}</p>

                    <p className={style.mt1}>
                        {/* Mostra i tag associati al post. }
                        {Array.isArray(cardPost.tags) && cardPost.tags.map((tag, index) => (
                            <span className={style[tag]} key={index}>
                                {/* I tag sono separati da uno spazio, senza aggiungere uno alla fine. }
                                {tag}{index < cardPost.tags.length - 1 ? ' ' : ''}
                            </span>
                        ))}
                    </p>
                    {/* Componente Button)/}
                    <Button />

                    {/* Pulsante per eliminare il post. Passa l'indice come dato tramite `data-index`. }
                    <button onClick={eliminatePost} data-slug={cardSlug} className={style.deleteBtn}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>*/}
        </>
    )
}