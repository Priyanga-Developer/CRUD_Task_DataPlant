import  {createContext ,useEffect,useState} from 'react'
import axios from '../api/axios';


 const DataContext=createContext({});
 export const DataContextProvider=({children})=>{

    const [schedules, setSchedules] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const  [formData,setFormData]=useState({
        title: '',
        description: '',
        subject: '',
        frequency: 'Weekly',
        repeat: '',
        time: '09:00',      
    });
    const [data,setData]=useState({
      title: '',
      description: '',
      subject: '',
      frequency: 'Weekly',
      repeat: '',
      time: '09:00',
    });
    const [showAdd, setShowAdd] = useState(false);
    const handleAddClose = () => setShowAdd(true);
    const handleAddShow = () => setShowAdd(true);
    const [showEdit, setShowEdit] = useState(false);
    const handleEditClose = () => setEditShow(true);
    const handleEditShow = () => setAddShow(true);
    const handleEdit=(scheduleId)=>{
            handleEditShow();
            const schedule=schedules.find(schedule=>schedule.id===scheduleId);
            setData(schedule)    
      }
     
      const displayTime = (time) => {
        // Extract AM/PM from the time
        const amPm = new Date(`2000-01-01T${time}:00`).toLocaleTimeString('en-US', { hour12: true }).slice(-2);
        return `${time} ${amPm}`;
      };

   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const fetchSchedules = async () => {
        try {
          const response = await axios.get('http://localhost:3500/schedules');
          console.log(response.data);
          setSchedules(response.data);
        } catch (error) {
          console.error('Error fetching schedules:', error);
        }
      };
  
      useEffect(() => {
        fetchSchedules();
      }, []);
  
   const addItem =(schedules)=>{
    const id=schedules.length? schedules[schedules.length-1].id+1 :1;
    setFormData({
        id,
        title: '',
        description: '',
        subject: '',
        frequency: 'Weekly',
        repeat: '',
        time: '09:00',
      });
   }
   const handleSubmit=async()=>{
    try {
        await axios.post('http://localhost:3500/schedules', formData);
       addItem(schedules);
      fetchSchedules();
    } catch (error) {
      console.error('Error saving schedule:', error);
    }
  };
  
  const handleDayClick = (day) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      repeat: day,
    }));
  };
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3500/schedules/${id}`);
      fetchSchedules();
    } catch (error) {
      console.error('Error deleting schedule:', error);
    }
   }
   const handleSearch = async () => {
    try {
        const response = await axios.get(`http://localhost:3500/schedules?q=${searchTerm}`);
      console.log(response.data);
      setSchedules(response.data);
    } catch (error) {
      console.error('Error searching schedules:', error);
    }
  };
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); 
  };
  
  const handleSearchSubmit = () => {
    
    handleSearch();
    setSearchTerm("")
  };
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

  };

  const handleEditDayClick = (day) => {
    setData((prevFormData) => ({
      ...prevFormData,
      repeat: day,
    }));
  };
  const handleEditSubmit=async(id)=>{
    try {
      await axios.patch(`/schedules/${id}`, data); 
      await fetchSchedules(); 
    } catch (error) {
    console.error('Error saving schedule:', error);
    }
    handleEditClose();
 };

    return(
        <DataContext.Provider value={{schedules, setSchedules,searchTerm, setSearchTerm,formData,setFormData,
          handleChange,fetchSchedules,handleSubmit,handleDelete,handleSearch,handleSearchChange,handleSearchSubmit,handleDayClick,data,setData,handleEdit,
          displayTime,handleEditSubmit,handleEditDayClick,handleEditChange,
          showAdd, setShowAdd, handleAddClose,handleAddShow,showEdit, setShowEdit,handleEditClose ,handleEditShow 
        }}>
            {children}
        </DataContext.Provider>
    )
 }

export default DataContext;