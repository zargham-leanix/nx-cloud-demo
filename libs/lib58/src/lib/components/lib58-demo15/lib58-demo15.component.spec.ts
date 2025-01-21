import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo15Component } from './lib58-demo15.component';

describe('Lib58Demo15Component', () => {
  let component: Lib58Demo15Component;
  let fixture: ComponentFixture<Lib58Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
