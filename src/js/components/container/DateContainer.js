import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
   render() {
      return (
        <div class="section_title">{this.props.title}</div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <div className="job_item">
            <div className="date">{this.props.data.date}</div>
            <div className="item_txt">
               <div className="name">{this.props.data.name}</div>
               <div className="detail">
                  <div>
                     <span class="label">內容</span>
                     <span>{this.props.data.detail}</span>
                  </div>
                  <div>
                     <span class="label">技術</span>
                     <span>{this.props.data.tech}</span>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "name":"雲嘉南教學中心 網頁設計",
               "date":"2014",
               "detail": "網頁UI設計、靜態網頁切版",
               "tech": "Bootstrap 3、HTML、CSS、Illustrator、Photoshop"
            },
            {
               "name":"東東餐飲企業 網頁設計",
               "date":"2016",
               "detail": "靜態網頁切版、PHP網頁維護、簡單資料串接",
               "tech": "HTML、PHP、JavaScript、Illustrator、Photoshop、Bootstrap 3"
            },
            {
               "name":"米棋多媒體 網頁設計前端",
               "date":"2017",
               "detail": "網頁UI/UX設計、網頁切版、前端程式撰寫",
               "tech": "HTML、PHP、JavaScript、jQuery、Bootstrap3、GitHub、Trello、Sass、Webpack、Illustrator"
            },
         ],
         id:"工作經歷"
      }
   }
   render() {
      return (
         <div className="section">
            <Header title = {this.state.id} />
            <div className="max_width">
               <div className="section_inner">
                  {this.state.data.map((job_item, i) => 
                  <TableRow key = {i} data = {job_item} />)}
               </div>
            </div>
         </div>
      );
   }
}


export default App;
ReactDOM.render(<App/>, document.getElementById('root'));