import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Routes from '../routes'

import './App.css'

const App = () => (
  <div className='App'>
    <Router>
      <Header />
      <Switch>
        <Route path='/category/:categoryId-:slug' component={Breadcrumb} />
        <Route path='/products/:productId-:slug' component={Breadcrumb} />
      </Switch>
      <Content>
        <Switch>
          <Routes />
        </Switch>
      </Content>
      <Footer />
    </Router>
  </div>
)

export default App
