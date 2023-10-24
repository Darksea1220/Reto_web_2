import { useState, useEffect } from 'react'
import getCustomers from '../services/getCustomers'

export function Table({customers}) {
  return (
    <div className='layout-column align-items-center justify-content-start'>
      <div className='card pt-30 pb-8 mt-20'>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>Gender</th>
            <th>Income</th>
          </tr>
              {customers.map(customer => {
                const { name, age, location, gender, income} = customer
                return(
                  <tr key={name}>
                    <th>{name}</th>
                    <th>{age}</th>
                    <th>{location}</th>
                    <th>{gender}</th>
                    <th>{income}</th>
                  </tr>
                )
              })}
          </thead>
          <tbody >
          </tbody>
        </table>
      </div>
    </div>
  )
}



function SearchCustomer() {

  const [customers, setCustomers] = useState([])
  const [query, setQuery] = useState('')

  useEffect(()=>{
    getCustomers().then((customers)=>{
      setCustomers(customers)
    })
  },[])

  const handleInputChange = (e) => {
    const { target } = e
    const query = target.value
    setQuery(query)
    filterCustomers()
  }
  const filterQuery =()=>{
   return customers.name.includes(query)|| customers.age.toString().includes(query) || customers.location.includes(query) || customers.gender.includes(query) || customers.income.includes(query)
  }

const filterCustomers=() =>{
    if (query.trim=='') {
      return customers
    } else if (!query.trim=='') {
    return customers.filter((filterQuery)) 
    } else{
      return `No results for ${query}`
    }
  }


  return (
    <>
      <div className='layout-row align-items-center justify-content-center mt-30'>
        <input className='large mx-20 w-20'
          placeholder='Enter search term (Eg: Phil)' 
          onChange={handleInputChange}/>
      </div>
      <Table 
       customers={customers}/>
    </>
  )
}

export default SearchCustomer