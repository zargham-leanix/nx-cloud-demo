import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo9Component } from './lib46-demo9.component';

describe('Lib46Demo9Component', () => {
  let component: Lib46Demo9Component;
  let fixture: ComponentFixture<Lib46Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
