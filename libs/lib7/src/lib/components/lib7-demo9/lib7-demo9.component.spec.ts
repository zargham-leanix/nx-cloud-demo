import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo9Component } from './lib7-demo9.component';

describe('Lib7Demo9Component', () => {
  let component: Lib7Demo9Component;
  let fixture: ComponentFixture<Lib7Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
