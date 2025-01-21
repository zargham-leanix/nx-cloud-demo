import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo2Component } from './lib52-demo2.component';

describe('Lib52Demo2Component', () => {
  let component: Lib52Demo2Component;
  let fixture: ComponentFixture<Lib52Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
