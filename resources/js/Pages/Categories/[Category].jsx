import { Head } from '@inertiajs/react'
import Alert from 'bootstrap/js/dist/alert';

export default function Page({...data}) {
  return (
    <>
      <Head title="Category" />
      <h1>Welcome</h1>
      <p>Category, {data.category}</p>
    </>
  )
}