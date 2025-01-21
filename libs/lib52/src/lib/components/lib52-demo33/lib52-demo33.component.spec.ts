import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo33Component } from './lib52-demo33.component';

describe('Lib52Demo33Component', () => {
  let component: Lib52Demo33Component;
  let fixture: ComponentFixture<Lib52Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
