import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase,update,onValue,remove,push, ref, get, set,query,limitToFirst,limitToLast,orderByChild,equalTo,runTransaction} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut ,sendPasswordResetEmail,deleteUser } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";


const firebaseConfig = {
apiKey: "AIzaSyA9HvbI01G_4y6bK-3U0brv1E6P-c8XSrM",
authDomain: "passionarts2025-ebde6.firebaseapp.com",
databaseURL: "https://passionarts2025-ebde6-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "passionarts2025-ebde6",
storageBucket: "passionarts2025-ebde6.firebasestorage.app",
messagingSenderId: "89856445085",
appId: "1:89856445085:web:824d3cedf9e299273e6274"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const personalityRef = ref(db, "/personality");
var currentUserId="";
export { currentUserId,auth,personalityRef };

// Stored in database once submitted
export async function createPersonality(calculatedPersonality, chosenOptions) {
  event.preventDefault();

  const optionBreakdown = chosenOptions.map((choice, index) => ({
    question: index,
    selectedOption: choice
  }));

  await push(personalityRef, {
    personalityType: calculatedPersonality,
    chosenOptions: optionBreakdown
  });
  console.log("hi");
}

export async function loadRandomPersonality() {
// Return the promise from the get operation
return get(ref(db, '/personality'))
    .then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            const personalityIds = Object.keys(data);
            const randomId = personalityIds[Math.floor(Math.random() * personalityIds.length)];
            const randomPersonalityDetails = data[randomId];
            return randomPersonalityDetails; // This is the data you want to return
        } else {
            console.log("No data available");
            return null; // Return null or an appropriate value when no data
        }
    })
    .catch((error) => {
        console.error(error);
        throw error; // Re-throw the error so it can be caught by the caller
    });
}

export const loadAllPersonality = async () => {
  const latest30Query = query(personalityRef, limitToLast(30));
  const snapshot = await get(latest30Query);
  if (snapshot.exists()) {
    return snapshot.val(); // returns object of all users
  } else {
    console.log("No data available");
    return {};
  }
};

export function getPersonalityCount(setCount) {
  const calculatePersonalityCount = onValue(personalityRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const numberOfNodes = Object.keys(data).length;
      setCount(numberOfNodes);
    } else {
      setCount(0);
    }
  }, (error) => {
    console.error("Error fetching data:", error);
  });
  return calculatePersonalityCount; 
}

    
    
