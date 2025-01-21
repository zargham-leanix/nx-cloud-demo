import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo9Component } from './lib13-demo9.component';

describe('Lib13Demo9Component', () => {
  let component: Lib13Demo9Component;
  let fixture: ComponentFixture<Lib13Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
