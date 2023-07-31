import { MDBTextArea } from 'mdb-react-ui-kit';
import StarRating from './StarRating'
export default function Comentario() {
  return (
    <>
      <div className='py-3'>
        <div className='border-color '>
          <h2 className="d-flex align-items-center mx-2">
            CALIFICA ESTE PRODUCTO
          </h2>
        </div>
        <br />
        <div className='mx-auto py-2'>
        <StarRating />
        </div>
        <br />

        <MDBTextArea label='Comentario' id='textAreaExample' rows={4} />
      </div>
    </>
  )
}