import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'

const DeleteButton = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
        >
            <Text>
                삭제
            </Text>
        </TouchableOpacity>
    );
}

export default DeleteButton