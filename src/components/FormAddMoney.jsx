const FormAddMoney = () => {
  return (
    <form className="form-add-money">
      <div className="form-group">
        <label htmlFor="amount">Add an Amount:</label>
        <input type="number" id="amount" name="amount" placeholder="e.g. 10.00" />
      </div>
      <button type="submit" className="form-submit-btn">Submit</button>
    </form>
  );
}

export default FormAddMoney;
