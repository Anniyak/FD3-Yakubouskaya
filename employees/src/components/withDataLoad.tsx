import React from 'react';
// api
import {getData} from '../scripts/serverApi.ts'
// Константы - методы & операции
import { POST, DELETE, PUT, UPDATE, REMOVE, SERVER_URL_PROJECTS } from '../scripts/constants.ts'

class StateType{
    dataReady?:boolean;
    loadedData?:object[];
}

let withDataLoad = (propName, serverUrl) => Component => {

    class ComponentWithDataLoad extends React.Component {

        componentDidMount() {
          this.loadData();
        }
      
        state:StateType = {
          dataReady: false, // готовы ли данные
        };
      
        fetchError = errorMessage => {
          console.error(errorMessage);
        };
      
        fetchSuccess = loadedData => {
          this.setState({
            dataReady:true,
            loadedData:loadedData,
          });
        };
      
        loadData = async () => {          
            let data=await getData("",serverUrl );           
            this.fetchSuccess(data);
        };
      
        render() {
      
          if ( !this.state.dataReady )
            return <div>загрузка данных...</div>;
          
          let compProps={
            ...this.props,
            [propName]:this.state.loadedData
          };
          /*
          это то же самое что и:
          let compProps={...this.props};
          compProps[propName]=this.state.loadedData;
          */
          return <Component {...compProps} /> ;
        }
      
      }

      return ComponentWithDataLoad;

}

export { withDataLoad };