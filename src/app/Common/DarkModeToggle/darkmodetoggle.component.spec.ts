import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkmodetoggleComponent } from './darkmodetoggle.component';

describe('DarkmodetoggleComponent', () => {
  let component: DarkmodetoggleComponent;
  let fixture: ComponentFixture<DarkmodetoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkmodetoggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarkmodetoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
