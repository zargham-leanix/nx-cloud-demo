import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo32Component } from './lib52-demo32.component';

describe('Lib52Demo32Component', () => {
  let component: Lib52Demo32Component;
  let fixture: ComponentFixture<Lib52Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
