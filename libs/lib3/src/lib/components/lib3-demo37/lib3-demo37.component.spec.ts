import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo37Component } from './lib3-demo37.component';

describe('Lib3Demo37Component', () => {
  let component: Lib3Demo37Component;
  let fixture: ComponentFixture<Lib3Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
