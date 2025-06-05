import { Children, useState } from 'react';
import './App.css';
import {
 PetsList 
} from './ui-components';

import {
 NavBarHeader 
} from './ui-components';

import {
 MarketingFooterBrand 
} from './ui-components';

import {
 AddPetForm 
} from './ui-components';

import {
 PetDetails 
} from './ui-components';

import { Button, withAuthenticator } from '@aws-amplify/ui-react';

// ストレージ機能のインポート
import { uploadData } from 'aws-amplify/storage'



function App(user, signOut) {
  async function saveFile () {
      try {
        const result = await uploadData({
          key: "test.txt",
          data: "hello"
        }).result;
        console.log('Succeeded: ', result);
      } catch (error) {
        console.log('Error : ', error);
      }
  }
  // ペット作成フォームのステート
  const [showForm, setShowForm] = useState(false);
  
  // ペットプロフィール表示のステート
  const [showDetails, setShowDetails] = useState(false);

  // pet取得用のステート
  const [pet, setPet] = useState();

  // pet更新用のステート
  const [updatePet, setUpdatePet] = useState();
  
  // pet更新フォームの各テキストフォームのステート
  const [name, setName] = useState("");
  const [age, setAge] = useState ("");
  const [breed, setBreed] = useState ("");
  const [about, setAbout] = useState ("");
  const [image, setImage] = useState ("");
  const [color, setColor] = useState ("");


  // 入力フォームのオーバーライド
  const formOverride = {
    // NameField:{
    //   value: name,
    //   onChange: (e) => setName(e.target.value),

      
    // },
    // AgeField : {
    //   value: age,
    //   onChange: (e) => setAge(e.target.value), 
    // },
    // BreedField: {
    //   value: breed,
    //   onChange: (e) => setBreed(e.target.value),
    // },
    // AboutField:{
    //   value: about,
    //   onChange: (e) =>setAbout(e.target.value),
    // },
    // ColorField:{
    //   value: color,
    //   onChange: (e) => setColor(e.target.value),
    // },
    // Image: {
    //   value : image,
    //   onChange: (e) => setImage(e.target.value),
    // },
    // UpdateButton : {
    //   isDisabled: !updatePet
    // },
    // SaveButton : {
    //   isDisabled: updatePet
    // },
    

    MyIcon : {
      style: {
        cursor: "pointer"
      },

      onClick: () => {
        saveFile()
        setShowForm(false)
      }
    }
  };

  // ペットプロフィールのオーバーライド
  const petDetailsOverride = {
    CloseIcon : {
      style: {
        cursor: "pointer"
      },

      onClick: () => {
        setShowDetails(false)
      }
    }
  };

  // NavBarのオーバーライド
  const NavBarOverrides = {
    Button:{
      onClick:signOut,
    },
        image : {
      src: user?.attributes?.profile
    },
    UserNameDisplay: {
      children: "こんにちは, 太郎さん",
    },
    "AddPet": {
      style: {
        cursor: "pointer"
      },
      onClick : () => {
        setShowForm(!showForm)
      },
    },
  };


  return (
    <div className="App">
      <NavBarHeader width={"100%"}
      overrides={NavBarOverrides}/>
      <header className="App-header">
        {/* showDetailsがtrueの場合に、PetDetailsを表示 */}
        {showDetails && (
                  <PetDetails pet={pet}
                  overrides={petDetailsOverride}
                  style={{
                  textAlign : "left",
                  margin: "1rem"
        }}/>
        )}

        {showForm && (
        < AddPetForm
        pet = {updatePet} 
        overrides={formOverride}
        style={{
          textAlign : "left",
          margin: "1rem"
        }}       
        />
        )}

        <PetsList 
        overrideItems= {({item, index}) => ({
          overrides: {
            "Breed": {
               color: item.breed === "Shiba" ? "red" : "black"},
            Button4856438 : {
              onClick: () => {
                setShowDetails(!showDetails);
                setPet(item);
              },
            },
            Button4856423 : {
              onClick: () => {
                if (!showForm) setShowForm(true);
                setUpdatePet(item);

                setName(item.name);
                setAge(item.age);
                setBreed(item.breed);
                setAbout(item.about);
                setColor(item.color);
                setImage(item.image);

              }
                        },
      
          }
        })}/>   
      </header>
      <MarketingFooterBrand width={"100%"}/>
    </div>
  );
}

export default withAuthenticator(App);
