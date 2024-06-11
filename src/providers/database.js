import { doc, getFirestore, setDoc, collection, getDocs, deleteDoc } from "firebase/firestore";

const dbProvider = {
    async get(map) {
        const snapshot = await getDocs(collection(getFirestore(), map));
        let data = [];
        snapshot.forEach(doc => {
            data.push({id:doc.id, data: doc.data()});
            
        });
        return data;
    },

    async set(map, id, data) {
        return await setDoc(doc(getFirestore(), map, id), data);
    },

    async remove(map, id) {
        return await deleteDoc(doc(getFirestore(), map, id));
    },
}

export {dbProvider};