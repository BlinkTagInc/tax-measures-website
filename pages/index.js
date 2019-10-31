import React, { useState } from 'react'
import Head from 'next/head'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faFileCsv, faQuestion, faSearch } from '@fortawesome/free-solid-svg-icons'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import AboutModal from '../components/about-modal'
import ArrowButton from '../components/arrow-button'
import Footer from '../components/footer'
import PieChart from '../components/pie-chart'
import '../css/index.scss'

const Home = () => {
  const [aboutModalShow, setAboutModalShow] = useState(false);

  const [data, setData] = useState();

  const [loading, setLoading] = useState(false);


  const handleSearch = () => {
    setLoading(true);
    
    setTimeout(() => {
      setData({
        pieChart: [
          {
            key: 'unallocated',
            value: 9,
            title: 'Unallocated'
          },
          {
            key: 'bike',
            value: 6,
            title: 'Bike'
          },
          {
            key: 'bus',
            value: 3,
            title: 'Bus'
          },
          {
            key: 'road',
            value: 16,
            title: 'Road'
          }
        ],
        moneyChart: [
          {
            key: 'corporate-tax',
            value: 9,
            title: 'Corporate Tax'
          },
          {
            key: 'interest',
            value: 6,
            title: 'Interest'
          },
          {
            key: 'road',
            value: 3,
            title: 'Road'
          },
          {
            key: 'tax',
            value: 16,
            title: 'Tax'
          },
          {
            key: 'donations',
            value: 16,
            title: 'Donations'
          }
        ]
      })
      setLoading(false)
    }, 2000)
  }

  return (
    <div>
      <Head>
        <title>2016 Measure B</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container-fluid'>
        <div className='row mb-3'>
          <div className='col-md-3 bg-light-blue text-white pt-3 pb-3'>
            <h1><img src="/images/logo.png" alt="2016 Measure B" className="logo" /></h1>
            <h3 className='mt-3'>Sample Queries</h3>
            <p><i>Click on one of the questions below to change the filters to the settings which answer that question.</i></p>
            <div>
              <ArrowButton>How many funds were received in 2018?</ArrowButton>
              <ArrowButton>How many funds were spent in 2018?</ArrowButton>
              <ArrowButton>How many dollars have been spent on bikes?</ArrowButton>
              <ArrowButton>How many funds are currently unallocated?</ArrowButton>
              <ArrowButton>Projected vs. Actuals</ArrowButton>
            </div>
          </div>

          <div className='col'>
            <div className='row header-bar mb-3'>
              <div className='col-md'>
                <div className='header-stat'>
                  <div className='header-stat-value'>$117</div>
                  <div className='header-stat-unit'>million</div>
                  <div className='header-stat-label'>collected since 2018</div>
                </div>
              </div>
              <div className='col-md'>
                <div className='header-stat'>
                  <div className='header-stat-value'>$155k</div>
                  <div className='header-stat-unit'></div>
                  <div className='header-stat-label'>interest earned</div>
                </div>
              </div>
              <div className='col-md'>
                <div className='header-stat'>
                  <div className='header-stat-value'>$89</div>
                  <div className='header-stat-unit'>million</div>
                  <div className='header-stat-label'>allocated in 2017</div>
                </div>
              </div>
              <div className='col-md-2'>
                <div
                  className='question-button float-right'
                  onClick={() => setAboutModalShow(true)}
                >
                  <span className="fa-layers fa-fw">
                    <FontAwesomeIcon icon={faCircle} color="#51BAEC" />
                    <FontAwesomeIcon icon={faQuestion} color="white" transform="shrink-6" />
                  </span>
                </div>
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col'>
                <FilterControl handleSearch={handleSearch} />
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='card mb-3'>
                  <div className='card-body'>
                    <h3>See how much Measure B has collected to suport transportation, and how that money has been spent.</h3>
                    <p>This website provides a gateway to understanding Measure B spending. Use the filters above to pick the timeframe, categories, and grantees you're interested in examining the allocations, payments, and projects for. Below you'll see the data you requested visualized. On the "Money" mode, you'll see a cross section of the funding that fits your filter. If you switch to the "Map" tab, you'll see the relevant projects geographically. Below is a text list of those projects, as well as a tool to export that list of projects in a spreadsheet form.</p>
                  </div>
                </div>
              </div>
            </div>
            <ChartSection loading={loading} data={data} />
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <div className='card bg-blue text-white mb-3'>
              <div className='card-body'>
                <h3>Projects List</h3>
                <p>Below is a list of the projects correlation with the filter settings above</p>
                <Table responsive size="sm" className='project-table'>
                  <thead>
                    <tr>
                      <th>Project Name</th>
                      <th>Start</th>
                      <th>End</th>
                      <th>Project Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a href="">BART Phase II Program</a></td>
                      <td>6/22</td>
                      <td>8/24</td>
                      <td><i>pending</i></td>
                    </tr>
                    <tr>
                      <td><a href="">Bike &amp; Ped Program</a></td>
                      <td>4/21</td>
                      <td>7/24</td>
                      <td><i>completed</i></td>
                    </tr>
                  </tbody>
                </Table>
                <Button className="btn-primary btn-white-border float-right">
                  Download CSV <FontAwesomeIcon icon={faFileCsv} className='ml-2' />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <AboutModal
        show={aboutModalShow}
        onHide={() => setAboutModalShow(false)}
      />

      <style jsx>{`
      `}</style>
    </div>
  )
}

