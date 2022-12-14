import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { BrowserRouter } from "react-router-dom";

import App from './App';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);

//import { Link } from "react-router-dom";
/* <Link to="/invoices">Invoices</Link> |{" "}
<Link to="/expenses">Expenses</Link> 
*/
/*
    <Route path="invoices" element={<Invoices />}>
      <Route path=":invoiceId" element={<Invoice />} />
    </Route>
*/