import {Link} from 'react-router-dom';
import { Button } from '@mui/material';
export default function SearchAppBar()
{
  return(
    <nav class="navbar  sticky-top navbar-expand-lg navbar-light " style={{backgroundColor:"#e2d8b2"}} id="navbar-bt">
  <div class="container-fluid navbar-bt">
    <a class="navbar-brand" ><h3 className="brand" style={{marginRight:"5px"}}>Premium Furnitures!</h3></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href='/a'>AboutUs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Brands</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='/c'>Contact Us</a>
        </li>
       
      </ul>
      <form class="d-flex">
       
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-dark" type="submit">Search</button>
        <Button  href="/login" style={{marginLeft:'10px',backgroundColor:"black",color:"white"}} >Login</Button>
      </form>
    </div>
  </div>
</nav>
  )
}