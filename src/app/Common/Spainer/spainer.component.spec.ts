import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpainerComponent } from './spainer.component';

describe('SpainerComponent', () => {
  let component: SpainerComponent;
  let fixture: ComponentFixture<SpainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
