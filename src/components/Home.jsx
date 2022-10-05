import './Home.css'
const Home = () => {
    return (
        <main>
        <div class="container">
              <div class="header__titulo">
                <h1>RICHARD SALINAS Tennis Tournament</h1>
              </div>
          <div class="row main__information">
            <div class="col-xl-4 col-md-6 col-sm-12 padding-0">
              <section>
                <h3>Tournament Info</h3>
                <ul>
                  <li>Date: May 29 - 30</li>
                  <li>Close Date May 25 at 11:59 pm</li>
                  <li>Please check website frequently for draws and updates.</li>
                  <li>Divisions: Boys and Girls Singles and Doubles</li>
                  <li>A Draw - Varsity</li>
                  <li>B Draw - Junior Varsity</li>
                  <li>C Draw - Freshman</li>
                  <li>Scoring:</li>
                  <li>
                    Singles - 2/3 sets, no ad. scoring, 10 pt. 3rd set breaker
                  </li>
                  <li>Consolation Draw - 8 game pro set, with ad.</li>
                  <li>Doubles - 8 game pro set, with ad.</li>
                </ul>
              </section>
            </div>
            <div class="col-xl-4 col-md-6 col-sm-12 padding-0">
              <h3>Pricing</h3>
              <section>
                <ul>
                  <li>One Event: $20</li>
                  <li>Two Events: $25</li>
                  <li>
                    Entry fee must be paid prior to the start of the tournament.
                  </li>
                  <li>Payment Options: Cash, Venmo, or CashApp</li>
                  <li>CashApp: $xxxxx956</li>
                  <li>Venmo: yyyyyy956</li>
                  <li>Deadline to receive a T-Shirt:</li>
                  <li>No shirt given to entries after cut off date.</li>
                </ul>
              </section>
            </div>
            <div class="col-xl-4 col-md-6 col-sm-12 padding-0">
              <h3>Awards</h3>
              <section>
                <ul>
                  <li>1st Place</li>
                  <li>2nd Place</li>
                  <li>3rd Place (singles only)</li>
                  <li>Consolation winner (singles only)</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Home;


    