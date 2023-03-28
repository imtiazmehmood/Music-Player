import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Animated,
  Pressable,
} from "react-native";
import Sound from "react-native-sound";
// import Filter from 'components/Filter';
import axios from "axios";
import { styles, EQUALIZER_HEIGHTS } from "./styles";

const RadioScreen = () => {
  let sound = null;
  const radioAnimationRef = useRef(new Animated.Value(0)).current;
  const interpolatedValues = EQUALIZER_HEIGHTS.map((height) =>
    radioAnimationRef.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [height - 10, height + 10, height - 10],
    })
  );

  const [stations, setStattions] = useState([]);
  const [country, setCountry] = useState(null);
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchStations = async () => {
    const url = "https://de1.api.radio-browser.info/json/stations";
    const params = {
      limit: 20,
      order: "clickcount",
      hidebroken: true,
      ...(country && { country }),
      ...(artist && { name: artist }),
    };
    try {
      axios.get(url, { params }).then((res) => {
        setStattions(res.data);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStations();
  }, [country, artist]);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(radioAnimationRef, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(radioAnimationRef, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  // const handleFilterUpdate = (filterName, value) => {
  //   if (filterName === 'country') {
  //     setCountry(value);
  //   } else if (filterName === 'artist') {
  //     setArtist(value);
  //   }
  // };

  const playStream = (streamUrl) => {
    if (sound !== null) {
      sound.stop();
      sound.release();
      sound = null;
      radioAnimationRef.stopAnimation();
    }

    sound = new Sound(streamUrl.url_resolved, "", (error) => {
      if (error) {
        console.log("Error loading sound: ", error);
        return;
      }
      sound.play();
      startAnimation();
    });
  };

  const stopPlaying = () => {
    sound.stop();
    sound.release();
    sound = null;
    radioAnimationRef.stopAnimation();
  };

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "flex-end", height: 50, paddingTop: 10 }}>
        <Pressable onPress={stopPlaying}>
          <Image
            style={{ width: 30, height: 30, resizeMode: "contain" }}
            source={require("assets/icons/offinactive.png")}
          />
        </Pressable>
      </View>
      <View style={styles.animationContainer}>
        {interpolatedValues.map((value, index) => (
          <Animated.View
            key={index}
            style={[styles.bar, { height: value, marginLeft: 15 }]}
          />
        ))}
      </View>
      {/* <View style={styles.filters}>
        <Filter
          name="Country"
          options={['United States', 'Canada', 'United Kingdom']}
          onSelect={handleFilterUpdate}
        />
        <Filter
          name="Artist"
          options={['The Beatles', 'Bob Dylan', 'Elvis Presley']}
          onSelect={handleFilterUpdate}
        />
      </View> */}
      {loading ? (
        <ActivityIndicator
          size={"large"}
          color={"#000"}
          style={{ marginTop: 20 }}
        />
      ) : (
        <ScrollView showVerticalScrollIndicator={false}>
          {stations.length > 0
            ? stations.map((station, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => playStream(station)}
                  style={styles.station}
                >
                  <Text style={styles.stationName}>{station.name}</Text>
                  <Text style={styles.stationURL}>{station.url}</Text>
                </TouchableOpacity>
              ))
            : null}
        </ScrollView>
      )}
    </View>
  );
};

export default RadioScreen;
