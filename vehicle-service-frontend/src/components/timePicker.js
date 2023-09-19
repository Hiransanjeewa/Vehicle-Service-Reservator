



function BootstrapTimePickerComponent() {
    return(
        <div className="form-group col-md-4">
        <label for="inputState">Select Time</label>
        <select id="inputState" className="form-control">
          <option selected>Time</option>
          <option>10 AM</option>
          <option>11 AM</option>
          <option>12 PM</option>
        </select>
      </div>

    );
}

export default BootstrapTimePickerComponent;