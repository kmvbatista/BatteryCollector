import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import { bold } from 'colorette';
 
export default class ddExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Usuário', 'Descartes'],
      widthArr: [200, 120]
    }
  }
 
  render() {
    const state = this.state;
    //const tableData = this.props.dataComming.map((el) => [el.name, el.points]);
    const tableData = [['Kennedy', 19], ['Gabriel', 13], ['Gabriel', 13], ['Gabriel', 13], ['Gabriel', 13], ['Gabriel', 13], ['Gabriel', 13], ['Gabriel', 13], ['Gabriel', 13], ['Gabriel', 13], ['Gabriel', 13], ['Gabriel', 13], ['Gabriel', 13], ['Gabriel', 13]];
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 2, borderColor: '#000'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.textHeader}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 2, borderColor: '#000'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#000'}]}
                      textStyle={styles.textRow}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {alignItems: "center", justifyContent: "center" },
  header: { height: 50, backgroundColor: '#000' },
  textHeader: { textAlign: 'center', fontWeight: "bold", color: '#fff', fontFamily: 'fantasy', fontSize: 19 },
  textRow: { textAlign: 'center', fontWeight: '900', color: '#fff', fontSize: 16 },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: 'rgba(21, 219, 10, 1)' }
});