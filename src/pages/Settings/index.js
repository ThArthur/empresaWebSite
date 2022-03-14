import { useState, useContext } from 'react';
import { Container, Content, SettingsInfo} from './style';

import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';

import avatar from '../../assets/avatar.png'
import Header from "../../components/Header";
import TittlePage from "../../components/TittlePage";

import { FiUpload } from 'react-icons/fi';

export default function Settings() {
  const { user, setUser, storageUser } = useContext(AuthContext);

  const [nome, setNome] = useState(user && user.nome)
  const [email, setEmail] = useState(user && user.email)
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl)
  const [imageAvatar, setImageAvatar] = useState(null)

  function handleFile(e){
    if(e.target.files[0]){
      const image = e.target.files[0];

      if(image.type === 'image/jpeg' || image.type === 'image/png'){
        setImageAvatar(image);
        setAvatarUrl(URL.createObjectURL(e.target.files[0]));
      }else{
        alert('Envie uma imagem do tipo PNG ou JPEG');
        setImageAvatar(null);
        return null;
      }
    }
  }

  async function handleUpload(){
   
    const currentUid = user.uid;

    const uploadTask = await firebase.storage().ref(`images/${currentUid}/${imageAvatar.name}`).put(imageAvatar).then(async () => {
      console.log('Foto enviada');

      await firebase.storage().ref(`images/${currentUid}`).child(imageAvatar.name).getDownloadURL().then(async (url) => {
        let urlFoto = url;

        await firebase.firestore().collection('users').doc(user.uid).update({
          avatarUrl: urlFoto,
          nome: nome
        }).then(() => {
          let data = {
            ...user,
            avatarUrl: urlFoto,
            nome
          };
          setUser(data);
          storageUser(data);
        })
      })
    })
  }

  async function handleSave(e){
    e.preventDefault();

    if(imageAvatar === null && nome !== ''){
      await firebase.firestore().collection('users').doc(user.uid).update({
        nome: nome
      }).then(() => {
        let data = {
          ...user,
          nome: nome
        };
        setUser(data);
        storageUser(data);
      })
    }else if(nome !== '' && imageAvatar !== null){
      handleUpload();
    }
  }


  return (
      <Container>
        <Header/>
        <Content>
          <TittlePage nomeTitulo="Perfil"/>
          <SettingsInfo onSubmit={handleSave}>
            <label>  
              <span>
                <FiUpload size={25} color="#FFF" />
              </span>

              <input type="file" accept="image/*" onChange={handleFile}/>
              {
                avatarUrl == null ? 
                <img src={avatar} width="250" height="250"/> :
                <img src={avatarUrl} width="250" height="250"/>
              }
            </label>
            <div>
              <span>Nome</span>
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
              <span>Email</span>
              <input type="text" value={email} disabled={true}/>
            </div>
            <button type='submit'>Salvar</button>
          </SettingsInfo>
        </Content>
      </Container>
      
  );
}