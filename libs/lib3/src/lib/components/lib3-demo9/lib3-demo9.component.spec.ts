import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo9Component } from './lib3-demo9.component';

describe('Lib3Demo9Component', () => {
  let component: Lib3Demo9Component;
  let fixture: ComponentFixture<Lib3Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
