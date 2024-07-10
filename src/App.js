import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import item from "./components/Item";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'стул серый.jpg',
          desc: 'kakaka',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол обеденный',
          img: 'стол обеденный.jpg',
          desc: 'kakaka',
          category: 'table',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Кресло для отдыха',
          img: 'кресло для отдыха.jpg',
          desc: 'kakaka',
          category: 'armchairs',
          price: '109.99'
        },
        {
          id: 4,
          title: 'Диван большой',
          img: 'диван большой.jpg',
          desc: 'kakaka',
          category: 'sofa',
          price: '249.99'
        },
        {
          id: 5,
          title: 'Стул обыкновенный',
          img: 'стул обыкновенный.jpg',
          desc: 'kakaka',
          category: 'chairs',
          price: '29.99'
        },
        {
          id: 6,
          title: 'Светильник напольный',
          img: 'светильник напольный.jpg',
          desc: 'kakaka',
          category: 'luminaire',
          price: '129.99'
        },
        {
          id: 7,
          title: 'Кресло мягкое',
          img: 'кресло мягкое.jpg',
          desc: 'kakaka',
          category: 'armchairs',
          price: '149.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onShowItem={this.onShowItem} onAdd={this.addToOrder}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
