import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo11Component } from './lib41-demo11.component';

describe('Lib41Demo11Component', () => {
  let component: Lib41Demo11Component;
  let fixture: ComponentFixture<Lib41Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
