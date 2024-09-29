import React from 'react'
import Layout from '../layout'
import AppointmentsComponent from '@/components/dahboard/appointments'
import StudentsComponent from '@/components/dahboard/students'

const index = () => {
  return (
    <Layout>
        <StudentsComponent/>
    </Layout>
  )
}

export default index