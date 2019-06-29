let signature = process.env.signature; // gets secret key from env variable
//open your cmd(I use cmdr) and type " set signature='yoursecretkey' "
//you can always view the set value in cmd by typing "node" hit enter then type "process.env.signature"

module.exports = {
  'secret': signature
};

//ALWAYS STORE SECRET KEY IN ENV 
