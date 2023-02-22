import './SignIn.css'
import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Logo from '../../components/Logo/Logo.jsx'

export default function SignIn() {
  return (
      <main className="form-sign-in m-auto">
        <Logo />
        <Form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <FloatingLabel label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>

          <Form.Check type="checkbox" id="default-remember-me" label="Remember me" className="mb-3" inline/>
          <Button variant="primary" type="submit" size="lg" className="w-100">Sign in</Button>
          <p className="mt-5 mb-3 text-muted">&copy; 2022 - 2023</p>
        </Form>
      </main>
  );
}
