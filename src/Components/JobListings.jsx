import React from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner';

import { useState, useEffect } from 'react';

const JobListings = ({ isHome = false}) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'

    const fetchJobs = async () => {
      try
      {
      const res = await fetch(apiUrl); // fetch the data from the mock json server
      const data = await res.json(); // convert the response from json
      setJobs(data);
      } catch (error) {
        console.log('Error fetching data.' , error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        
          { 
          // a function that takes the jobs array from the json file and maps
          // them into a list using the map function, then passes each job object
          // from the list into the function as a prop with the id as a key
          // so the JobListing component can use the data

          // we changed jobs.map to recentJobs.map with the const made above for
          // the 1st 3 jobs in the array
          }

          {loading ? (

            <Spinner loading={loading}/>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                jobs.map( (job) => (
                  // a function 
                  <JobListing  key={job.id} job={job}/>
                ))}
              </div>
            )}        

        
      </div>
    </section>  )
}

export default JobListings