import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo2Component } from './lib72-demo2.component';

describe('Lib72Demo2Component', () => {
  let component: Lib72Demo2Component;
  let fixture: ComponentFixture<Lib72Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
