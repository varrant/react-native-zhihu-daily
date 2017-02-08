import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity as Touch,
    ScrollView,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Toolbar from './box';

const globalColor = 'rgba(30, 165, 255, 1)';

// ## 菜单视图
export default class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            themes: [
                { id: 13, name: '日常心理学', star: false },
                { id: 12, name: '用户推荐日报', star: false },
                { id: 3, name: '电影日报', star: false },
                { id: 11, name: '不许无聊', star: false },
                { id: 4, name: '设计日报', star: false },
                { id: 5, name: '大公司日报', star: false },
                { id: 6, name: '财经日报', star: false },
                { id: 10, name: '互联网安全', star: false },
                { id: 2, name: '开始游戏', star: false },
                { id: 7, name: '音乐日报', star: false },
                { id: 9, name: '动漫日报', star: false },
                { id: 8, name: '体育日报', star: false },
            ],
        };
    }

    static defaultProps = {
        onSelectChanng: null,
    };

    static propTypes = {
        onSelectChanng: PropTypes.func.isRequired,
    };

    render() {
        return (
            <ScrollView
                style={styles.contanter}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyboardDismissMode='on-drag'
                >

                <Toolbar
                    style={styles.toolbar}
                    onUser={null}
                    onStar={null}
                    onDownload={null}
                    />

                <Touch
                    activeOpacity={1}
                    style={styles.home}
                    onPress={(event) => {
                        this.props.onSelectChanng(event, -1, '首页');
                    } }
                    >
                    <Ionicons
                        name="md-home"
                        size={20}
                        color={globalColor}
                        />
                    <Text style={styles.homeText}>首页</Text>
                </Touch>

                <View style={styles.theme}>{
                    this.state.themes.map((item, index) => (
                        <Touch
                            style={theme.item}
                            activeOpacity={1}
                            key={`theme-${index}`}
                            onPress={(event) => {
                                this.props.onSelectChanng(event, item.id, item.name);
                            } }
                            >
                            <Text style={theme.text}>{item.name}</Text>
                            <Ionicons
                                style={theme.icon}
                                name="md-add"
                                color="#ccc"
                                size={18}
                                />
                        </Touch>
                    ))
                }
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contanter: {
        flex: 1,
        backgroundColor: globalColor,
    },
    toolbar: {
        height: 110,
        backgroundColor: globalColor,
        padding: 10,
    },
    home: {
        height: 45,
        backgroundColor: '#f4f4f4',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    homeText: {
        color: globalColor,
        marginLeft: 20,
        fontSize: 16,
    },
    theme: {
        padding: 10,
        backgroundColor: '#fff',
    },
});


const theme = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    text: {
        flex: 1,
        flexDirection: 'row',
        color: '#222',
        fontSize: 15,
    },
    icon: {
        paddingRight: 20,
    }
});