import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo47Component } from './lib9-demo47.component';

describe('Lib9Demo47Component', () => {
  let component: Lib9Demo47Component;
  let fixture: ComponentFixture<Lib9Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
