import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo17Component } from './lib75-demo17.component';

describe('Lib75Demo17Component', () => {
  let component: Lib75Demo17Component;
  let fixture: ComponentFixture<Lib75Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
