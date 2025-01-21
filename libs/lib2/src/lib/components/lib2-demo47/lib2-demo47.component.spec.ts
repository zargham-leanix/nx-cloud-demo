import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo47Component } from './lib2-demo47.component';

describe('Lib2Demo47Component', () => {
  let component: Lib2Demo47Component;
  let fixture: ComponentFixture<Lib2Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
