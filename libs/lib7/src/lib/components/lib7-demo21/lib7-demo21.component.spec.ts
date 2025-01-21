import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo21Component } from './lib7-demo21.component';

describe('Lib7Demo21Component', () => {
  let component: Lib7Demo21Component;
  let fixture: ComponentFixture<Lib7Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
