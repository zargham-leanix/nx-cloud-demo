import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo47Component } from './lib70-demo47.component';

describe('Lib70Demo47Component', () => {
  let component: Lib70Demo47Component;
  let fixture: ComponentFixture<Lib70Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
