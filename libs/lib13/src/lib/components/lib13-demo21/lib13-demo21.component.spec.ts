import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo21Component } from './lib13-demo21.component';

describe('Lib13Demo21Component', () => {
  let component: Lib13Demo21Component;
  let fixture: ComponentFixture<Lib13Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
