import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo2Component } from './lib58-demo2.component';

describe('Lib58Demo2Component', () => {
  let component: Lib58Demo2Component;
  let fixture: ComponentFixture<Lib58Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
