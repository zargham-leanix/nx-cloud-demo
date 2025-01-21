import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo13Component } from './lib80-demo13.component';

describe('Lib80Demo13Component', () => {
  let component: Lib80Demo13Component;
  let fixture: ComponentFixture<Lib80Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
