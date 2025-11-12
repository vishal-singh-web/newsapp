import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
   constructor(){
      super();
      this.state = {
        articles: [],
        loading: true,
      }
      this.parseddata = null;
    }
    setDocumentTitle() {
      if (this.props.category && this.props.category.length > 0) {
        const categoryTitle = this.props.category[0].toUpperCase() + this.props.category.slice(1);
        document.title = categoryTitle + " - NewsMatrix";
      } else {
        document.title = "NewsMatrix";
      }
    }
    async componentDidUpdate(prevProps) {
        if (prevProps.category !== this.props.category) {
            // Reset page and pagination state if needed:
            this.setDocumentTitle();

            // Fetch news for the new category
            let url = `https://newsdata.io/api/1/latest?apikey=pub_15515146cf4948b8a50ebc7f7d00921a&category=${this.props.category}&size=9&language=en`;
            this.props.progress(25)
            this.setState({articles: []});
            let data = await fetch(url);
            this.props.progress(50)
            this.parseddata = await data.json();
            this.props.progress(70)
            this.setState({articles: this.parseddata.results, loading: false});
           this.props.progress(100)
        }
}
    async componentDidMount(){
        this.setDocumentTitle();
        let url = `https://newsdata.io/api/1/latest?apikey=pub_15515146cf4948b8a50ebc7f7d00921a&category=${this.props.category}&size=9&language=en`;
        this.props.progress(25)
        let data = await fetch(url)
        this.props.progress(40)
        this.parseddata = await data.json()
        this.props.progress(70)
        this.setState({articles: this.parseddata.results,
          loading: false
        })
        this.props.progress(100)
    }
    nextpages = async() =>{
        let url = `https://newsdata.io/api/1/latest?apikey=pub_15515146cf4948b8a50ebc7f7d00921a&category=${this.props.category}&size=9&language=en&page=${this.parseddata.nextPage}`
        let data = await fetch(url)
        let moreData = await data.json();
        this.setState({
          articles: [...this.state.articles, ...moreData.results],
        });
        this.parseddata = moreData;
    }
    capital=(text)=>{
      return text[0].toUpperCase()+text.slice(1)
    }
  render() {
    return (
      <div className='container my-5'>
        <h1 className="text-center" style={{marginTop:'70px'}}>NewsMatrix - Top {this.capital(this.props.category)==='Top'?'General':this.capital(this.props.category)} Headlines</h1>
        {this.state.loading && <Loading />}
        <div style={{ overflowX: 'hidden' }}>
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.nextpages}
          hasMore={!!(this.parseddata && this.parseddata.nextPage)}
          loader={<Loading />}
        >
        <div className="row">
          {this.state.articles.map((element)=>{
              return (
                <div className="col-md-4 my-3" key={element.article_id}>
                  <NewsItem title={element.title==null?'Title':element.title.slice(0,80)} 
                  desc={element.description==null?'description':element.description.slice(0,100)} 
                  imageUrl={element.image_url}
                  newsurl={element.source_url} author={element.creator?element.creator[0]:'Unknown'} 
                  date={new Date(element.pubDate).toGMTString()} source={element.source_name}/>
                </div>
              )
          })}
        </div>
        </InfiniteScroll>        
        </div>
        
      </div>
    )
  }
}
