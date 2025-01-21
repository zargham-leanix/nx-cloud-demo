import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo13Component } from './lib52-demo13.component';

describe('Lib52Demo13Component', () => {
  let component: Lib52Demo13Component;
  let fixture: ComponentFixture<Lib52Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
