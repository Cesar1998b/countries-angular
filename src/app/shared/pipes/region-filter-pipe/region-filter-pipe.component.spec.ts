import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionFilterPipeComponent } from './region-filter-pipe.component';

describe('RegionFilterPipeComponent', () => {
  let component: RegionFilterPipeComponent;
  let fixture: ComponentFixture<RegionFilterPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionFilterPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionFilterPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
