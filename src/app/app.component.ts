import { Component } from '@angular/core';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reportView';

  table0 = data.tables[0].teamColumns;



}

export interface Car {
    vin;
    year;
    brand;
    color;
}

export const data = {
	"tables": [{
		"title": "Release 1.5 INTGRA",
		"total": 45,
		"date": 1542682800000,
		"teamColumns": [{
			"title": "dev",
			"state": {
				"New": 3,
				"Done": 0,
				"Total": 8,
				"Rejected": 2,
				"Reopen": 2,
				"Pending": 0,
				"Open": 0,
				"Fixed": 1
			}
		}, {
			"title": "functional",
			"state": {
				"New": 0,
				"Done": 10,
				"Total": 13,
				"Rejected": 3,
				"Reopen": 0,
				"Pending": 0,
				"Open": 0,
				"Fixed": 0
			}
		}, {
			"title": "testing",
			"state": {
				"New": 0,
				"Done": 0,
				"Total": 14,
				"Rejected": 6,
				"Reopen": 0,
				"Pending": 0,
				"Open": 0,
				"Fixed": 8
			}
		}, {
			"title": "ICBC",
			"state": {
				"New": 6,
				"Done": 0,
				"Total": 10,
				"Rejected": 0,
				"Reopen": 3,
				"Pending": 0,
				"Open": 1,
				"Fixed": 0
			}
		}]
	}]
}
