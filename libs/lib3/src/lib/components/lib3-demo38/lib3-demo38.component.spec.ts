import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo38Component } from './lib3-demo38.component';

describe('Lib3Demo38Component', () => {
  let component: Lib3Demo38Component;
  let fixture: ComponentFixture<Lib3Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
