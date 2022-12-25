import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Header,
  MainContainer,
  CreateContainer,
  ContactUs,
  Aboutus,
} from "./components";
import { actionType } from "./context/reducer";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";

const App = () => {
  const [{}, dispatch] = useStateValue();
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='w-screen h-auto flex flex-col bg-primary'>
      <Header />
      <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
        <Routes>
          <Route path='/*' element={<MainContainer />} />
          <Route path='/createitem' element={<CreateContainer />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/aboutus' element={<Aboutus />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
