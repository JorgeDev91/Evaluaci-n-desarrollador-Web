import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {EvaluationApp} from './EvaluationApp.jsx'
import { BrowserRouter } from "react-router-dom";

import './styless.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <EvaluationApp />
    </BrowserRouter>
  </StrictMode>,
)
