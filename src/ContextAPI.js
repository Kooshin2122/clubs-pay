import React, { createContext, useContext, useState } from 'react'
import apiRequest from './api-request'

const Context = createContext()

function ContextAPI({ children }) {
    // Global States
    const [loading, setLoading] = useState(false)
    const [eventRegisterTitle, setEventRegisterTitle] = useState('Event Registration Form')
    const [eventRegisterObject, setEventRegisterObject] = useState({})
    const [openPopUpForm, setOpenPopUpForm] = useState(false)
    const [register, setRegister] = useState({ title: '', description: 'description....', media: '../img/Sports_Img/empty.png' })
    const [visible, setVisible] = useState(false)

    // Fetching /events data from the server
    const [eventData, setEventData] = useState([])
    const getEventDataFromTheServer = async () => {
        const response = await apiRequest.get('/events')
            .catch(error => console.log('error ayaa dhacay', error))
        if (response) {
            setEventData(response.data)
            setLoading(true)
        }
    }

    // Fetching /summery data from the server
    const [summary, setSummary] = useState({ events: 0, clubs: 0, students: 0, totalPayment: 0 })
    const getSummaryDataFromTheServer = async () => {
        const response = await apiRequest.get('/summery')
            .catch(error => console.log('error ayaa dhacay', error))
        if (response)
            setSummary(response.data);
    }

    // Fetching /clubsRegistration/LineChart data from the server
    const [clubsRegistration, setClubsRegistration] = useState([0])
    const getClubsRegistrationDataFromTheServer = async () => {
        const response = await apiRequest.get('/clubsRegistration')
            .catch(error => console.log('error ayaa dhacay', error))
        if (response)
            setClubsRegistration(response.data);
    }

    // Fetching /clubRegistaring/PieChart data from the server
    const [clubRegistaring, setClubRegistaring] = useState([0])
    const getClubRegistaringDataFromTheServer = async () => {
        const response = await apiRequest.get('/clubRegistaring')
            .catch(error => console.log('error ayaa dhacay', error))
        if (response)
            setClubRegistaring(response.data);
    }

    const postEvent = async (event = {}) => {
        const response = await apiRequest.post('/events', event)
        console.log('response', response);
        setEventData({ ...eventData, response })
    }

    const putEvent = async (event = {}, eventId) => {
        const response = await apiRequest.put(`/events/${eventId}`, event)
        console.log('response', response);
        const { id } = response.data
        setEventData(eventData.map(event => {
            return id === eventId ? { ...response.data } : event
        }))
    }

    const deleteEvent = async (Id) => {
        console.log('id--', Id);
        await apiRequest.delete(`/events/${Id}`)
        const newEventData = eventData.filter(event => event.id !== Id)
        setEventData(newEventData)
    }

    const [clubsData, setClubsData] = useState([])
    const getClubsDataFromTheServer = async () => {
        const response = await apiRequest.get('/clubs')
            .catch(error => console.log('error ayaa dhacay', error))
        if (response) {
            setClubsData(response.data)
            // setLoading(true)
        }
    }

    return (
        <Context.Provider
            value={{
                loading, setLoading,
                eventData, setEventData,
                getEventDataFromTheServer,
                eventRegisterTitle, setEventRegisterTitle,
                eventRegisterObject, setEventRegisterObject,
                summary,
                getSummaryDataFromTheServer,
                clubsRegistration,
                getClubsRegistrationDataFromTheServer,
                clubRegistaring,
                getClubRegistaringDataFromTheServer,
                openPopUpForm, setOpenPopUpForm,
                register, setRegister,
                visible, setVisible,
                postEvent, putEvent, deleteEvent,
                clubsData, setClubsData,
                getClubsDataFromTheServer
            }}
        >
            { children}
        </Context.Provider >
    )
}

export const useCustomHook = () => useContext(Context);

export default ContextAPI

