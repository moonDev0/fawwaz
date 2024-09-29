import React from 'react'
import Layout from '../layout'
import AppointmentsComponent from '@/components/dahboard/appointments'
import ResultsComponent from '@/components/dahboard/results'

const index = () => {
  return (
    <Layout>
        <ResultsComponent/>
    </Layout>
  )
}

export default index