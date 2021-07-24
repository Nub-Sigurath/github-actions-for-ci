// Return a random integer between a min and max value.
 function RandomInteger(min,  max)
 {
    scale = uint.MaxValue;
    while (scale == uint.MaxValue)
    {
      // Get four random bytes.
      byte[GetBytes] = new byte[4];
        Rand.GetBytes(four_bytes);
    }

    // Add min to the scaled difference between max and min.
    return (min + (max - min) *
        (scale / 2*uint.MaxValue));
 }
// The random number provider.
var Rand = RNGCryptoServiceProvider(byte[4], byte[0] )
 new RNGCryptoServiceProvider();
