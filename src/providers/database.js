import { doc, getFirestore, setDoc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const dbProvider = {
    async get(map) {
        const snapshot = await getDocs(collection(db, map));
        let data = [];
        snapshot.forEach(doc => {
            data.push({id:doc.id, data: doc.data()});
            
        });
        return data;
    },

    async set(map, id, data) {
        return await setDoc(doc(db, map, id), data);
    },

    async remove(map, id) {
        return await deleteDoc(doc(db, map, id));
    },
}

export {dbProvider};