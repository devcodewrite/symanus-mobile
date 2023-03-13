import React, { useState, FC, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import {
  View,
  Text,
  Colors,
  TabController,
  FloatingButton,
} from "react-native-ui-lib";
import { StudentIdCard, AttendanceCard } from "../components";

export default function Class() {
  const renderClassList = () => (
    <FlatList
      style={{ padding: 20, flex: 1, width: "100%", marginTop: 20 }}
      data={[{}, {}]}
      renderItem={({ item, index }) => (
        <StudentIdCard item={item} index={index} />
      )}
    />
  );

  const renderAttendance = () => (
    <FlatList
      style={{ padding: 20, flex: 1, width: "100%", marginTop: 20 }}
      data={[{}, {}]}
      renderItem={({ item, index }) => (
        <AttendanceCard item={item} index={index} />
      )}
    />
  );
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
          Class Page
        </Text>
        <Text white>Class List</Text>
        <Text white>Details Page</Text>
      </View>
      <View
        flex-2
        height={"100%"}
        width="100%"
        style={{ backgroundColor: Colors.white }}
      >
        <TabController
          items={[{ label: "Class List" }, { label: "Attendance" }]}
        >
          <TabController.TabBar enableShadows />
          <View flex>
            <TabController.TabPage index={0}>
              {renderClassList()}
            </TabController.TabPage>
            <TabController.TabPage index={1} lazy>
              {renderAttendance()}
            </TabController.TabPage>
          </View>
        </TabController>
      </View>
      <FloatingButton
        visible={true}
        button={{
          label: "Take Class Attendance",
          backgroundColor: Colors.green20,
          onPress: () => console.log("approved"),
        }}
      />
    </View>
  );
}
