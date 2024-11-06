import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const getStoredAddToCardList = () => {
    const storedListStr = localStorage.getItem('add-list');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    } else {
        return [];
    }
}


const addToStoredAddToCardList = (id) => {
    const StoredList = getStoredAddToCardList();
    if (StoredList.includes(id)) {
        toast("Product Already added");
    } else {
        StoredList.push(id);
        const storedListStr = JSON.stringify(StoredList);
        localStorage.setItem('add-list', storedListStr);
        toast("Product added Successful");
    }
}

export { addToStoredAddToCardList , getStoredAddToCardList };
