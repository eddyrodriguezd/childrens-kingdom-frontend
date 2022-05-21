import { useState } from 'react';
import CreateEditModal from '../../components/Admin/CreateEditModal/CreateEditModal';
import OptionsBar from '../../components/Admin/OptionsBar/OptionsBar';
import AdminProductGrid from '../../components/Admin/ProductGrid/AdminProductGrid';

const AdminPanel = () => {
    const [modalShow, setModalShow] = useState(false);

    const [productFilter, setProductFilter] = useState('');
    const [item, setItem] = useState({});
    const [file, setFile] = useState(null);
    const [formItem, setFormItem] = useState(item);

    const showModalToCreateOrEdit = (item) => {
        setModalShow(true);
        setItem(item);
    }

    const hideModal = () => {
        setModalShow(false);
        setFile(null);
        setItem({});
        setFormItem({});
    }

    return (
        <>
            <OptionsBar showModalToCreate={showModalToCreateOrEdit} setProductFilter={setProductFilter}/>
            <AdminProductGrid showModalToEdit={showModalToCreateOrEdit} productNameFilter={productFilter}/>
            
            <CreateEditModal
                show={modalShow}
                onHide={hideModal}
                item={item}
                file={file}
                setFile={setFile}
                formItem={formItem}
                setFormItem={setFormItem}
            />
        </>
    );
}

export default AdminPanel;