import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo47Component } from './lib43-demo47.component';

describe('Lib43Demo47Component', () => {
  let component: Lib43Demo47Component;
  let fixture: ComponentFixture<Lib43Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
