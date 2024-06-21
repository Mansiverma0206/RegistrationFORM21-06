import { Button, Form} from 'react-bootstrap';

const Login = ()=>{
   return<>
      <div className="d-flex w-100 v-50 justify-content-center align-items-center">
     <div className="w-50 mt-5 border bg-white shadow px-5 pt-3 pb-5 rounded">
      <h1 className='text-center'>Login Form</h1>
      <Form className='d-grid gap-2'>
      <Form.Group className="mb-3" >
          <Form.Control type='text' placeholder='Enter Your User Name'  required></Form.Control>
        </Form.Group>
     
        <Form.Group className="mb-3">
          <Form.Control type='password' placeholder='Enter Your Password' required></Form.Control>
        </Form.Group>
        <Button type='submit' className='btn-lg' style={{ backgroundColor: 'darkblue', borderColor: 'aqua' }}>Submit</Button>
       </Form>
      </div>    
    </div>
   </>
}

export default Login;