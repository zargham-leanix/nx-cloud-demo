import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo9Component } from './lib79-demo9.component';

describe('Lib79Demo9Component', () => {
  let component: Lib79Demo9Component;
  let fixture: ComponentFixture<Lib79Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
