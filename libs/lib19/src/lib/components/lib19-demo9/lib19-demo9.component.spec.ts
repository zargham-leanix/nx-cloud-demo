import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo9Component } from './lib19-demo9.component';

describe('Lib19Demo9Component', () => {
  let component: Lib19Demo9Component;
  let fixture: ComponentFixture<Lib19Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
