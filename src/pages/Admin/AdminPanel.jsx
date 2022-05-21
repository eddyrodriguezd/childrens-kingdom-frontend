import { useState } from 'react';
import CreateEditModal from '../../components/Admin/CreateEditModal/CreateEditModal';
import OptionsBar from '../../components/Admin/OptionsBar/OptionsBar';
import AdminProductGrid from '../../components/Admin/ProductGrid/AdminProductGrid';

const AdminPanel = () => {
    const [modalShow, setModalShow] = useState(false);
    const [item, setItem] = useState({});
    const [file, setFile] = useState(null);

    const showModalToCreateOrEdit = (item) => {
        setModalShow(true);
        setItem(item);
    }

    return (
        <>
            <OptionsBar showModalToCreate={showModalToCreateOrEdit}/>
            <AdminProductGrid showModalToEdit={showModalToCreateOrEdit}/>
            
            <CreateEditModal
                show={modalShow}
                onHide={() => {setModalShow(false); setFile(null)}}
                item={item}
                file={file}
                setFile={setFile}
            />
        </>
    );
}

export default AdminPanel;