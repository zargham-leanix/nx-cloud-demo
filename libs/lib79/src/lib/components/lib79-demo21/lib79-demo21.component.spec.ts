import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo21Component } from './lib79-demo21.component';

describe('Lib79Demo21Component', () => {
  let component: Lib79Demo21Component;
  let fixture: ComponentFixture<Lib79Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
