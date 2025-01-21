import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo15Component } from './lib75-demo15.component';

describe('Lib75Demo15Component', () => {
  let component: Lib75Demo15Component;
  let fixture: ComponentFixture<Lib75Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
