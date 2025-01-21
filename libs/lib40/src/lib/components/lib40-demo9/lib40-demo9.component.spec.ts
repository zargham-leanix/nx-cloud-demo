import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo9Component } from './lib40-demo9.component';

describe('Lib40Demo9Component', () => {
  let component: Lib40Demo9Component;
  let fixture: ComponentFixture<Lib40Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
