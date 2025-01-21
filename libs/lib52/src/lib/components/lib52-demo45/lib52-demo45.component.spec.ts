import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo45Component } from './lib52-demo45.component';

describe('Lib52Demo45Component', () => {
  let component: Lib52Demo45Component;
  let fixture: ComponentFixture<Lib52Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
