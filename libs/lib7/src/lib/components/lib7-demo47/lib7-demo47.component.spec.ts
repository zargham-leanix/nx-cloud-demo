import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo47Component } from './lib7-demo47.component';

describe('Lib7Demo47Component', () => {
  let component: Lib7Demo47Component;
  let fixture: ComponentFixture<Lib7Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
