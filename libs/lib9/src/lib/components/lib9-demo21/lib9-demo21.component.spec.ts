import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo21Component } from './lib9-demo21.component';

describe('Lib9Demo21Component', () => {
  let component: Lib9Demo21Component;
  let fixture: ComponentFixture<Lib9Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
