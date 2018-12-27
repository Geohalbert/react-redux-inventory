import React from 'react';
import {Input} from "semantic-ui-react";

class Search extends React.Component {
   constructor() {
       super();
       this.state = {
           searchText: '',
           searchResults: []
       }
   }

   onChange(e) {
     if(e.target.value.length>7){
       // this.setState({searchText: e.target.value});
       this.setState({searchText: e.target.value});
     }
   }

   getResults() {
       calltodb(searchText).then(e => {
           this.setState({searchResults: e.value})
       });
   }

   render() {
       return (
           <div>
               <SearchBar />
               <SearchResults />
           </div>
       )
   }
}
