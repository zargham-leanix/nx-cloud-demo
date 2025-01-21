import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo14Component } from './lib41-demo14.component';

describe('Lib41Demo14Component', () => {
  let component: Lib41Demo14Component;
  let fixture: ComponentFixture<Lib41Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
