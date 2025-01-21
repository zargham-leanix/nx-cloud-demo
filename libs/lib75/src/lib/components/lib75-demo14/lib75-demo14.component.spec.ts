import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo14Component } from './lib75-demo14.component';

describe('Lib75Demo14Component', () => {
  let component: Lib75Demo14Component;
  let fixture: ComponentFixture<Lib75Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
