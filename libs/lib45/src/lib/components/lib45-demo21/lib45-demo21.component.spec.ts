import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo21Component } from './lib45-demo21.component';

describe('Lib45Demo21Component', () => {
  let component: Lib45Demo21Component;
  let fixture: ComponentFixture<Lib45Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
