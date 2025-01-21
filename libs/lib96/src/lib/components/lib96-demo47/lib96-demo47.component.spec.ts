import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo47Component } from './lib96-demo47.component';

describe('Lib96Demo47Component', () => {
  let component: Lib96Demo47Component;
  let fixture: ComponentFixture<Lib96Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
