import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo9Component } from './lib45-demo9.component';

describe('Lib45Demo9Component', () => {
  let component: Lib45Demo9Component;
  let fixture: ComponentFixture<Lib45Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
