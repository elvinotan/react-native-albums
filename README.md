# React Native Album Project
Project setup https://github.com/elvinotan/vscode-react-eslint/blob/master/README.md</br>

# Dive Right in
a. Introduction - Course Roadmaps</br> 
    - Setup Enviroment</br>
b. Roadmap to the first App</br> 
    - Setup Dependecies berdasarkan Oprating System</br> 
    - Install ESLint</br> 
    - Genrate React Native App</br>

# Got OSX Go Here</br>
a. OSX Installation</br>
b. More on OSX Installation</br>
c. Running in the Simulator</br>

# Got Windows Go Here</br>
a. Windows Setup of React Native</br> 
    - Install Java JDK (1.8)</br> 
    - Node JS (For Genrate Bundle, Package Management)</br> 
    - Android Studio (SDK Management)</br>
b. Android Studio and React Native CLI Installation</br> 
    - Sediakan lokasi install Android Studio dan lokasi Android Sdk</br> 
    - Install React Native CLI npm install -g react-native-cli</br> 
    - Create React Native Project react-native init albums</br> 
c. Emulator Creation and System Variables</br> 
    - Download Android SDK - Buat Android Emulator </br> 
    - Setting Enviroment variable (JAVA_HOME, path, dll)</br> 
    - Jalankan Emulator react-native run-android</br> 
    - Doubel R to reaload simulator</br> 
    - Ctrl + M = Untuk membuka menu pada simulator</br> 
    
# ESLint Setup</br> 
 a. Download Visual Studio Code</br> 
 Install Plugin ESLint, Material Icon Theme, Prettier</br> 

# Onwards!</br> 
a.  Project Directory Walkthrough </br> 
Secara otomatis akan create Opration System dependencies android dan ios, ada juga node_modules, ini adalah module yang sifatnya global atau plugin yang app gunakan. Index.js starting point aplikasi kita.</br>
b. Getting Content on the Screen </br>
    - Setiap menampilkan data harus menggunakan component</br>
```
// Import a Libraray to help create component
import React from "react";
import ReactNative from "react-native";

// Create Component

// Render it to the device
```
c. React vs React Native </br> 
React : Cara kerja masing2 component, cara integrasi antar component</br>
ReactNative : Bridge ke mobile device, component dan rendernya</br>
React Native mengacu pada ES6, dimana tidak ada file yang bisa di access secara global, tetapi dengan menggunakan import.

