import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo40Component } from './lib52-demo40.component';

describe('Lib52Demo40Component', () => {
  let component: Lib52Demo40Component;
  let fixture: ComponentFixture<Lib52Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
