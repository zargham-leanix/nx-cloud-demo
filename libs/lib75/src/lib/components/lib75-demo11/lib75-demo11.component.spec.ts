import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo11Component } from './lib75-demo11.component';

describe('Lib75Demo11Component', () => {
  let component: Lib75Demo11Component;
  let fixture: ComponentFixture<Lib75Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
