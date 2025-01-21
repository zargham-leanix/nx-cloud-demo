import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo0Component } from './lib3-demo0.component';

describe('Lib3Demo0Component', () => {
  let component: Lib3Demo0Component;
  let fixture: ComponentFixture<Lib3Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
