import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo9Component } from './lib97-demo9.component';

describe('Lib97Demo9Component', () => {
  let component: Lib97Demo9Component;
  let fixture: ComponentFixture<Lib97Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
