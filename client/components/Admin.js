import React from 'react'
import CreateHue from './CreateHue'

class Admin extends React.Component {
  render() {
    return (
      <div>
        <h1>Admins Only</h1>
        <CreateHue />
        <p>
          Here, I'll render a table of all products with Bootstrap. Next to each
          row of products, I'll have an edit and delete button. The edit button
          should take you to a separate page where you can fill out fields to
          update individual product listings. The delete button could optionally
          show a confirmation message before deleting the product.
        </p>
        <p>
          All relevant POST, PUT, and DELETE routes, along with this /admin page
          should be restricted to admins. Even without access to this page,
          non-admins should not be able to send these types of requests using an
          app like Postman or Insomnia.
        </p>
      </div>
    )
  }
}

export default Admin
