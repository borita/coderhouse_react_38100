const RegisterTournaments = () => {
  return (
    <form>
                <div class="row">
                  <div class="form-group col-md-4">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" />
                  </div>
                </div>
                <div class="form-group col-md-4">
                  <label for="lastname">Lastname</label>
                  <input type="text" class="form-control" id="lastname" />
                </div>
                <div class="form-group col-md-4">
                  <label for="dob">Dob</label>
                  <input type="date" class="form-control" id="dob" />
                </div>
                <div class="form-group col-md-4">
                  <label for="phone">Phone Number</label>
                  <input type="tel" class="form-control" id="phone" />
                </div>
                <div class="form-group col-md-4">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="name.email"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="sex">Sex</label>
                  <select class="form-control" name="sex" id="sex">
                    <option value="Sex">Male</option>
                    <option value="sex">Female</option>
                  </select>
                </div>
                <div> &nbsp; </div>
                <div class="row">
                  <div class="form-check form-group mx-3 col-lg-1 col-md-2 col-sm-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="singles"
                    />
                    <label class="form-check-label" for="singles">
                      Singles
                    </label>
                  </div>

                  <div class="form-group mx-3 col-lg-1 col-md-2 col-sm-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="doubles"
                      checked
                    />
                    <label class="form-check-label" for="partner">
                      Doubles
                    </label>
                    <label for="partner">Partner</label>
                    <input type="text" id="partner" />
                  </div>
                </div>

                <button type="submit" class="btn btn-primary m-auto">
                  Register
                </button>
                <div>&nbsp;</div>
              </form>

  )
}
  

export default RegisterTournaments;              