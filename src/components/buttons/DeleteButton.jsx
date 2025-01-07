//importo le icone di fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//importo lo stile
import style from './DeleteButton.module.css'

export default function DeleteButton({ setPostsData, cardSlug }) {

    //creo una funzione per cancellare un post
    function eliminate(e) {

        //Ottengo lo slug del post da eliminare dal pulsante associato
        const slug = e.target.getAttribute('data-slug')

        console.log(slug);

        //Faccio una chiamata AJAX di tipo delete per cancellare un post
        fetch('http://localhost:3002/posts/' + slug, {

            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => res.json())
            .then(response => {
                console.log(response);
                //Aggiorno lo stato con la lista filtrata
                setPostsData(response.data)

            })

    }

    return (
        <>
            <button onClick={eliminate} data-slug={cardSlug} className={style.deleteBtn}>
                <FontAwesomeIcon icon={faTrash} />
            </button>

        </>
    )
}