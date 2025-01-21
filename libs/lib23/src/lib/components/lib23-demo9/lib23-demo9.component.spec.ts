import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo9Component } from './lib23-demo9.component';

describe('Lib23Demo9Component', () => {
  let component: Lib23Demo9Component;
  let fixture: ComponentFixture<Lib23Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
