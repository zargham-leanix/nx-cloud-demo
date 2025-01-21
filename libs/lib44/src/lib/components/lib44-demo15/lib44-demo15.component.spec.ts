import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo15Component } from './lib44-demo15.component';

describe('Lib44Demo15Component', () => {
  let component: Lib44Demo15Component;
  let fixture: ComponentFixture<Lib44Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
