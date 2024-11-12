import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Router, 
  RouterProvider
} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout';
import HomePage from './Pages/HomePage';
import JobsPage from './Pages/JobsPage'
import NotFoundPage from './Pages/NotFoundPage';
import JobPage, { jobLoader } from './Pages/JobPage';
import AddJobPage from './Pages/AddJobPage';
import EditJobPage from './Pages/EditJobPage';


const App = () => {
// add new job 
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  }; // end add job

  // delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  // update job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  }
  
  // create a browser router
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route 
        path='/jobs/:id'  element={<JobPage 
        deleteJob={deleteJob} />} loader={jobLoader}
      />
      <Route 
        path='/edit-job/:id'  element={<EditJobPage updateJobSubmit={updateJob}
        />} loader={jobLoader}
      />
      <Route path='/Add-job' element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path='/*' element={<NotFoundPage />} />
    </Route>
    )
  );
  
  // return the browser router
  return <RouterProvider router={router} />;
};

export default App

// packages added
// 'react-icons'
// 'react-router-dom
// 'react-spinners'
// 'react-toastify'