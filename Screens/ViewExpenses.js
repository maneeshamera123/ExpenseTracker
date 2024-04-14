import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import supabase from '../Supabase/supabase';

export default function ViewExpenses() {
  const [allExpenses, setAllExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const { data, error } = await supabase.from('expenses').select('*');
      if (error) {
        throw error;
      }
      setAllExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error.message);
    }
  };

  const tableHead = ['Expense Name', 'Amount'];
  const textStyle = { margin: 6 }; 

  var totalexpense = 0;
  allExpenses.map((expense)=>{
    totalexpense = totalexpense + expense.Amount_Total
  });

  const tableData = allExpenses.map((expense) => [
    expense.Expense_Name,
    expense.Amount_Total.toString(),
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses</Text>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
        <Row data={tableHead} style={styles.head} textStyle={textStyle} />
        <Rows data={tableData} textStyle={textStyle} />
      </Table>
      <Text >Your total Expense is : {totalexpense}INR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
