import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo9Component } from './lib96-demo9.component';

describe('Lib96Demo9Component', () => {
  let component: Lib96Demo9Component;
  let fixture: ComponentFixture<Lib96Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
