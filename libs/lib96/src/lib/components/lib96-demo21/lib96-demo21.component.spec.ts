import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo21Component } from './lib96-demo21.component';

describe('Lib96Demo21Component', () => {
  let component: Lib96Demo21Component;
  let fixture: ComponentFixture<Lib96Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
