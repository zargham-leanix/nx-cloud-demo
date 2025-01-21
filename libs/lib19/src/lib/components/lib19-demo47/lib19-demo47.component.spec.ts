import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo47Component } from './lib19-demo47.component';

describe('Lib19Demo47Component', () => {
  let component: Lib19Demo47Component;
  let fixture: ComponentFixture<Lib19Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
