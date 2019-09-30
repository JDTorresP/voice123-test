import React, { Component } from 'react';
import Header from './basic/Header.jsx';
import SearchBar from './basic/SearchBar.jsx';
import VoiceActors from './complex/VoiceActors.jsx';
import Paginator from './basic/Paginator.jsx';
import '../../styles/main/SearchUI.css';
import axios from 'axios';

export default class SearchUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWords:"conversational",
            currentPage:1,
            data:{}
        };
        this.changeSearch= this.changeSearch.bind(this);
        this.changePage= this.changePage.bind(this);
        this.bindApiData= this.bindApiData.bind(this);
      }
    componentDidMount(){
       this.bindApiData();
    }
     filterData(data){
        let arr = data.providers.map((i)=>{
            let u ={};
            u.username =i.user.username;
            u.name=i.user.name;
            u.img=i.user.picture_large;
            u.summary=i.summary;
            return u
        });
        return arr;
    }
    bindApiData(){
        let URL = "https://api.sandbox.voice123.com/providers/search/?service=voice_over&keywords=";
        axios.get(URL + this.state.keyWords+"&page="+this.state.currentPage)
        .then(response => {
            this.setState({data:this.filterData(response.data)});
        })
        .catch((error) => {
            console.log('error ' + error);
        });
    }
    changeSearch(text){
        this.setState({
            keyWords:encodeURIComponent(text.trim())
        })
    }
    changePage(page){
        if(page==="<"){
            if(this.state.currentPage!==1){
              this.setState({
                currentPage:this.state.currentPage-1
              })
              this.bindApiData();
            }
          }else if(page===">"){
            if(this.state.currentPage!==100){
              this.setState({
                currentPage:this.state.currentPage+1
              });
              this.bindApiData();
            }
          }else{
            this.setState({
              currentPage:(parseInt(page)+1)
            });
            this.bindApiData();
          }
      
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="search_bar">
                     <SearchBar changeSearch={this.changeSearch} bindApi={this.bindApiData}/>
                </div>
                <div className="actors_cards">
                    <VoiceActors data={this.state.data}/>
                </div>
                <div className="paginator">
                    <Paginator changePage={this.changePage}/>
                </div>
            </div>
        )
    }
}
