import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StatusBar, Dimensions, StyleSheet, Modal, Alert, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import header from '../assests/images/header.png';
import filterOne from '../assests/icon/filterOne.png';
import backButton from '../assests/icon/backButton.png';
import Group from '../assests/icon/HomeNew/Group.png';
import crossX from '../assests/icon/crossX.png';
import indicator from '../assests/icon/indicator.png';
import like from '../assests/icon/like.png';
import dislike from '../assests/icon/dislike.png';
import messageOne from '../assests/icon/ChatNew/messageOne.png';
import peopleNew from '../assests/icon/peopleNew.png';
import star from '../assests/icon/star.png';
import content from '../assests//images/content.png';
import ShowScreen from './ShowScreen';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



const LcateShow = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const navigateNext = () => {
        navigation.navigate("ShowScreen")
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#F3F3F3',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <View style={{
                // height: windowHeight / 1.7,
                width: windowWidth,
                backgroundColor: '#fff',
                alignItems: 'center',
            }}>
                <View style={{
                    height: windowHeight / 12,
                    width: windowWidth - 20,
                    backgroundColor: "#fff",
                    alignItems: 'center',
                    // alignContent:'space-between',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignSelf: 'center'
                }}>
                    <TouchableOpacity style={{
                        alignSelf: 'flex-start',
                        backgroundColor: '#fff',
                        margin: 5
                    }}>
                        <Image source={backButton} style={{
                            backgroundColor: '#fff',
                            height: 52,
                            width: 52,
                        }}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                    <View style={{
                        // alignSelf:'flex-start',
                        backgroundColor: '#fff',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                        }}>Discover</Text>
                        <Text style={{
                            fontSize: 12,
                        }}>Chichgo.||</Text>
                    </View>
                    <TouchableOpacity style={{
                        alignSelf: 'flex-start',
                        backgroundColor: '#fff',
                        margin: 5,
                    }}
                        onPress={() => {
                            setModalVisible(true);
                        }}
                    >
                        <Image source={filterOne} style={{
                            backgroundColor: '#fff',
                            height: 52,
                            width: 52,
                        }}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>

                </View>
                {/* <TouchableOpacity style={{
                    height: windowHeight / 20,
                    width: windowWidth - 200,
                    backgroundColor: 'lime',
                }}
                    onPress={navigateNext}
                >
                    <Text>LocateShow FIRST HERE</Text>

                </TouchableOpacity> */}
                <View style={{
                    marginTop: -50,
                }}>
                    <ShowScreen />
                    {/* <Image
                    source={content}
                    /> */}
                </View>
            </View>
            <View style={{
                // height: windowHeight / 2.5,
                width: windowWidth - 20,
                // backgroundColor: 'green'
            }}>

                <View style={{
                    // height: windowHeight / 3.5,
                    // width: windowWidth - 40,
                    // backgroundColor: 'green',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    // marginTop:150,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        // width: windowWidth - 50,
                        height: windowHeight / 9.2,
                        // backgroundColor: "yellow",
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                    }}>
                        <TouchableOpacity>
                            <Image style={{
                                height: 100,
                                width: 100,
                                // backgroundColor: 'gray',
                            }} source={dislike}
                                resizeMode={'contain'}

                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignSelf: 'center',
                            // height:50,
                            // width:windowWidth-300,
                            // backgroundColor:'lightgray'
                        }}>
                            <Image style={{
                                height: 130,
                                width: 130,
                                // backgroundColor: 'gray',
                            }} source={like}
                            // resizeMode={'cover'}

                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{
                                height: 100,
                                width: 100,
                                // backgroundColor: 'lime',
                            }} source={star}
                                resizeMode={'center'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    backgroundColor: '#F3F3F3',
                    alignSelf: 'center',
                    width: windowWidth - 20,
                    height: 100,
                    // flex:1,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity style={{
                        // backgroundColor:'skyblue',

                        height: 50,
                        width: 50,
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopColor: "#E94057",
                        borderTopWidth: 2,
                    }}>
                        <Image source={
                            Group
                        } style={{

                            height: 24,
                            width: 24,
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{

                        height: 50,
                        width: 50,
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Image source={
                            indicator
                        } style={{
                            // backgroundColor:'red',
                            height: 24,
                            width: 24,
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        // backgroundColor:'skyblue',

                        height: 50,
                        width: 50,
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Image source={
                            messageOne
                        } style={{
                            // backgroundColor:'red',
                            height: 24,
                            width: 24,
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        // backgroundColor:'yellow',
                        height: 50,
                        width: 50,
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Image source={
                            peopleNew
                        } style={{
                            // backgroundColor:'#fff',
                            height: 44,
                            width: 44,
                        }} />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={{
                        height: windowHeight,
                        backgroundColor: "#fff",
                        width: windowWidth,
                        marginTop: 350,
                        borderRadius: 20,
                        borderColor: "#fff",
                        borderWidth: 2,
                        elevation: 5,
                    }}>
                        <View style={{
                            backgroundColor: 'black',
                            height: 20,
                            width: 30,
                            borderRadius: 10,
                            alignSelf: 'center',
                            marginTop: -10,
                        }}>
                            <View style={{
                                height: 16,
                                width: 20,
                                borderRadius: 25,
                                alignSelf: 'center',
                                backgroundColor: '#fff',
                                // marginTop:-5

                            }

                            }></View>
                        </View>
                            <View style={{
                                height:windowHeight,
                                // backgroundColor:'green'
                            }}>
                                <View style={{
                                    flexDirection:'row',
                                    width:windowWidth-30,
                                    // backgroundColor:'yellow',
                                    justifyContent:'space-between',
                                    alignSelf:'center',
                                }}>
                                    <View/>
                                    <Text style={{
                                        marginLeft:40,
                                        fontWeight:'bold',
                                        fontSize:20
                                    }}>Filters</Text>
                                    <TouchableOpacity>
                                    <Text  style={{
                                        // marginLeft:30,
                                        fontWeight:'normal',
                                        fontSize:16,
                                        textAlign:'center',
                                        textAlignVertical:'center',
                                        color:'#E94057',
                                    }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                    >Clear</Text>
                                    </TouchableOpacity>
                                   
                                   
                                </View>
                                <View style={{
                                    width:windowWidth-30,
                                    backgroundColor:'#fff',
                                    alignSelf:'center',
                                }}>
                                        <Text style={{
                                            fontWeight:'normal',
                                            fontSize:16,
                                        }}>Interested In</Text>
                                    </View>
                                    <View style={{
                                    width:windowWidth-30,
                                    backgroundColor:'#fff',
                                    alignSelf:'center',
                                    height:windowHeight/10,
                                    alignItems:'center',
                                    justifyContent:'center',
                                }}>
                                       <View style={{
                                    width:windowWidth-60,
                                    backgroundColor:'green',
                                    alignSelf:'center',
                                    height:windowHeight/16,
                                    borderRadius:16,
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                }}> 
                                <View style={{
                                    backgroundColor:'#E94057',
                                    flex:1,
                                    justifyContent:'center',
                                    borderTopLeftRadius:16,
                                    borderBottomLeftRadius:16,
                                }}>
                                    <Text style={{
                                        textAlign:'center',
                                        textAlignVertical:'center',
                                        color:'#fff',
                                        fontWeight:'normal',
                                        fontSize:16,
                                    }}>Girls</Text>
                                </View>
                                <View style={{
                                    backgroundColor:'#fff',
                                    flex:1,
                                    justifyContent:'center',
                                    borderWidth:.5,
                                    borderColor:'lightgray',
                                }}>
                                    <Text style={{
                                        textAlign:'center',
                                        textAlignVertical:'center',
                                        color:'black',
                                        fontWeight:'normal',
                                        fontSize:16,
                                    }}>Boys</Text>
                                </View>
                                <View style={{
                                    backgroundColor:'#fff',
                                    flex:1,
                                    justifyContent:'center',
                                    borderTopRightRadius:16,
                                    borderBottomRightRadius:16,
                                    borderWidth:.5,
                                    borderColor:'lightgray',
                                }}>
                                    <Text style={{
                                        textAlign:'center',
                                        textAlignVertical:'center',
                                        color:'black',
                                        fontWeight:'normal',
                                        fontSize:16,
                                    }}>Both</Text>
                                </View>
                                       </View>

                                     
                                    </View>
                                    <View style={{
                                    width:windowWidth-30,
                                    backgroundColor:'#fff',
                                    alignSelf:'center',
                                    height:windowHeight/10,
                                    alignItems:'center',
                                    justifyContent:'center',
                                }}>
                                    <View style={{
                                        borderWidth:1,
                                        width:windowWidth-60,
                                        height:windowHeight/16,
                                        borderColor:'lightgray',
                                        borderRadius:12
                                    }}>
                                    <Text style={{
                                        fontSize:8,
                                        top:-7,
                                        left:10,
                                        backgroundColor:"#fff",
                                        alignSelf:'flex-start',
                                        color:'lightgray',
                                    }}>Location</Text>

                                    <View style={{
                                        flexDirection:'row',
                                        justifyContent:'space-between',
                                    }}>
                                        <Text style={{
                                            marginLeft:25,
                                            color:'black',
                                        }}>Chicogo, USA</Text>
                                        <Text style={{
                                            marginRight:25,
                                            color:'#E94057',
                                        }}>{">"}</Text>

                                    </View>

                                    </View>
                                    
                                    </View>
                                    <View style={{
                                        // borderWidth:1,
                                        width:windowWidth-60,
                                        height:windowHeight/8,
                                        // borderColor:'lightgray',
                                        // borderRadius:12,
                                        alignSelf:'center',
                                        backgroundColor:'#fff',
                                        justifyContent:'space-around',
                                    }}>
                                   

                                    <View style={{
                                        flexDirection:'row',
                                        justifyContent:'space-between',
                                        // backgroundColor:'green',
                                    }}>
                                        <Text style={{
                                            // marginLeft:25,
                                            color:'black',
                                            fontWeight:'normal',
                                            fontSize:16,
                                        }}>Distance</Text>
                                        <Text style={{
                                            // marginRight:25,
                                            color:'lightgray',
                                        }}>{"40 Km"}</Text>

                                    </View>
                                    <View style={{
                                        flexDirection:'row',
                                        justifyContent:'space-between',
                                        alignItems:'center',
                                        // backgroundColor:'green',
                                    }}>
                                      <View style={{
                                          height:5,
                                          flex:2,
                                          backgroundColor:'#E94057',
                                        //   width:windowWidth-200,
                                      }}/>
                                       <View style={{
                                          height:20,
                                          backgroundColor:'#E94057',
                                          width:20,
                                          borderRadius:10,
                                      }}/>
                                        <View style={{
                                          height:5,
                                          backgroundColor:'lightgray',
                                          flex:2,
                                        //   width:windowWidth-300,
                                      }}/>

                                    </View>
                                    
                                    </View>
                                   
                                    <View style={{
                                        // borderWidth:1,
                                        width:windowWidth-60,
                                        height:windowHeight/8,
                                        // borderColor:'lightgray',
                                        // borderRadius:12,
                                        alignSelf:'center',
                                        backgroundColor:'#fff',
                                        justifyContent:'space-around',
                                    }}>
                                   

                                    <View style={{
                                        flexDirection:'row',
                                        justifyContent:'space-between',
                                        // backgroundColor:'green',
                                    }}>
                                        <Text style={{
                                            // marginLeft:25,
                                            color:'black',
                                            fontWeight:'normal',
                                            fontSize:16,
                                        }}>Age</Text>
                                        <Text style={{
                                            // marginRight:25,
                                            color:'lightgray',
                                        }}>{"20 - 28"}</Text>

                                    </View>
                                    <View style={{
                                        flexDirection:'row',
                                        justifyContent:'space-between',
                                        alignItems:'center',
                                        // backgroundColor:'green',
                                    }}>
                                         <View style={{
                                          height:5,
                                          backgroundColor:'lightgray',
                                          flex:1,
                                        //   width:windowWidth-300,
                                      }}/>
                                          <View style={{
                                          height:20,
                                          backgroundColor:'#E94057',
                                          width:20,
                                          borderRadius:10,
                                      }}/>
                                      <View style={{
                                          height:5,
                                          flex:1,
                                          backgroundColor:'#E94057',
                                        //   width:windowWidth-200,
                                      }}/>
                                       <View style={{
                                          height:20,
                                          backgroundColor:'#E94057',
                                          width:20,
                                          borderRadius:10,
                                      }}/>
                                        <View style={{
                                          height:5,
                                          backgroundColor:'lightgray',
                                          flex:2,
                                        //   width:windowWidth-300,
                                      }}/>

                                    </View>
                                 
                                   </View>
                                   <TouchableOpacity style={{
                                        backgroundColor:"#E94057",
                                        height:windowHeight/12,
                                        width:windowWidth-70,
                                        alignSelf:'center',
                                        justifyContent:'center',
                                        borderRadius:20,
                                        marginVertical:30,
                                    }} 
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                    >
                                        <Text style={{
                                            textAlign:'center',
                                            textAlignVertical:'center',
                                            color:"#fff",
                                            fontSize:20,
                                        }}>Continue</Text>
                                    </TouchableOpacity>
                            </View>
                       
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default LcateShow;
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
