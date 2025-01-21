import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo9Component } from './lib21-demo9.component';

describe('Lib21Demo9Component', () => {
  let component: Lib21Demo9Component;
  let fixture: ComponentFixture<Lib21Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
