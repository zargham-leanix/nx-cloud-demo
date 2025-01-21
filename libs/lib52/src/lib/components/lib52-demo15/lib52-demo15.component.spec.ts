import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo15Component } from './lib52-demo15.component';

describe('Lib52Demo15Component', () => {
  let component: Lib52Demo15Component;
  let fixture: ComponentFixture<Lib52Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
