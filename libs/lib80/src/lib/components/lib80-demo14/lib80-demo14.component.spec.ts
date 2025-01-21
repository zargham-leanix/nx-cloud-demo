import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo14Component } from './lib80-demo14.component';

describe('Lib80Demo14Component', () => {
  let component: Lib80Demo14Component;
  let fixture: ComponentFixture<Lib80Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
