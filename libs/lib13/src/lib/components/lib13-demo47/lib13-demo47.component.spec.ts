import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo47Component } from './lib13-demo47.component';

describe('Lib13Demo47Component', () => {
  let component: Lib13Demo47Component;
  let fixture: ComponentFixture<Lib13Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
