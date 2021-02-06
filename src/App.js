import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './containers/home'
import StudentDetials from './containers/student-details'
import NotFound from './combonents/NotFound'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers'
import promiseMW from 'redux-promise'
import Addstudent from './combonents/add-student'
const createStoreWithMW = applyMiddleware(promiseMW)(createStore)
const App = () => {
    return (
        <Provider store={createStoreWithMW(reducers)}>
            <BrowserRouter>
                <div className="conatainer">
                    <div className="row">
                        <div className="col">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/addstudent" component={Addstudent} />
                                <Route path="/students/:id" component= {StudentDetials} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    )
}
export default App;

