import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo17Component } from './lib52-demo17.component';

describe('Lib52Demo17Component', () => {
  let component: Lib52Demo17Component;
  let fixture: ComponentFixture<Lib52Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
