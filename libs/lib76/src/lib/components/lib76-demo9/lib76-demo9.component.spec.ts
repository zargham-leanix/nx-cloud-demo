import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo9Component } from './lib76-demo9.component';

describe('Lib76Demo9Component', () => {
  let component: Lib76Demo9Component;
  let fixture: ComponentFixture<Lib76Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
