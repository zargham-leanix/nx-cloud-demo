import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo14Component } from './lib47-demo14.component';

describe('Lib47Demo14Component', () => {
  let component: Lib47Demo14Component;
  let fixture: ComponentFixture<Lib47Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
