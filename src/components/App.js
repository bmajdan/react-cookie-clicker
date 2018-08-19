import React, { Component } from 'react';
import Achievements from './Achievements/Achievements';
import ClickBoard from './ClickBoard/ClickBoard';
import Header from './Header/Header';
import Shop from './Shop/Shop';
import Footer from './Footer/Footer';
import {NotificationTop, NotificationLeft} from './Notification/Notification';

import _SETTINGS from '../constants/settings';
import { checkSettingsImport, buyItem, levelCalculation, chanceCalculation, achievementsChecker, encode, decode } from './libs';

class App extends Component {
  constructor(){
    super();

    if(localStorage.getItem('cookieClicker'))
      if(checkSettingsImport(_SETTINGS, JSON.parse(decode(localStorage.getItem('cookieClicker')))))
        this.state = JSON.parse(decode(localStorage.getItem('cookieClicker')));
      else
        this.state = _SETTINGS
    else
      this.state = _SETTINGS

    this.notification_top_show = false;
    this.start = 0
    this.clicks = 0
  }

  gold_time = () => {
    
    let temp_per_sec_click = this.state.cookie_per_second_value;
    clearInterval(this.cookie_per_second_timer);
    this.setState({ 
      cookie_per_second_value: this.state.cookie_gold_time_value,
      cookie_gold_time_active: true,
      notification_left_show: true,
      notification_left_text: 'Golden Time!'
    });

    let timeleft = this.state.cookie_gold_time_duration * 10;

    this.cookie_gold_time_timer = setInterval(() => {
      this.cookieClick(this.state.cookie_gold_time_value / 10, false);
      timeleft--;

      if(timeleft <= 0){
        clearInterval(this.cookie_gold_time_timer);
        this.cookie_per_second_timer = setInterval(this.cookiePerSecondClick, 100);
        this.setState({ 
          cookie_per_second_value: temp_per_sec_click,
          cookie_gold_time_active: false,
          notification_left_show: false
        });
      }
        
    }, 100)
  }

  //Component update state;
  cookieClick = (number = this.state.cookie_click_value, player_click = true) => {

    let add_value = number;
    let checkAdd = 0;

    if(player_click){
      
      if (!this.start || 
        (this.state.cookie_player_click_frequency < 4 && (this.lastClick - this.start) / 1000 >= 5)){
          this.start = this.lastClick = new Date();
          this.clicks = 0
        }
      
      if(this.clicks >= 6){
        this.setState({
          cookie_player_click_frequency: ++this.clicks / (new Date() - this.start) * 1000
        });
  
        this.lastClick = new Date()
      }else{
        ++this.clicks
      }

      if(chanceCalculation(this.state.cookie_gold_click_chance)){
        add_value = this.state.cookie_gold_click_value;

        this.setState(prevState => ({
          cookie_gold_click_counter: prevState.cookie_gold_click_counter + 1,
          notification_left_show: true,
          notification_left_text: 'Golden Click!'
        }))

        setTimeout(() => {
          this.setState({
            notification_left_show: false,
            notification_left_text: ''
          }
        )}, 2000);
      }

      if(chanceCalculation(this.state.cookie_gold_time_chance)){
        if(!this.state.cookie_gold_time_active){
          this.setState(prevState => ({
            cookie_gold_time_counter: prevState.cookie_gold_time_counter + 1
          }))

          this.gold_time();
        }

      }

      checkAdd = 1;
    }

    this.setState(prevState => ({ 
      cookie_amount: prevState.cookie_amount + add_value,
      cookie_player_click_counter: prevState.cookie_player_click_counter + checkAdd
    }), () => {

      let free_achievements = achievementsChecker(this.state.achievements);
      let toAdd = {}
      for(let free of free_achievements){
        if(this.state[free.type] >= free.value)
          toAdd = {name: free.name}
      }

      if(toAdd.name){
        this.setState({
          notification_top_show: true,
          notification_top_text: 'New Achievement get!'
        })
        
        setTimeout(() => {
          this.setState({
            notification_top_show: false,
            notification_top_text: ''
          })
        }, 3000);
      }

      this.setState(prevState => ({
        player_level: levelCalculation(this.state.cookie_amount) > prevState.player_level ? levelCalculation(this.state.cookie_amount): prevState.player_level,
        achievements: [...prevState.achievements, toAdd]
      }), () => {
        localStorage.setItem('cookieClicker', encode(JSON.stringify(this.state)));
      })

    })
  };

  cookiePerSecondClick = () => {
    if(this.state.items.length > 0){
      this.cookieClick(this.state.cookie_per_second_value / 10, false)
    }
  }

  cookieBuyItem = (item, price, products) => {
    const changeState = buyItem(item, price, this.state.items)

    this.setState(prevState => ({ 
      items: changeState.item,
      cookie_amount: prevState.cookie_amount - changeState.price,
      cookie_per_second_value: changeState.per_sec_multi,
      items_buy_counter: prevState.items_buy_counter + 1,
      products: products
    }), () => {
      localStorage.setItem('cookieClicker', encode(JSON.stringify(this.state)))
    });
  }

  resetGame = () => {
    clearInterval(this.cookie_per_second_timer);
    localStorage.clear();
    window.location.reload();
  }

  //Component Lifecycle
  componentDidMount() {
    this.cookie_per_second_timer = setInterval(this.cookiePerSecondClick, 100);
    this.setState({
      notification_top_show: false,
      notification_left_show: false,
      notification_top_text: '',
      notification_left_text: ''
    })
  }

  componentWillUnmount() {
    clearInterval(this.cookie_per_second_timer);
    clearInterval(this.cookie_gold_time_timer);
  }

  render() {

    const {
      cookie_amount, 
      player_name, 
      player_level, 
      items, 
      products,
      cookie_per_second_value, 
      achievements,
      notification_top_text,
      notification_top_show,
      notification_left_text,
      notification_left_show
    } = this.state;

    document.title = parseInt(cookie_amount, 10).toLocaleString() + " cookies | Cookie Clicker";

    return (
      <div className="container">

        <NotificationTop 
          notification_text={notification_top_text} 
          notification_show={notification_top_show}
        />

        <NotificationLeft 
          notification_text={notification_left_text} 
          notification_show={notification_left_show}
        />

        <Header 
          player_name = {player_name}
          player_level = {player_level}
          cookie_amount = {cookie_amount}
          cookie_per_second_value = {cookie_per_second_value}
        />

        <Shop 
          cookie_amount = {cookie_amount}
          items = {items}
          onClick = {this.cookieBuyItem}
          products = {products}
        />

        <ClickBoard 
          onClick = {this.cookieClick}
        />
        
        <Achievements achievements = { achievements } />

        <Footer onClick={this.resetGame}/>
      </div>
    );
  }
}

export default App;
