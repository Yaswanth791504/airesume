import { db } from "./config";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./config";

const addUser = async (uid: string, email: string) => {
  try {
    const docRef = doc(db, "users", uid);
    await setDoc(docRef, {
      email,
    });
  } catch (error) {
    console.error(error);
  }
};

const addResume = async (uid: string) => {
  try {
    const docRef = doc(collection(db, "users", uid, "resumes"));
    await setDoc(docRef, {
      uid,
    });
    console.log(`Resume successfully written for user ID: ${uid}`);
    return docRef.id;
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};

const getResumes = async (uid: string) => {
  try {
    const resumes: any[] = [];
    const querySnapshot = await getDocs(
      collection(db, "users", uid, "resumes")
    );
    console.log("querySnapshot: ", querySnapshot);
    querySnapshot.forEach((doc) => {
      resumes.push({ resumeId: doc.id, ...doc.data() });
    });

    console.log("Resume data: ", resumes);
    return resumes;
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
};

const deleteResume = async (uid: string, resumeId: string) => {
  try {
    await deleteDoc(doc(db, "users", uid, "resumes", resumeId));
    console.log("Resume successfully deleted!");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

const updateResumeIntoFirebase = async (
  uid: string,
  resumeId: string,
  resume = {}
) => {
  console.log(resumeId);
  try {
    const docRef = doc(db, "users", uid, "resumes", resumeId);
    await setDoc(docRef, {
      ...resume,
      uid,
    });
    console.log(`Resume successfully updated for user ID: ${uid}`);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

const getResume = async (uid: string, resumeId: string) => {
  try {
    const docRef = doc(db, "users", uid, "resumes", resumeId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
};

const uploadImage = async (file: any) => {
  const storageRef = ref(storage, "images/" + file.name + Date.now());
  const snapshot = await uploadBytesResumable(storageRef, file);
  console.log("Uploaded a blob or file!", snapshot);
  return getDownloadURL(storageRef);
};

export {
  addUser,
  addResume,
  getResumes,
  deleteResume,
  updateResumeIntoFirebase,
  getResume,
  uploadImage,
};
