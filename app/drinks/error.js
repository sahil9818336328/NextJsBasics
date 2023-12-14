'use client'
const error = (error) => {
  console.log(error.error.message)
  return <div>{error.error.message}</div>
}
export default error
