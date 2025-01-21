import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo39Component } from './lib26-demo39.component';

describe('Lib26Demo39Component', () => {
  let component: Lib26Demo39Component;
  let fixture: ComponentFixture<Lib26Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
