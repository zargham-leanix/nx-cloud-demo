import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo9Component } from './lib51-demo9.component';

describe('Lib51Demo9Component', () => {
  let component: Lib51Demo9Component;
  let fixture: ComponentFixture<Lib51Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
