import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo9Component } from './lib64-demo9.component';

describe('Lib64Demo9Component', () => {
  let component: Lib64Demo9Component;
  let fixture: ComponentFixture<Lib64Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
