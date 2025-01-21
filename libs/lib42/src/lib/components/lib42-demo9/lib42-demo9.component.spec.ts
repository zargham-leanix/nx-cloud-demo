import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo9Component } from './lib42-demo9.component';

describe('Lib42Demo9Component', () => {
  let component: Lib42Demo9Component;
  let fixture: ComponentFixture<Lib42Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
