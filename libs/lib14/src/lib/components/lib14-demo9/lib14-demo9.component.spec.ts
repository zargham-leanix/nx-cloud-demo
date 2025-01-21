import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo9Component } from './lib14-demo9.component';

describe('Lib14Demo9Component', () => {
  let component: Lib14Demo9Component;
  let fixture: ComponentFixture<Lib14Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
