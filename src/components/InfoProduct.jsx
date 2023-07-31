import { useState } from 'react';
import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

export default function InfoProduct({ libro }) {
  const [iconsActive, setIconsActive] = useState('tab1');

  const handleIconsClick = (value) => {
    if (value === iconsActive) {
      return;
    }

    setIconsActive(value);
  };

  return (
    <>
      <div>
        <div className='border-color'>
          <h2 className="d-flex align-items-center mx-2">
            SOBRE EL PRODUCTO
          </h2>
        </div>
      </div>
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleIconsClick('tab1')} active={iconsActive === 'tab1'}>
            <MDBIcon fas icon="scroll" className='me-2' /> Descripción
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleIconsClick('tab2')} active={iconsActive === 'tab2'}>
            <MDBIcon fas icon='chart-line' className='me-2' /> Especificaciones
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleIconsClick('tab3')} active={iconsActive === 'tab3'}>
            <MDBIcon fas icon='cogs' className='me-2' /> Término y condiciones
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={iconsActive === 'tab1'}>{libro.descripcion}</MDBTabsPane>
        <MDBTabsPane show={iconsActive === 'tab2'}><table className="table table-striped">
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>Tipo</td>
              <td>Libro impreso</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Dimensiones</td>
              <td>23 x 15 x 1,4 cm</td>
            </tr>
          </tbody>
        </table></MDBTabsPane>
        <MDBTabsPane show={iconsActive === 'tab3'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit est magni voluptatibus quasi, provident voluptas fugit perspiciatis libero repellendus, similique quas incidunt dolores inventore ad sequi sint, esse odio.</MDBTabsPane>
      </MDBTabsContent>
      
        
    </>
  );
}