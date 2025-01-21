import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo9Component } from './lib9-demo9.component';

describe('Lib9Demo9Component', () => {
  let component: Lib9Demo9Component;
  let fixture: ComponentFixture<Lib9Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
