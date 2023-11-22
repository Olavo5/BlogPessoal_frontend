import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './assets/contexts/AuthContext';

import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import FormularioTema from './components/temas/formularioTema/FormularioTema';
import Footer from './components/footer/Footer'
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens';
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/temas' element={<ListaTemas />} />
            <Route path='/cadastroTema' element={<FormularioTema />} />
            <Route path='/editarTema/:id' element={<FormularioTema />} />
            <Route path='/deletarTema/:id' element={<DeletarTema />} />
            <Route path='/postagens' element={<ListaPostagens />} />
            <Route path='/cadastroPostagem' element={<FormularioPostagem />} />
            <Route path='/editarPostagem/:id' element={<FormularioPostagem />} />
            <Route path='/deletarPostagem/:id' element={<DeletarPostagem />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ AuthProvider>
  );
}

export default App