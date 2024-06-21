import { Form, Button} from 'react-bootstrap'

const DashBoard = () =>{
   return<>

<div className="d-flex w-100 v-50 justify-content-center align-items-center">
     <div className="w-50 mt-5 border bg-white shadow px-5 pt-3 pb-5 rounded">
      <h1 className='text-center'>Dashboard</h1>
      
      <div>
                
                <p>User Name:</p>
                <p>Email:</p>
                <p>Role: </p>
                {/* Display other user details as needed */}
            </div>
        <Button type='submit' className='btn-lg' style={{ backgroundColor: 'darkblue', borderColor: 'aqua' }}>Logout</Button>
    
      </div>    
    </div>
   </>
}

export default  DashBoard;