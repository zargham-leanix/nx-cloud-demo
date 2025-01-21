import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo9Component } from './lib72-demo9.component';

describe('Lib72Demo9Component', () => {
  let component: Lib72Demo9Component;
  let fixture: ComponentFixture<Lib72Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
