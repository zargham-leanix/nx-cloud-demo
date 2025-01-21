import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo21Component } from './lib2-demo21.component';

describe('Lib2Demo21Component', () => {
  let component: Lib2Demo21Component;
  let fixture: ComponentFixture<Lib2Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
