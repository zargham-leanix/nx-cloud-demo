import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo21Component } from './lib5-demo21.component';

describe('Lib5Demo21Component', () => {
  let component: Lib5Demo21Component;
  let fixture: ComponentFixture<Lib5Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