d. Creating a Component with JSX</br>
JSX Html alike. Unutk membuat starting component kita akan membuat suatu function yang render jsx. Kenapa menggunakan layaknya html ? untuk memudahkan developer dalam pengambangan ui</br>
Babel (bebeljs.io) : Adalah tool/framework yang akan mengubah jsx menjadi pure javascript
```
<Text>Some Text</Text>

React.createElement(Text, null, "Some Text")
```
```
// Import a Libraray to help create component
import React from "react";
import ReactNative from "react-native";

// Create Component
const App = () => {
  return <Text>Some Text</Text>;
};

// Render it to the device
```
e. Registering a Component </br> 
```
ReactNative.AppRegistry.registerComponent("albums", () => App);
```
Untuk parameter pertama/appKey merupakan string yang nilainya harus sama dgn project name </br> 
Untuk paramter kedua harus return function atau ui </br> 
```
// Import a Libraray to help create component
import React from "react";
import ReactNative from "react-native";

// Create Component
const App = () => {
  return <Text>Some Text</Text>;
};

// Render it to the device
ReactNative.AppRegistry.registerComponent("albums", () => App);
```
f. Destructuring Imports</br>
```
// Import a Libraray to help create component
import React from "react";
import { Text, AppRegistry } from "react-native"; //Destructuring

// Create Component, persingkat coding
const App = () => <Text>Some Text</Text>;

// Render it to the device
AppRegistry.registerComponent("albums", () => App);
```
g. Application Outline</br>
![Outline](https://github.com/elvinotan/react-native-albums/blob/master/images/outline.png)</br>

h. The Header Component</br>
```
/src/component/header.js

// Import libraries for makeing a component
import React from "react";
import { Text } from "react-native";

// Make a component
const Header = () => {
  return <Text>Albums</Text>;
};

// Make the componenet avaiable to other parts of the app
export default Header;
```
Agar suatu component dapat di gunakan oleh component lain, maka kita harus meng-export agar komponen lain dapat meng-import. Default menandakan class utama</br>

i. Consuming File Exports</br>
Kita akan gunakan component Header yang baru saja kita buat</br>
```
// Import a Libraray to help create component
import React from "react";
import { Text, View, AppRegistry } from "react-native";
import Header from "./src/components/header";

// Create Component
const App = () => {
  return (
    <Header />
  );
};

// Render it to the device
AppRegistry.registerComponent("albums", () => App);
```
# Making Great Looking Apps</br>
a. Styling with React Native</br>
Cara Penerapan style pada react native</br>
```
/src/component/header.js

// Import libraries for makeing a component
import React from "react";
import { Text } from "react-native";

// Make a component
const Header = () => {
  const { textStyle } = styles;
  
  return <Text style={textStyle}>Albums</Text>;
};

const styles = {
    textStyle:{
        fontSize : 20
    }
}

// Make the componenet avaiable to other parts of the app
export default Header;
```
b. More on Styling Components</br>
Siapkan View yang akan meng-wrap component untuk reposition child component</br>
```
/src/component/header.js

// Import libraries for makeing a component
import React from "react";
import { Text, View } from "react-native";

// Make a component
const Header = () => {
  const { textStyle, viewStyle } = styles;
  
  return (
    <View style={viewStyle}>
        <Text style={textStyle}>Albums</Text>
    </View>
  );
};

const styles = {
    textStyle:{
        fontSize : 20
    },
    viewStyle : {
        backgroundColor: '#F8F8F8',
        
    }
}

// Make the componenet avaiable to other parts of the app
export default Header;
```
c. Introduction to Fexbox</br>
Flex box untuk re-position component (Flexbox is a system of positioning elements within the container)</br>
Secara default posisi component berada di left top container</br>
justifyContent : Vertical ('flex-start', 'center', 'flex-end')</br>
alignItems: Horizontal ('flex-start', 'center', 'flex-end')</br>

d. Header Styling</br>
Terapakan alignment pada View </br>
```
/src/component/header.js

// Import libraries for makeing a component
import React from "react";
import { Text, View } from "react-native";

// Make a component
const Header = () => {
  const { textStyle, viewStyle } = styles;
  
  return (
    <View style={viewStyle}>
        <Text style={textStyle}>Albums</Text>
    </View>
  );
};

const styles = {
    textStyle:{
        fontSize : 20
    },
    viewStyle : {
        backgroundColor: '#F8F8F8',
        justifyContent : 'cener',
        alignItems : 'center',
        height: 60,
        paddingTop : 15,
        shadowColor : '#000', // Warna shadow
        shadowOffset: { width : 0, height:2 }, // lebar shadow
        shadowOpacity : 0.2, // transparansi, nilai antara 0 - 1
        elevation:2,
        position:'relative'
    }
}

// Make the componenet avaiable to other parts of the app
export default Header;
```
e. Making the header Reuseable</br>
Perpindahan data lewat props adalah ide utama untuk buat reuseable component</br>
```
/src/component/header.js

// Import libraries for makeing a component
import React from "react";
import { Text, View } from "react-native";

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  
  return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
    textStyle:{
        fontSize : 20
    },
    viewStyle : {
        backgroundColor: '#F8F8F8',
        justifyContent : 'cener',
        alignItems : 'center',
        height: 60,
        paddingTop : 15,
        shadowColor : '#000', // Warna shadow
        shadowOffset: { width : 0, height:2 }, // lebar shadow
        shadowOpacity : 0.2, // transparansi, nilai antara 0 - 1
        elevation:2,
        position:'relative'
    }
}

// Make the componenet avaiable to other parts of the app
export default Header;


<Header headerText={'Albums'} />
```

# HTTP Requests with React Native</br>
a. Sourcing Album Data</br>
Sumber data : http://rallycoding.herokuapp.com/api/music_albums</br>
Yg akan kita buat </br>
AlbumList : Component atas yang mengambil data dan render data per group</br>
AlbumDetail : single screen group tampilan </br>

b. List Component Boilerplate
![Albumlist](https://github.com/elvinotan/react-native-albums/blob/master/images/albumlist.png)</br>
```
/src/component/AlbumList.js
import React from "react";
import { View, Text } from "react-native";

const AlbumList = () => {
  return (
    <View>
      <Text>Album List</Text>
    </View>
  );
};

export default AlbumList;

```

c. Class Based Components</br>
Component di bagi menjadi 2 : </br>
Functional Component : Hanya berfungsi sebagai tampilan saja, terima masukan dan menghasilkan tampilan view (Stateless / Dumb) </br>
Class Component : Terdapat logic, fetching data dan mengatur bagaiman component di tampilkan (stateful/smart)</br>
![Componen Type](https://github.com/elvinotan/react-native-albums/blob/master/images/componenttype.png)</br>
Ubah Function Component to Class Component</br>
```
import React, { Component } from "react";
import { View, Text } from "react-native";

class AlbumList extends Component {
  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
```
d. Lifecycle Methods</br>
React native memiliki byk lifecycle, beberapa di antaranya :</br>
componentWillMount : Sebelum render di panggil</br>
componentDidMount : Setelah render di panggil</br>
componentWillUnMount : Sebelum screen di replace dgn tamilan lain</br>
Untuk debug di react-native kita menggunakan console.log() yang akan muncul dalam mode debug ctrl+m Debug JS Remotely</br>
gunakan command debugger to add break point</br>

e. Quick Note On Axios</br>
Axios network framework for feching network resource</br>

f. Network Requests
Install Axios ```npm install --save axios```
```
src/component/AlbumList.js
import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";

class AlbumList extends Component {
  componentWillMount() {
    console.log("Calling component will mount");
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => console.log(response));
  }

  render() {
    return (
      <View>    
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
```
g. Component Level State</br>
Probelm dengan Asynch</br>
![Component Level](https://github.com/elvinotan/react-native-albums/blob/master/images/componenlevel.png)</br>

h. More on Component Level State</br>
State hanya berada pada class base component (Stateful) </br>
State = Javascript Object yang di tujukan untuk render tampilan</br>
setState({}) = Satu satunya cara untuk mengupdate isi dari state dan trigger render</br>
Beda State dan Props = Props adalah data untuk komunikasi antara compoenent parent dengan anaknya, State adalah catatan behaviour dari component tsb</br>

i. Rendering a List of Components</br>
Setiap render list harus ada key, sebagai pembeda data, masukan yang sifatnya uniqe, seperti PK</br>
Bila return 1 line tidak perlu pakai return, tp bila pake {} harus menggunakan return</br>
```
import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    console.log("Calling component will mount");
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map((album, i) => {
      return <Text key={i}>{album.title}</Text>;
    });
  }

  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
```
j. Displaying Individual Albums</br>
Cara menggunkan props dari parent ke anaknya</br>
```
/scr/component/AlbumDetail.js
import React from "react";
import { View, Text } from "react-native";

const AlbumDetail = ({ album }) => {
  const { title } = album;
  return <Text>{title}</Text>;
};

export default AlbumDetail;

```
```
  renderAlbums() {
    return this.state.albums.map((album, i) => {
      return <AlbumDetail key={album.title} album={album} />;
    });
  }
```

k. Fantastic Reusable Components </br>
Reuseable component The Card and The CardSection</br>
![Template](https://github.com/elvinotan/react-native-albums/blob/master/images/template.png)</br>

l. Styling a Card
```
import React from "react";
import { View } from "react-native";

const Card = () => {
  const { containerStyle } = styles;
    return <View  style={containerStyle}/>;
};

const styles = {
    containerStyle = {
        borderWidth:1, // kasih border
        borderRadius:2, // Setiap corner di buat round
        borderColor: '#DDD', // Gray border
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOffset:{width:0, height:2}, // height shadow
        shadowOpacity:0.1, // transparansi
        shadowRadius:2, // kaya borderRadius
        elevation:1, // Fly effect
        marginLeft:5, // Jarak kiri
        marginRight:5, // Jarak Kanan
        marginTop:10 // Jarak atas

    }
}

export default Card;
```

m. Passing Components as Props</br>
Setiap Content suatu tag di passing, dia akan masuk ke property yang bernama children</br>
```
const Card = ({ children }) => {
  const { containerStyle } = styles;
  return <View style={containerStyle}>{children}</View>;
};
```
```
  return (
    <Card>
      <Text>{title}</Text>
    </Card>
  );
```


n. Dividing Cards into Sections
```
import React from "react";
import { View } from "react-native";

const CardSection = ({ children }) => {
  const { containerStyle } = styles;
  return <View style={containerStyle}>{children}</View>;
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  }
};

export default CardSection;

```
```
return (
    <Card>
      <CardSection>
        <Text>{title}</Text>
      </CardSection>
    </Card>
  );
```  
# Handling Component Layout</br>
a. Mastering Layout with Flexbox</br>
Renca layout untuk header</br>
![header](https://github.com/elvinotan/react-native-albums/blob/master/images/header.png)</br>
space-around = space di sekitar component</br>
space-between = space di antara component</br>

b. Positioning of Elements on Mobile</br>
flexDirection : ('row', 'column') Orientasi untuk justifyContent (Seara default adalah column)</br>
justifyContent : ('flex-start', 'center','flex-end', 'space-around', 'space-between')</br>

c. More on Styling</br>
Implementing Style</br>

d. Images with React Native
```
 <Image style={tumbnailStyle} source={{ uri: thumbnail_image }} />
```
Image tidak memiliki size, oleh sebab itu di bagian style harus di beri width dan height
```
import React from "react";
import { View, Text, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  const { cardStyle, headerContentStyle, tumbnailStyle } = styles;
  return (
    <Card>
      <CardSection styles={cardStyle}>
        <View>
          <Image style={tumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  tumbnailStyle: {
    width: 50,
    height: 50
  },
  cardStyle: {
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  headerContentStyle: {
    justifyContent: "space-around",
    flexDirection: "column",
    paddingLeft: 10
  }
};

export default AlbumDetail;
```

e. Displaying Album Artwork</br>
Ubah/Tambah Style pada umumnya dan tambah image content</br>

f. Making Content Scrollable</br>
Untuk membuat suatu screen dapat scrollable kita harus menggunakan ScollView</BR>
```
render() {
return <ScrollView>{this.renderAlbums()}</ScrollView>;
}
```  

g. Handling User Input with Buttons
```
const Button = () => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text>Click Me</Text>
    </TouchableOpacity>
  );
};
```
TouchableHighlight : Highlight effect</br>
TouchableNativeFeedback: Native Feedback, base on os</br>
TouchableOpacity: Opacity effect</br>
TouchableWithoutFeedback: Tanpa feedback</br>

h. Styling of Buttons with UX Considerations</br>
Merapihkan tampilan button</br>

i. Responding to User Input</br>
Transfer linking event dari parent compnent to child component</br>
```
<Button onPress={() => console.log("press")} />
```
```
const Button = ({ onPress }) => {
  const { textStyle, buttonStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>Buy</Text>
    </TouchableOpacity>
  );
};
```

j. Linking Between Mobile Apps</br>
Linking : befungsi untk membukan user mobile current browser</br>
```
<Button onPress={() => Linking.openURL(url)} />
```

k. Setting Button Text by Props</br>
Passing Button label dari parent dgn menggunakan child properties
```
<Button onPress={() => Linking.openURL(url)}>Buy at Amazon</Button>
```
```
const Button = ({ onPress, children }) => {
  const { textStyle, buttonStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};
```

l. App Wrapup</br>

