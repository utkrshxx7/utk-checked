import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/service/FirebaseConfig';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';
import Footer from '../components/Footer';

function Viewtrip() {


    const {tripId}=useParams();

    const [trip,setTrip] = useState([]);

    useEffect(() =>{
      tripId&&GetTripData();
      },[tripId]);

      const GetTripData = async () => {
        try {
            const docRef = doc(db, 'AITrips', tripId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document:", docSnap.data());
                setTrip(docSnap.data())
              
            } else {
                console.log("No such document");
                toast("No Trip found!");  // Show toast if document is not found
            }
        } catch (error) {
            console.error("Error getting document:", error);
            toast("Error retrieving trip data");
        }
    };


  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'> 
         {/*info section*/}

            <InfoSection trip={trip}/>
         {/*recommended Hotels*/}

         <Hotels trip={trip}/>



         {/*daily itinerary*/}
            <PlacesToVisit trip={trip}/>

         {/* footer */}

          <Footer trip={trip} />


    </div>
  )
}

export default Viewtrip
