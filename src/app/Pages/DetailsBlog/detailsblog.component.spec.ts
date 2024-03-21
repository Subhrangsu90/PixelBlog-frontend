import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsblogComponent } from './detailsblog.component';

describe('DetailsblogComponent', () => {
  let component: DetailsblogComponent;
  let fixture: ComponentFixture<DetailsblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsblogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
