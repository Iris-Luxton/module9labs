import logo from './logo.svg';
import './App.css';

import WelcomeClass from './components/WelcomeClass';
import WelcomeParam from './components/WelcomeParam';
import WelcomeParamChildren from './components/WelcomeParamChildren';
import GreetingFunc from './components/GreetingFunc';
import UserClass from './components/UserClass';
import UserFunction from './components/UserFunction';
import PropsDisplayer from './components/PropsDisplayer';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBinding from './components/EventBinding';
import Counter from './components/Counter';
import LifcycleA from './components/LifcycleA';
import Clock from './components/Clock';
import ClockWithLifeCycle from './components/ClockWithLifeCycle';
import Reservation from './components/Reservation';
import Form from './components/Form';
import CodeSplitting from './components/CodeSplitting'
import ErrorComponent from './components/ErrorComponent';
import ErrorComponentBoundary from './components/ErrorComponentBoundary';

import HookUseState from './components/HookUseState';
import HookCompLifeCycle from './components/HookCompLifeCycle';
import HookUseEffect from './components/HookUseEffect';
import HookContextProvider from './components/HookContextProvider';
import ContextProviderExample from './components/ContextProviderExample'
import RouteExample from './components/routing/RouteExample';
import SignIn from './components/MUI/SignIn';
import MUIButton from './components/MUI/MUIButton';
import HookUseRef from './components/HookUseRef';
import Parent from './components/Portal/PortalExmple';
import ParentPortal from './components/Portal/ParentPortal';
import CustomTextInput from './components/Ref/CustomTextInput';
import NameForm from './components/UncontrolledComp/NameForm';
import FileInput from './components/UncontrolledComp/FileInput';
import SetStateExample from './components/setState';

function App() {

  
  return (
    <div className="App">
      
      <PropsDisplayer welcomeNote="hello" name="Naveed" />
      
      <PropsDisplayer firstName={"mike"} lastName='Webb' age={22} address='hamilton' isworking={false} interests={['movies', 'games', 'dine outs']} />

      {
      /*
      slide 11
      <UserClass />
      <UserFunction />
      
      <GreetingFunc />  
      <UserClass />
      <UserFunction />


      // slide 20 props
        <PropsDisplayer myparameters={"hello"} />

      // slide 21
        <PropsDisplayer firstName={"mike"} lastName='Webb' age={22} address='hamilton' isworking={false} interests={['movies', 'games', 'dine outs']} />

      // slide 25-26
      <WelcomeClass />
      <GreetingFunc />   
      
      //slide 28 - 30
      <WelcomeParam FName="David" LName="alyas" />

      <WelcomeParamChildren FName="naveed" LName="alyas">
        <p>my testing paragraph in Welcome</p> <button>Add Me</button>
      </WelcomeParamChildren>

      
      <SetStateExample />

      <RouteExample />
      <NameForm />
      <Form />
      <RouteExample />
      <SignIn />
      <MUIButton />
      <HookUseRef />
      <Parent />
      <ParentPortal />
      <CustomTextInput />
      <NameForm />
      <FileInput />
      <NameForm />

      <HookContextProvider />
      <ContextProviderExample />

      <HookUseEffect />
      <HookUseState />
      <Counter />

      <ContextProviderExample />
      <HookCompLifeCycle />
      <HookUseEffect />

      <HookContextProvider />
      <ContextProviderExample />

      <Form />
      <ErrorComponentBoundary />

      <Reservation />
      <Form />
      <CodeSplitting />
      <ErrorComponent />


      <ErrorComponentBoundary />


      <ClockWithLifeCycle />
      <Clock date={new Date()} />
      <FunctionClick />
      <ClassClick />

      <Clock />
      <Counter />
      <EventBinding />

      <LifcycleA /> 

      
      
      

      

      
      
      */}
    </div>
  );
}

export default App;
