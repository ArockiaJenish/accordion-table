import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JenishComponent } from './jenish.component';

describe('JenishComponent', () => {
  let component: JenishComponent;
  let fixture: ComponentFixture<JenishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JenishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JenishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
