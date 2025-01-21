import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo47Component } from './lib3-demo47.component';

describe('Lib3Demo47Component', () => {
  let component: Lib3Demo47Component;
  let fixture: ComponentFixture<Lib3Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
