import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import supabase from '../Supabase/supabase';

export default function AddExpenseScreen({ navigation }) {
    const [expense, setExpense] = useState('');
    const [amount, setAmount] = useState('');

    const handleAddExpense = async () => {
        try {

            const parsedAmount = parseInt(amount);

            if (isNaN(parsedAmount)) {
                console.error('Invalid amount');
                return;
            }

            const { data, error } = await supabase
                .from('expenses')
                .insert([
                    { Expense_Name: expense, Amount_Total: parsedAmount },
                ]);

            if (error) {
                console.error('Error adding data:', error.message);
            } else {
                alert("Expenses Added")
                // console.log('Data added successfully:', data);
            }
        } catch (error) {
            console.error('Error adding data:', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Expense</Text>

            <TextInput
                style={styles.input}
                placeholder="Expense Name"
                value={expense}
                onChangeText={text => setExpense(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Amount"
                keyboardType="numeric"
                value={amount}
                onChangeText={text => setAmount(text)}
            />

            <TouchableOpacity style={styles.button} onPress={handleAddExpense}>
                <Text style={styles.buttonText}>Add Expense</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ViewExpenses')}
            >
                <Text style={styles.buttonText}>View Expenses</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
