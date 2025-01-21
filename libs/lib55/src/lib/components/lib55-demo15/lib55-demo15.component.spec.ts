import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo15Component } from './lib55-demo15.component';

describe('Lib55Demo15Component', () => {
  let component: Lib55Demo15Component;
  let fixture: ComponentFixture<Lib55Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
