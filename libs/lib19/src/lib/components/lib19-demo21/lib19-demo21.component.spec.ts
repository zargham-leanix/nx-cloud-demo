import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo21Component } from './lib19-demo21.component';

describe('Lib19Demo21Component', () => {
  let component: Lib19Demo21Component;
  let fixture: ComponentFixture<Lib19Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
