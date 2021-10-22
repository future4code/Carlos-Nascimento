import React, { Component } from "react"
import jobList from "./data/jobs.json"
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { ListContainer} from "./style";
import Filters from "./components/Filters";

export class App extends Component {

   state = {
      jobs: jobList,
      title: "",
      minPrice: "",
      maxPrice: "",
      sortingParameter: "",
      order: 1
   }

   updateTitle = (e) =>{
      this.setState({
         title: e.target.value
      })
   }

   updateMinPrice = (e) => {
      this.setState({
         minPrice: e.target.value
      })
   }
   updateMaxPrice = (e) => {
      this.setState({
         maxPrice: e.target.value
      })
   }
   updateSortingParameter = (e) => {
      this.setState({
         sortingParameter: e.target.value
      })
   }

   updateOrder = (e) =>{
      this.setState({
         order: e.target.value
      })
   }
   

   render() {
      return <>
         <Header />
         <Filters
            title={this.state.title}
            sortingParameter={this.sortingParameter}
            minPrice={this.state.minPrice}
            maxPrice={this.state.maxPrice}
            order={this.state.order}
            updateTitle={this.updateTitle}
            updateMinPrice={this.updateMinPrice}
            updateMaxPrice = { this.updateMaxPrice}
            updateSortingParameter={this.state.sortingParameter}
            updateOrder = {this.updateOrder}
         
         ></Filters>
         
         <ListContainer>
            {this.state.jobs
            .filter( job => {
               return job.title.toLowerCase().includes(this.state.title.toLowerCase())
            })
            .filter( job =>{
               return this.state.minPrice === "" || job.price >= this.state.minPrice 
            })
            .filter( job =>{
               return this.state.maxPrice === "" || job.price <= this.state.maxPrice 
            })
            .sort( (currentJob, nextJob) =>{

               switch (this.state.sortingParameter) {
                  case "price":
                     return this.state.order * (currentJob.price - nextJob.price)
                  case "dueDate":
                     return this.state.order * (new Date(currentJob.dueDate).getTime() - new Date(nextJob.dueDate).getTime())
                  default:
                     return this.state.order * currentJob.title.localeCompare(nextJob.title)
               }
            })
            .map(job => {
               return <Card key={job.id} job={job} />
            })}
         </ListContainer>
      </>
   }
}