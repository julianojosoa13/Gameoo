import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors';
import { Category } from '../models/types';


interface CategoriesProps {
    categories: Array<Category>,
    onCategoryPress: (cat:Category) => void
}

const Categories = ({ categories, onCategoryPress }:CategoriesProps) => {
    const [selectedCategory, setSelectedCategory] = useState({})
    const handleSelect = (item: Category) => {
        setSelectedCategory(item)
        onCategoryPress(item)
    }
    return (
        <FlatList
            horizontal
            data={categories}
            keyExtractor={item => String(item.id)}
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -24, marginTop: 24, zIndex: 10, height: 60 }}
            renderItem={({ item, index }) => {
                const selected = selectedCategory === item;
                const displayName = item?.name

                return (
                    <TouchableOpacity
                        onPress={() => handleSelect(item)}
                        style={[styles.itemContainer, selected ? styles.selectedItemContainer : {}, index === 0 ? { marginLeft: 24 } : {}, index === categories.length -1? {marginRight:24}: {}]}
                    >
                        <Text style={[styles.item, selected ? styles.selectedItem : {}]}>{displayName}</Text>
                    </TouchableOpacity>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        fontSize: 14,
        color: colors.WHITE,
        fontWeight: 'bold',
        padding: 8,
        paddingHorizontal: 12,
        textTransform: 'capitalize',
    },
    selectedItem: {
        color: colors.WHITE
    },
    itemContainer: {
        marginRight: 4,
        marginBottom: 14,
        height: 40
    },
    selectedItemContainer: {
        backgroundColor: colors.ORANGE,
        borderRadius: 10,
    }
});

export default React.memo(Categories);