//importo lo useState e useEffect
import { useState, useEffect } from "react";

//importo lo stile
import style from "../components/form/Form.module.css"

//importo la Card
import Card from "../components/card/Card";

//creo il componente Form
export default function ListaPost() {

    const [postsData, setPostsData] = useState([])

    //creo la funzione fetchData
    function fetchData(url = 'http://localhost:3002/posts') {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.data);
                setPostsData(data.data)
            })
    }

    //creo la funzione handleClick
    function handleClick() {
        fetchData()

    }

    useEffect(fetchData, [])

    //eseguo il return
    return (
        <>

            <button type='button' onClick={handleClick} className={style.fetchBtn}>Fetch Posts</button>

            {Array.isArray(postsData) ? postsData.map((post, slug) => <Card key={slug} cardPost={post} setPostsData={setPostsData} cardSlug={post.slug}></Card>) : <p>Nessun risultato</p>}
        </>
    )

}