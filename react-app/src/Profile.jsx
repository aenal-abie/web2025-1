const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
  address: "Bagu"
};

const nama = "Budi"

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <h2>{user.address}</h2>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}