const FilterControl = props => {
  return (
    <div className='card bg-blue p-2'>
      <div className='row'>
        <div className='col-md-3'>
          <Form.Control as="select">
            <option value="">Transaction type</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </div>
        <div className='col-md-3'>
          <Form.Control as="select">
            <option value="">Grantee</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </div>
        <div className='col-md-6'>
          <Form.Control type="text" placeholder="Project Name" />
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col-md-3'>
          <Form.Control as="select">
            <option value="">Category</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </div>
        <div className='col-md-3'>
          <DayPickerInput
            inputProps={{className: 'form-control', placeholder: 'Start Date'}}
          />
        </div>
        <div className='col-md-3'>
          <DayPickerInput
            inputProps={{className: 'form-control', placeholder: 'End Date'}}
          />
        </div>
        <div className='col-md-3'>
          <Button
            className="btn-secondary"
            onClick={props.handleSearch}
            block
          >
            <FontAwesomeIcon icon={faSearch} className='mr-2' /> Search
          </Button>
        </div>
      </div>
      <style jsx global>{`
          .DayPickerInput {
            width: 100%;
          }
        `}</style>
    </div>
  )
}

const ChartSection = props => {
  if (props.loading) {
    return (
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <div className='card-body card-loading text-center'>
              <Spinner animation="border" role="status" size="xl" variant="primary" className='mb-4'>
                <span className="sr-only">Loading...</span>
              </Spinner>
              <h1>Loading...</h1>
            </div>
          </div>
        </div>
        <style jsx>{`
          .card-loading {
            min-height: 400px;
            padding-top: 80px;
          }
        `}</style>
      </div>
    )
  }

  if (!props.data) {
    return null
  }

  return (
    <div className='row'>
      <div className='col'>
        <div className='card'>
          <div className='card-body card-graph'>
            <div className='row'>
              <div className='col-md-6'>
                <ButtonGroup aria-label="Chart Type" size="sm">
                  <Button variant="primary">Pie</Button>
                  <Button variant="secondary">Bar</Button>
                </ButtonGroup>

                <PieChart data={props.data.pieChart} />
              </div>
              <div className='col-md-6'>
                <ButtonGroup aria-label="Display Type" size="sm" className="float-right">
                  <Button variant="primary">Money</Button>
                  <Button variant="secondary">Map</Button>
                </ButtonGroup>

                <PieChart data={props.data.moneyChart} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card-graph {
          min-height: 400px;
        }
      `}</style>
    </div>
  )
}

export default Home
