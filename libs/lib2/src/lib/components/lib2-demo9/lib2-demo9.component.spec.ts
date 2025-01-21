import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo9Component } from './lib2-demo9.component';

describe('Lib2Demo9Component', () => {
  let component: Lib2Demo9Component;
  let fixture: ComponentFixture<Lib2Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
