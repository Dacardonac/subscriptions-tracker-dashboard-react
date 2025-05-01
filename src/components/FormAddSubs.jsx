import './FormAddSubs.css';

const FormAddSubs = () => {
  return (
    <div className="add-subscription">
      <h3>Add Subscription</h3>
      <form className="form-add-subs" action="">
        <p>Services</p>
        <select name="" id="">
          <option value="">-- Chose --</option>
          <option value="netflix">Netflix</option>
          <option value="disneyPlus">Disney Plus</option>
          <option value="hboMax">HBO Max</option>
          <option value="primeVideo">Prime Video</option>
          <option value="youtubePremium">Youtube Premium</option>
          <option value="spotify">Spotify</option>
          <option value="appleTv">Apple TV</option>
          <option value="crunchyroll">Crunchyroll</option>
          <option value="starPlus">Star+</option>
          {/* <!-- Add more options as needed --> */}
        </select>
        <p>Amount</p>
        <input type="number" placeholder="$20" />
        <button type="submit" value={'Add'}>Add</button>
      </form>
    </div>
  );
}

export default FormAddSubs;