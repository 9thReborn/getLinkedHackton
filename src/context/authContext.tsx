// @ts-nocheck
import React, { createContext, useContext } from "react";
import { apiPost } from "./api/axios";
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


export const dataContext = createContext<undefined | any>(undefined);

const DataProvider = ({ children }: any) => {
  /**=============== REGISTER ==============*/
  const registerationConfig = async (formData) => {
    try {
      const registrationData = {
        email: formData.email,
        team_name: formData.team_name,
        phone_number: formData.phone_number,
        project_topic: formData.project_topic,
        group_size: formData.group_size,
        category: formData.category,
        privacy_poclicy_accepted: formData.privacy_poclicy_accepted,
      };
        
   const data = await apiPost("/hackathon/registration", registrationData)
      if (data) {
        toast.success(data.statusText)
        return data;
      } 

    } catch (error) {
  
      toast.error(error.response.data.email[0])
      return error
    }
  };

  /**===================== CONTACT =======================*/
  const contactConfig = async (formData) => {
    try {
      const contactData = {
        email: formData.email,
        first_name: formData.first_name,
        message: formData.message,
      };
      await apiPost("/hackathon/contact-form", contactData).then((res) => {
       toast.success(res.statusText);
      });
    } catch (error) {
      toast.error(error.response.data.email[0]);
    }
  };

  return (
    <dataContext.Provider value={{ registerationConfig, contactConfig }}>
      {children}
    </dataContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(dataContext);
  if (context === undefined) {
    throw new Error("useAuth must be within the auth provider");
  }
  return context;
};

export default DataProvider;
