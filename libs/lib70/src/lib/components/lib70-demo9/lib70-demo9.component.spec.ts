import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo9Component } from './lib70-demo9.component';

describe('Lib70Demo9Component', () => {
  let component: Lib70Demo9Component;
  let fixture: ComponentFixture<Lib70Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
