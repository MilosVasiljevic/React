
// import './App.css';
// import {  Link } from "react-router-dom";

// import React from 'react'
// import {rest} from 'msw'
// import {setupServer} from 'msw/node'
// import {render, fireEvent, screen} from '@testing-library/react'
// import '@testing-library/jest-dom'
// import Fetch from '../fetch'

// const server = setupServer(
//   rest.get('/greeting', (req, res, ctx) => {
//     return res(ctx.json({greeting: 'hello there'}))
//   }),
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// test('loads and displays greeting', async () => {
//   render(<Fetch url="/greeting" />)

//   fireEvent.click(screen.getByText('Load Greeting'))

//   await screen.findByRole('heading')

//   expect(screen.getByRole('heading')).toHaveTextContent('hello there')
//   expect(screen.getByRole('button')).toBeDisabled()
// })

// test('handles server error', async () => {
//   server.use(
//     rest.get('/greeting', (req, res, ctx) => {
//       return res(ctx.status(500))
//     }),
//   )

//   render(<Fetch url="/greeting" />)

//   fireEvent.click(screen.getByText('Load Greeting'))

//   await screen.findByRole('alert')

//   expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
//   expect(screen.getByRole('button')).not.toBeDisabled()
// })



// import './App.css';
// import {  Link } from "react-router-dom";

// export default function Testiranje() {
//     return (
//         <div>
//             Testiranje
//         </div>
//     );
// }




import {useState} from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default function Link({page, children}) {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      className={status}
      href={page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}

