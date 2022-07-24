import { Component } from '@angular/core';
import { domesticDebt, externalDebt, totalDebt } from './debt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elections';

  // population
  public populationGrowth = {
    data: [{
      x: ['1963', '1969', '1979', '1989', '1999', '2009', '2019'],
      y: [8.929, 10.91, 15.8, 22.94, 31.1, 40.9, 53.77], type: 'bar'
    }],
    layout: { autosize: true, title: 'Kenya population (1963-2019) Based on Census' },
  };

  //gender
  public genderComposition = {
    data: [{
      values: [50.88, 49.12],
      labels: ["Men", "Women"], type: 'pie'
    }],
    layout: { autosize: true, title: 'Registered Voters by Gender 2022' },
  };

  //youth vs rest
  public youthVsRest = {
    data: [{
      values: [39.84, 60.16],
      labels: ["Youth", "Over 34 years"], type: 'pie', hole: .4,
    }],
    layout: { autosize: true, title: 'IEBC Registered Youth (18-34 years old) (2022)' },
  };

  // demographics
  public registeredVoters = {
    data: [
      {
        x: ['2012', '2017', '2022'],
        y: ['0', '25323059', '29566678'], type: 'bar',
        name: 'People Issued with ID Cards'
      }, {
        x: ['2012', '2017', '2022'],
        y: ['18000000', '25212056', '27857598'], type: 'bar',
        name: 'Eligible Voters'
      }, {
        x: ['2012', '2017', '2022'],
        y: ['14352545', '19611423', '22120458'], type: 'bar',
        name: 'Registered Voters'
      }],
    layout: { autosize: true, title: 'IEBC Registered Final Registered Voters Count over the years', barmode: 'group' },
  };

  //youth vs rest
  public households = {
    data: [{
      value: 12000000,
      type: 'indicator',
    }],
    layout: { autosize: true, title: 'House holds (2022)' },
  };
  //youth vs rest
  public population = {
    data: [{
      value: 53770000,
      type: 'indicator',
    }],
    layout: { autosize: true, title: 'Kenya Population (2020)' },
  };

  // population
  public debt = {
    data: [domesticDebt, externalDebt, totalDebt],
    layout: { autosize: true, title: 'public Debt (Ksh Million)' },
  };


  constructor() {
  }
}
