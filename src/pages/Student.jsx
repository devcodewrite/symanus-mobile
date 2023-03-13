import React, { useState, FC, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { View, Text, Colors, TabController } from "react-native-ui-lib";
import { StudentAttendanceCard, BillsCard, FeesCard } from "../components";

export default function Student() {
  const renderAttendance = () => (
    <FlatList
      style={{ padding: 20, flex: 1, width: "100%", marginTop: 20 }}
      data={[{}, {}, {}]}
      renderItem={({ item, index }) => (
        <StudentAttendanceCard item={item} index={index} />
      )}
    />
  );
  const renderBills = () => (
    <FlatList
      style={{ padding: 20, flex: 1, width: "100%", marginTop: 20 }}
      data={[{}, {}, {}]}
      renderItem={({ item, index }) => <BillsCard item={item} index={index} />}
    />
  );
  const renderFees = () => (
    <FlatList
      style={{ padding: 20, flex: 1, width: "100%", marginTop: 20 }}
      data={[{}, {}, {}]}
      renderItem={({ item, index }) => <FeesCard item={item} index={index} />}
    />
  );
  const renderGuardian = () => {};
  return (
    <View flex>
      <View
        flex-1
        height={"100%"}
        width="100%"
        padding={20}
        bottom
        style={{ backgroundColor: Colors.green10 }}
      >
        <Text text60 white>
          Student Page
        </Text>
        <Text white>Student Page</Text>
        <Text white>Student Page</Text>
      </View>
      <View
        flex-2
        height={"100%"}
        width="100%"
        style={{ backgroundColor: Colors.white }}
      >
        <TabController
          items={[
            { label: "Attendance" },
            { label: "Bills" },
            { label: "Fees" },
            { label: "Guardian" },
          ]}
        >
          <TabController.TabBar enableShadows />
          <View flex>
            <TabController.TabPage index={0}>
              {renderAttendance()}
            </TabController.TabPage>
            <TabController.TabPage index={1} lazy>
              {renderBills()}
            </TabController.TabPage>
            <TabController.TabPage index={2} lazy>
              {renderFees()}
            </TabController.TabPage>
            <TabController.TabPage index={2} lazy>
              {renderGuardian()}
            </TabController.TabPage>
          </View>
        </TabController>
      </View>
    </View>
  );
}
