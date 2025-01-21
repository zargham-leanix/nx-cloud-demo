import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo17Component } from './lib80-demo17.component';

describe('Lib80Demo17Component', () => {
  let component: Lib80Demo17Component;
  let fixture: ComponentFixture<Lib80Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
