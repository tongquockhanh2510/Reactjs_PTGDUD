import Contact from "./Contact"

function App() {
    const contactDetail = {
        firstName: 'Chidi',
        lastName: 'Anagonye',
        phone: '555-366-8987',
        address: "St. Join's University, Sydney, Australia"
    }
  return (
    <>
      <Contact contactDetail = {contactDetail}></Contact>
    </>
  )
}

export default App
