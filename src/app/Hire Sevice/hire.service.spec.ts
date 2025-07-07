import { TestBed } from "@angular/core/testing";

import { HireService } from "./hire.service";

describe("HireService", () => {
  let service: HireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HireService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
