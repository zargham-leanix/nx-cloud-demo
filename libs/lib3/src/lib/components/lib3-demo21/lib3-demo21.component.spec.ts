import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo21Component } from './lib3-demo21.component';

describe('Lib3Demo21Component', () => {
  let component: Lib3Demo21Component;
  let fixture: ComponentFixture<Lib3Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
