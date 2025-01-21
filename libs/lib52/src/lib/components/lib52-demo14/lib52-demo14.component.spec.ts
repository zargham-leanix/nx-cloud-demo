import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo14Component } from './lib52-demo14.component';

describe('Lib52Demo14Component', () => {
  let component: Lib52Demo14Component;
  let fixture: ComponentFixture<Lib52Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
