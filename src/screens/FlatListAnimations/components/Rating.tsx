import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStar } from '@fortawesome/free-regular-svg-icons/faStar';
import { IMovie } from '..';

export type Props = {
  rating: IMovie['rating'];
};

const Rating: React.FC<Props> = ({ rating }) => {
  const filledStars = Math.floor(rating / 2);
  const maxStars = Array(5 - filledStars).fill(faStar);
  const r = [...Array(filledStars).fill(faStarSolid), ...maxStars];

  return (
    <View style={styles.rating}>
      <Text style={styles.ratingNumber}>{rating}</Text>
      {r.map((type, index) => {
        return (
          <FontAwesomeIcon key={index} icon={type} size={12} color="tomato" />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  ratingNumber: { marginRight: 4, fontFamily: 'Menlo', fontSize: 14 },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },
});

export default Rating;
